"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Brain, RefreshCw } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Priorização Inteligente",
    subtitle: "Score dinâmico por submatéria",
    description:
      "O Motor P45 combina os pesos oficiais disponíveis, seu desempenho, o estágio do conteúdo e a proximidade da prova. A incidência histórica aparece como orientação para o aluno, sem comandar o planejamento.",
    highlight: "Evidência histórica orienta; não governa a rota",
    color: "cyan",
  },
  {
    icon: Brain,
    title: "Revisões Científicas",
    subtitle: "FSRS-6 integrado ao Motor P45",
    description:
      "O FSRS estima a retenção de cada conteúdo a partir do seu histórico e agenda revisões em intervalos adaptativos. O Motor P45 protege espaço para teoria e questões dentro da carga disponível.",
    highlight: "Memória adaptativa com carga diária protegida",
    color: "blue",
  },
  {
    icon: RefreshCw,
    title: "Flexibilidade Real",
    subtitle: "Recálculo automático em tempo real",
    description:
      "Perdeu um dia ou precisou mudar seus horários? A rota é recalculada a partir do que foi realmente concluído, preservando prioridades e revisões futuras.",
    highlight: "Recálculo a partir da execução real",
    color: "amber",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "cyan":
      return {
        iconBg: "bg-cyan-500/15",
        iconText: "text-cyan-400",
        border: "border-cyan-500/20 hover:border-cyan-500/40",
        glow: "group-hover:shadow-cyan-500/10",
        highlight: "text-cyan-400",
        badgeBg: "bg-cyan-500/10",
      };
    case "blue":
      return {
        iconBg: "bg-blue-500/15",
        iconText: "text-blue-400",
        border: "border-blue-500/20 hover:border-blue-500/40",
        glow: "group-hover:shadow-blue-500/10",
        highlight: "text-blue-400",
        badgeBg: "bg-blue-500/10",
      };
    case "amber":
      return {
        iconBg: "bg-amber-500/15",
        iconText: "text-amber-400",
        border: "border-amber-500/20 hover:border-amber-500/40",
        glow: "group-hover:shadow-amber-500/10",
        highlight: "text-amber-400",
        badgeBg: "bg-amber-500/10",
      };
    default:
      return {
        iconBg: "bg-cyan-500/15",
        iconText: "text-cyan-400",
        border: "border-cyan-500/20",
        glow: "",
        highlight: "text-cyan-400",
        badgeBg: "bg-cyan-500/10",
      };
  }
};

export default function PillarsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pilares" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Três pilares.{" "}
            <span className="gradient-text">Um sistema completo.</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Cada pilar resolve uma dimensão diferente do problema. Juntos, formam
            uma rota clara para decidir o que estudar hoje.
          </p>
        </motion.div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const colors = getColorClasses(pillar.color);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className={`group relative rounded-2xl p-6 lg:p-8 bg-[var(--surface-1)] border ${colors.border} shadow-lg shadow-black/20 ${colors.glow} group-hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center mb-6`}
                >
                  <pillar.icon className={`w-7 h-7 ${colors.iconText}`} />
                </div>

                {/* Content */}
                <h3
                  className="text-xl font-bold text-white mb-1"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {pillar.title}
                </h3>
                <p className={`text-sm ${colors.highlight} font-medium mb-4`}>
                  {pillar.subtitle}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Highlight badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.badgeBg} border border-white/5`}
                >
                  <span className={`text-xs font-mono ${colors.highlight}`}>
                    {pillar.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
