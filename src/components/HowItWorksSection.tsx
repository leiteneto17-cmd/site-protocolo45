import { ClipboardList, PlayCircle, Route } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Escolha e ajuste",
    text: "Selecione uma missão do catálogo, informe seus horários e confirme a data da prova ou o horizonte de preparação.",
  },
  {
    icon: PlayCircle,
    title: "Estude a missão do dia",
    text: "Execute teoria, questões e revisões dentro do tempo disponível, sem decidir sozinho a próxima prioridade.",
  },
  {
    icon: Route,
    title: "Registre o resultado",
    text: "O Motor P45 usa sua execução para recalcular a rota seguinte e manter o histórico de estudo.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Como funciona <span className="gradient-text">na prática</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[var(--text-secondary)]">
            Três passos para sair da decisão diária e entrar em uma rotina
            orientada.
          </p>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="glass rounded-2xl p-6">
              <div className="mb-5 flex items-center justify-between">
                <step.icon className="h-7 w-7 text-cyan-300" aria-hidden="true" />
                <span className="text-3xl font-extrabold text-white/10">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
