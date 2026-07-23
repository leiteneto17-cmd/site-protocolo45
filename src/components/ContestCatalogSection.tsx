"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Cpu,
  Grid2X2,
  Landmark,
  Scale,
  Search,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { LOGIN_URL } from "@/lib/constants";

type Area =
  | "all"
  | "seguranca"
  | "administrativo"
  | "fiscal"
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
  { id: "tecnologia", label: "Tecnologia", icon: Cpu },
  { id: "juridico", label: "Jurídico", icon: Scale },
];

const MISSIONS: Mission[] = [
  { name: "PM SP 2026 — Cadete", role: "Cadete PM", area: "seguranca", board: "VUNESP", subjects: 12, status: "official", date: "16/08/2026" },
  { name: "PM SP 2026 — Aluno-Soldado", role: "Aluno-Soldado PM", area: "seguranca", board: "VUNESP", subjects: 5, status: "official", date: "20/09/2026" },
  { name: "PC PR 2026", role: "Agente de Polícia Judiciária", area: "seguranca", board: "FGV", subjects: 13, status: "official", date: "11/10/2026" },
  { name: "PC AL 2026", role: "Agente e Escrivão", area: "seguranca", board: "CEBRASPE", subjects: 15, status: "official", date: "06/12/2026" },
  { name: "PRF", role: "Policial Rodoviário Federal", area: "seguranca", board: "CEBRASPE", subjects: 14, status: "forecast" },
  { name: "PMDF", role: "Soldado Policial Militar", area: "seguranca", board: "A definir", subjects: 6, status: "forecast" },
  { name: "PC BA", role: "Investigador de Polícia Civil", area: "seguranca", board: "Instituto AOCP", subjects: 13, status: "forecast" },
  { name: "PC BA", role: "Escrivão de Polícia Civil", area: "seguranca", board: "Instituto AOCP", subjects: 13, status: "forecast" },
  { name: "Polícia Penal MS", role: "Policial Penal", area: "seguranca", board: "A definir", subjects: 3, status: "forecast" },
  { name: "INSS", role: "Técnico do Seguro Social", area: "administrativo", board: "A definir", subjects: 7, status: "forecast" },
  { name: "Banco do Brasil", role: "Escriturário — Agente Comercial", area: "administrativo", board: "A definir", subjects: 8, status: "forecast" },
  { name: "Receita Federal", role: "Auditor-Fiscal", area: "fiscal", board: "A definir", subjects: 17, status: "forecast" },
  { name: "Receita Federal", role: "Analista-Tributário", area: "fiscal", board: "A definir", subjects: 11, status: "forecast" },
  { name: "ANBIMA CPA", role: "Distribuição de investimentos", area: "fiscal", board: "ANBIMA", subjects: 4, status: "scheduled" },
  { name: "ANBIMA C-Pro I", role: "Investimentos", area: "fiscal", board: "ANBIMA", subjects: 4, status: "scheduled" },
  { name: "ANBIMA C-Pro R", role: "Relacionamento", area: "fiscal", board: "ANBIMA", subjects: 4, status: "scheduled" },
  { name: "Banco do Brasil", role: "Escriturário — Agente de Tecnologia", area: "tecnologia", board: "A definir", subjects: 7, status: "forecast" },
  { name: "48º Exame de Ordem", role: "OAB — primeira fase", area: "juridico", board: "FGV", subjects: 20, status: "official", date: "10/01/2027" },
];

const STATUS = {
  official: {
    label: "Data oficial",
    className: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  },
  forecast: {
    label: "Pré-edital",
    className: "border-blue-400/20 bg-blue-400/10 text-blue-200",
  },
  scheduled: {
    label: "Você agenda",
    className: "border-violet-400/20 bg-violet-400/10 text-violet-200",
  },
} satisfies Record<
  MissionStatus,
  { label: string; className: string }
>;

export default function ContestCatalogSection() {
  const [area, setArea] = useState<Area>("all");
  const [query, setQuery] = useState("");

  const missions = useMemo(() => {
    const needle = query
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim()
      .toLowerCase();

    return MISSIONS.filter(
      (mission) =>
        (area === "all" || mission.area === area) &&
        (!needle ||
          `${mission.name} ${mission.role} ${mission.board}`
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .includes(needle)),
    );
  }, [area, query]);

  return (
    <section id="catalogo" className="section-glow bg-[var(--surface-1)] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
            Catálogo atual
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja se o Protocolo45 já está pronto para o seu concurso
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
            São 18 missões estruturadas com matérias, tópicos e pesos conforme a
            fonte disponível. Escolha uma área ou busque pelo concurso.
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
              className="w-full rounded-2xl border border-white/10 bg-[var(--surface-0)] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-[var(--text-muted)] focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/10"
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
                      ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-100"
                      : "border-white/10 bg-white/[0.03] text-[var(--text-secondary)] hover:border-white/20 hover:text-white"
                  }`}
                >
                  <Icon aria-hidden="true" size={15} />
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {missions.map((mission) => {
              const status = STATUS[mission.status];
              return (
                <article
                  key={`${mission.name}-${mission.role}`}
                  className="glass-subtle flex min-h-48 flex-col rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/20"
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
                      <span className="flex items-center gap-1.5 text-cyan-200">
                        <CalendarDays aria-hidden="true" size={14} />
                        {mission.date}
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {missions.length === 0 && (
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
              className="shrink-0 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
            >
              Montar minha missão
            </a>
          </div>

          <p className="mt-4 text-center text-xs text-[var(--text-muted)]">
            Catálogo atualizado em 23 de julho de 2026. Em missões pré-edital,
            o último conteúdo oficial serve como base e é revisado quando o novo
            edital é publicado.
          </p>
        </div>
      </div>
    </section>
  );
}
