import { Check, Compass, X } from "lucide-react";

const isNot = [
  "Não é cursinho: não tem videoaula, professor nem apostila.",
  "Não é banco de questões: você resolve na plataforma que já assina.",
  "Não é material de estudo: não entregamos PDF, resumo nem mapa mental.",
  "Não substitui o seu conteúdo — ele decide como você usa o que já tem.",
];

const is = [
  "Decide o que estudar hoje: tópico do edital, método e tempo previsto.",
  "Agenda suas revisões pelo FSRS-6, antes de você esquecer.",
  "Recalcula a rota quando você falha um dia ou muda de horário.",
  "Mostra cobertura do edital, desempenho e o motivo de cada missão.",
];

export default function ScopeSection() {
  return (
    <section id="escopo" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
            <Compass className="h-3.5 w-3.5 text-cyan-300" />
            Antes de assinar, entenda o que você leva
          </span>
          <h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            O Protocolo 45 é o{" "}
            <span className="gradient-text">GPS</span>, não a estrada.
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            O conteúdo para passar já existe e você provavelmente já o tem
            demais. O que falta é a estratégia que diz por onde ir a cada dia —
            e que se refaz quando a vida atrapalha.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* O que NÃO é */}
          <div className="rounded-2xl border border-red-500/10 bg-gradient-to-br from-red-500/[0.06] to-transparent p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/15">
                <X className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">
                  O que o Protocolo 45 não é
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  Aqui não vendemos conteúdo
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {isNot.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-red-500/[0.06] bg-red-500/[0.04] p-3"
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-red-400/70" />
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* O que É */}
          <div className="rounded-2xl border border-cyan-500/10 bg-gradient-to-br from-cyan-500/[0.06] to-transparent p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15">
                <Compass className="h-5 w-5 text-[var(--cyan-vivid)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cyan-vivid)]">
                  O que você assina
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  A decisão, calculada todo dia
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {is.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-cyan-500/[0.06] bg-cyan-500/[0.04] p-3"
                >
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400/70" />
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-[var(--text-muted)]">
          Funciona com qualquer material: cursinho online, PDFs, livros,
          videoaulas gratuitas e a plataforma de questões que você já usa.
        </p>
      </div>
    </section>
  );
}
