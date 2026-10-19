"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { API_URL } from "@/lib/constants";

type Template = { id: string; nome: string; cargo?: string; banca: string; exam_date_status: string };

export default function CatalogLookup() {
  const [open, setOpen] = useState(false);
  const [templates, setTemplates] = useState<Template[] | null>(null);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!open || templates !== null) return;
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
  }, [open, templates]);
  const normalize = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const filtered = (templates ?? []).filter((item) => normalize(`${item.nome} ${item.cargo ?? ""} ${item.banca}`).includes(normalize(query.trim())));
  return (
    <details className="sales-card group mt-6 rounded-2xl" onToggle={(event) => { setOpen(event.currentTarget.open); if (event.currentTarget.open) setError(false); }}>
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">Meu concurso está no catálogo?<ChevronDown size={18} className="shrink-0 text-[#5c4185] transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
      {open && <div className="border-t border-[#e7e1d9] px-5 pb-5 pt-4">
        <p className="mb-3 text-sm text-[#5d6576]">Escolha uma missão pronta no app ou cadastre seu próprio edital.</p>
        <label className="flex items-center gap-2 rounded-xl border border-[#e7e1d9] bg-white px-3"><Search size={16} className="text-[#647083]" aria-hidden="true" /><span className="sr-only">Buscar concurso, cargo ou banca</span><input className="min-w-0 flex-1 bg-transparent py-3 text-sm outline-none" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Concurso, cargo ou banca" /></label>
        {error ? <p role="status" className="mt-4 text-sm text-[#5d6576]">Não conseguimos consultar o catálogo agora. Você também pode conferi-lo no app.</p> : templates === null ? <p role="status" className="mt-4 text-sm text-[#5d6576]">Consultando o catálogo…</p> : <>
          <p role="status" className="my-3 text-xs text-[#647083]">{filtered.length} {filtered.length === 1 ? "missão encontrada" : "missões encontradas"}</p>
          <ul className="max-h-64 divide-y divide-[#e7e1d9] overflow-y-auto" aria-label="Missões disponíveis">{filtered.map((item) => <li key={item.id} className="py-3"><div className="text-sm font-semibold">{item.nome}{item.cargo ? ` — ${item.cargo}` : ""}</div><div className="mt-1 text-xs text-[#647083]">{item.banca} · {item.exam_date_status === "official" ? "Data oficial no edital" : item.exam_date_status === "forecast" ? "Preparação pré-edital" : "Data definida por você"}</div></li>)}</ul>
          {filtered.length === 0 && <p className="text-sm text-[#5d6576]">Não encontrou? O cadastro manual permite organizar seu edital no app.</p>}
        </>}
      </div>}
    </details>
  );
}
