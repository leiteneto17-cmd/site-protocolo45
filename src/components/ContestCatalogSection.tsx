"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BookOpen,
  CalendarDays,
  ChevronDown,
  Cpu,
  GraduationCap,
  Grid2X2,
  Landmark,
  Scale,
  Search,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { API_URL, LOGIN_URL } from "@/lib/constants";

type Area =
  | "all"
  | "seguranca"
  | "administrativo"
  | "fiscal"
  | "educacao"
  | "enem"
  | "tecnologia"
  | "juridico";

type MissionStatus = "official" | "forecast" | "scheduled";

type Mission = {
  name: string;
  role: string;
  area: Exclude<Area, "all">;
  board: string;
  subjects: number;
  status: MissionStatus;
  date?: string;
};

const AREAS: {
  id: Area;
  label: string;
  icon: LucideIcon;
}[] = [
  { id: "all", label: "Todos", icon: Grid2X2 },
  { id: "seguranca", label: "Segurança", icon: Shield },
  { id: "administrativo", label: "Administrativo", icon: Landmark },
  { id: "fiscal", label: "Fiscal e finanças", icon: Landmark },
  { id: "educacao", label: "Educação", icon: BookOpen },
  { id: "enem", label: "ENEM", icon: GraduationCap },
  { id: "tecnologia", label: "Tecnologia", icon: Cpu },
  { id: "juridico", label: "Jurídico", icon: Scale },
];

type CatalogTemplate = {
  id: string;
  nome: string;
  cargo?: string | null;
  category: string;
  banca: string;
  n_materias: number;
  exam_date: string;
  exam_date_status: "official" | "forecast" | "user_provided";
};

const AREA_BY_CATEGORY: Record<string, Exclude<Area, "all">> = {
  seguranca_operacoes: "seguranca",
  administrativo_previdenciario: "administrativo",
  fiscal_controle: "fiscal",
  educacao_humanas: "educacao",
  enem: "enem",
  tecnologia: "tecnologia",
  juridico: "juridico",
};

function toMission(template: CatalogTemplate): Mission {
  const status: MissionStatus = template.exam_date_status === "user_provided"
    ? "scheduled"
    : template.exam_date_status;
  return {
    name: template.nome,
    role: template.cargo ?? "",
    area: AREA_BY_CATEGORY[template.category] ?? "administrativo",
    board: template.banca,
    subjects: template.n_materias,
    status,
    date: status === "official"
      ? new Date(`${template.exam_date}T12:00:00`).toLocaleDateString("pt-BR")
      : undefined,
  };
}

