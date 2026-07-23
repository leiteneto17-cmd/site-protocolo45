import { CalendarCheck2, ListChecks, RefreshCw, ShieldCheck } from "lucide-react";

const demos = [
  {
    icon: ListChecks,
    label: "1. Escolha a missão",
    title: "Concurso estruturado",
    text: "Comece por uma missão do catálogo, com matérias e pesos preservados conforme a fonte disponível.",
    visual: ["Segurança e Operações", "Fiscal e Controle", "Administrativo"],
  },
  {
    icon: CalendarCheck2,
    label: "2. Execute o dia",
    title: "Missões claras",
    text: "Veja o tópico, o método e o tempo previsto. Você não precisa montar a agenda toda manhã.",
    visual: ["Teoria · 35 min", "Questões · 25 min", "Revisão · 20 min"],
  },
  {
    icon: RefreshCw,
    label: "3. Registre e continue",
    title: "Rota recalculada",
    text: "Conclusões, resultados e mudanças de horário reorganizam as próximas missões.",
    visual: ["Histórico preservado", "Revisões protegidas", "Próxima rota pronta"],
  },
];

export default function ProductDemoSection() {
  return (
    <section id="produto" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            O que você recebe
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Do concurso à missão de hoje,{" "}
            <span className="gradient-text">sem montar planilhas.</span>
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            O Protocolo 45 organiza a preparação em uma sequência simples:
            escolher, executar, registrar e recalcular.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {demos.map((demo) => (
            <article
              key={demo.title}
              className="rounded-2xl border border-white/10 bg-[var(--surface-1)] p-5 shadow-xl shadow-black/20"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                  <demo.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                  {demo.label}
                </span>
              </div>
              <div className="mb-5 rounded-xl border border-white/10 bg-[#f8fafc] p-4 text-slate-950">
                <div className="mb-3 flex items-center justify-between">
                  <strong className="text-sm">{demo.title}</strong>
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-2">
                  {demo.visual.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {demo.text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-[var(--text-muted)]">
          Representação visual do fluxo do produto. Conteúdos e durações mudam
          conforme cada preparação.
        </p>
      </div>
    </section>
  );
}
