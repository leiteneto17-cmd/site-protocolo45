"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { API_URL } from "@/lib/constants";

type Template = {
  id: string;
  nome: string;
  cargo?: string;
  banca: string;
  category?: string;
  exam_date_status: string;
};

const featuredNames = ["INSS -", "PRF -", "Receita Federal - Auditor", "SEDUC CE 2026 - Professor"];

function normalize(text: string) {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function featuredTemplates(templates: Template[]) {
  const selected = featuredNames
    .map((name) => templates.find((item) => item.nome.includes(name)))
    .filter((item): item is Template => Boolean(item));
  const categories = new Set(selected.map((item) => item.category));
  for (const item of templates) {
    if (selected.length >= 4) break;
    if (!selected.some((chosen) => chosen.id === item.id) && !categories.has(item.category)) {
      selected.push(item);
      categories.add(item.category);
    }
  }
  return selected.slice(0, 4);
}

export default function CatalogLookup() {
  const [templates, setTemplates] = useState<Template[] | null>(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/public/contest-templates`, { signal: controller.signal, cache: "no-store" })
      .then((response) => {
        if (!response.ok) throw new Error("Catálogo indisponível");
        return response.json();
      })
      .then((body) => {
        if (!Array.isArray(body.templates)) throw new Error("Catálogo indisponível");
        setTemplates(body.templates);
      })
      .catch(() => { if (!controller.signal.aborted) setError(true); });
    return () => controller.abort();
  }, []);

  const term = query.trim();
  const filtered = (templates ?? []).filter((item) =>
    normalize(`${item.nome} ${item.cargo ?? ""} ${item.banca}`).includes(normalize(term))
  );
  const visible = term ? filtered.slice(0, 6) : featuredTemplates(templates ?? []);

  return (
    <section id="catalogo" className="scroll-mt-6 border-b border-[#e7e1d9] bg-[#f0ebf5] px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5c4185]">Comece pelo seu objetivo</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Seu concurso já está aqui?</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5d6576]">Encontre uma missão pronta. Se o seu edital ainda não estiver no catálogo, você pode cadastrá-lo no app.</p>
        </div>

        <div className="rounded-2xl border border-[#d9cbe7] bg-[#fffdfa] p-4 shadow-[0_10px_25px_-20px_#5c4185] sm:p-6">
          <label className="flex min-h-12 items-center gap-3 rounded-xl border border-[#cfc0de] bg-white px-4 focus-within:border-[#5c4185] focus-within:ring-2 focus-within:ring-[#d9cbe7]">
            <Search size={19} className="shrink-0 text-[#5c4185]" aria-hidden="true" />
            <span className="sr-only">Buscar concurso, cargo ou banca</span>
            <input className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque seu concurso, cargo ou banca" />
          </label>

          {error ? <p role="status" className="mt-4 text-sm text-[#5d6576]">Não conseguimos consultar o catálogo agora. Você também pode conferir as missões no app.</p>
            : templates === null ? <p role="status" className="mt-4 text-sm text-[#5d6576]">Consultando as missões disponíveis…</p>
              : <>
                <div className="mb-3 mt-5 flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-bold">{term ? "Resultados da busca" : "Algumas missões disponíveis"}</h3>
                  <p role="status" className="text-xs text-[#647083]">{term ? `${filtered.length} ${filtered.length === 1 ? "missão encontrada" : "missões encontradas"}` : `${templates.length} missões no catálogo`}</p>
                </div>
                {visible.length > 0 ? <ul className="grid gap-3 sm:grid-cols-2" aria-label={term ? "Resultados de concursos" : "Exemplos de concursos disponíveis"}>
                  {visible.map((item) => <li key={item.id} className="rounded-xl border border-[#e7e1d9] bg-white p-4">
                    <div className="text-sm font-semibold leading-snug">{item.nome}</div>
                    <div className="mt-2 text-xs text-[#647083]">{item.banca} · {item.exam_date_status === "official" ? "Data oficial no edital" : item.exam_date_status === "forecast" ? "Preparação pré-edital" : "Data definida por você"}</div>
                  </li>)}
                </ul> : <p className="rounded-xl bg-[#f7f5f1] p-4 text-sm text-[#5d6576]">Nenhuma missão encontrada. Você pode cadastrar seu edital no app.</p>}
                {term && filtered.length > visible.length && <p className="mt-3 text-xs text-[#647083]">Mostrando as primeiras {visible.length} missões. Digite mais detalhes para refinar a busca.</p>}
              </>}
        </div>
      </div>
    </section>
  );
}