const STATUS = {
  official: {
    label: "Data prevista no edital",
    className: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  forecast: {
    label: "Pré-edital",
    className: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
  scheduled: {
    label: "Você agenda",
    className: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
} satisfies Record<
  MissionStatus,
  { label: string; className: string }
>;

/** Quantos cartões aparecem antes de o visitante pedir a lista inteira.
 *  A lista completa no celular tinha 12 telas de rolagem e empurrava o
 *  produto e o preço para baixo — quem chega pelo telefone desistia antes.
 *  O número total continua dito em texto; o que muda é quanto rola. */
const PREVIEW_COUNT = 9;

/** A prévia é um round-robin por área, não os nove primeiros da lista: a
 *  ordem crua começa com dez missões de segurança seguidas e faz o catálogo
 *  parecer só policial. Assim o visitante vê de cara que há educação, fiscal,
 *  jurídico e ENEM — e as datas oficiais, que são as mais concretas, entram
 *  antes das pré-edital. */
function preview(list: Mission[]): Mission[] {
  const byArea = new Map<string, Mission[]>();
  for (const mission of [...list].sort((a, b) =>
    a.status === b.status ? 0 : a.status === "official" ? -1 : 1,
  )) {
    const bucket = byArea.get(mission.area) ?? [];
    bucket.push(mission);
    byArea.set(mission.area, bucket);
  }
  const queues = [...byArea.values()];
  const out: Mission[] = [];
  while (out.length < PREVIEW_COUNT && queues.some((q) => q.length)) {
    for (const queue of queues) {
      const next = queue.shift();
      if (next) out.push(next);
      if (out.length === PREVIEW_COUNT) break;
    }
  }
  return out;
}

export default function ContestCatalogSection() {
  const [area, setArea] = useState<Area>("all");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [catalog, setCatalog] = useState<Mission[] | null>(null);
  const [catalogError, setCatalogError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/public/contest-templates`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Catalog unavailable");
        return response.json();
      })
      .then((body: { templates: CatalogTemplate[] }) => {
        if (!Array.isArray(body.templates)) throw new Error("Invalid catalog");
        setCatalog(body.templates.map(toMission));
      })
      .catch(() => {
        if (!controller.signal.aborted) setCatalogError(true);
      });
    return () => controller.abort();
  }, []);

  const missions = useMemo(() => {
    const needle = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();

    return (catalog ?? []).filter(
      (mission) =>
        (area === "all" || mission.area === area) &&
        (!needle ||
          `${mission.name} ${mission.role} ${mission.board}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(needle)),
    );
  }, [area, catalog, query]);

  const filtering = area !== "all" || query.trim() !== "";
  const visible = showAll || filtering ? missions : preview(missions);
  const hidden = missions.length - visible.length;

  return (
    <section id="catalogo" className="section-glow bg-[var(--surface-1)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-200">
            Catálogo atual
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja se o Protocolo45 já está pronto para o seu concurso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            {catalog === null
              ? catalogError
                ? "O catálogo está temporariamente indisponível."
                : "Consultando as missões disponíveis no app..."
              : `São ${catalog.length} missões disponíveis — matérias, tópicos e pesos conforme a fonte disponível — para o Motor P45 montar sua rota sem você digitar nada.`}
            {" "}É o mapa do edital, não o material de estudo. Escolha uma área ou busque pelo concurso.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl">
          <label className="relative block">
            <span className="sr-only">Buscar concurso ou cargo</span>
            <Search
              aria-hidden="true"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
              size={19}
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Busque por concurso, cargo ou banca"
              className="w-full rounded-2xl border border-white/10 bg-[var(--surface-0)] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-400/10"
            />
          </label>

          <div
            role="group"
            aria-label="Filtrar catálogo por área"
            className="mt-4 flex gap-2 overflow-x-auto pb-2"
          >
            {AREAS.map((item) => {
              const Icon = item.icon;
              const selected = area === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setArea(item.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selected
                      ? "border-violet-400/40 bg-violet-400/15 text-violet-100"
                      : "border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon aria-hidden="true" size={15} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {catalogError && (
            <p role="status" className="mt-6 text-center text-sm text-[var(--text-secondary)]">
              Não foi possível consultar as missões agora. Consulte o catálogo no app.
            </p>
          )}

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((mission) => {
              const status = STATUS[mission.status];
              return (
                <article
                  key={`${mission.name}-${mission.role}`}
                  className="glass-subtle flex min-h-48 flex-col rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-violet-400/20"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${status.className}`}>
                      {status.label}
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">
                      {mission.subjects} matérias
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {mission.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {mission.role}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-5 text-xs text-[var(--text-muted)]">
                    <span>{mission.board}</span>
                    {mission.date && (
                      <span className="flex items-center gap-1.5 text-violet-200">
                        <CalendarDays aria-hidden="true" size={14} />
                        {mission.date}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {hidden > 0 && (
            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/40 hover:bg-violet-400/10"
              >
                Ver as outras {hidden} missões
                <ChevronDown aria-hidden="true" size={16} />
              </button>
            </div>
          )}

          {catalog !== null && missions.length === 0 && (
            <div className="mt-6 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center">
              <p className="font-semibold text-white">
                Essa missão ainda não aparece no catálogo.
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Você ainda pode montar seu concurso manualmente dentro do
                Protocolo45.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-[var(--surface-0)] p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-semibold text-white">
                Não encontrou exatamente a sua missão?
              </p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">
                Use o cadastro manual agora; novas missões entram no catálogo
                por curadoria e são atualizadas quando sai um novo edital.
              </p>
            </div>
            <a
              href={LOGIN_URL}
              className="shrink-0 rounded-xl border border-violet-400/30 bg-violet-400/10 px-5 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-400/15"
            >
              Montar minha missão
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            Lista consultada no catálogo do app. Em missões pré-edital,
            o último conteúdo oficial serve como base e é revisado quando o novo
            edital é publicado.
          </p>
        </div>
      </div>
    </section>
  );
}
