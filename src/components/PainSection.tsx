"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  XCircle,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const painPoints = [
  {
    icon: XCircle,
    text: "Planilha estática: perdeu um dia e tudo acumula. Você sente que falhou.",
  },
  {
    icon: XCircle,
    text: "Bola de neve de matéria atrasada — culpa, ansiedade e vontade de desistir.",
  },
  {
    icon: XCircle,
    text: "Revisa \"quando dá vontade\", não quando a ciência manda. Esquece tudo na prova.",
  },
  {
    icon: XCircle,
    text: "Nenhuma ideia se o plano está funcionando. Estuda no escuro, torce para dar certo.",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    text: "Perdeu um dia? O algoritmo recalcula a rota silenciosamente. Zero culpa, zero acúmulo.",
  },
  {
    icon: CheckCircle2,
    text: "Sem bola de neve: o cronograma funciona em ciclos adaptativos, não como calendário fixo.",
  },
  {
    icon: CheckCircle2,
    text: "Revisões no momento exato antes de esquecer — FSRS-4.5 calcula para você.",
  },
  {
    icon: CheckCircle2,
    text: "Dashboard em tempo real: Score por matéria, progresso do edital, previsão de conclusão.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodo" className="relative py-24 lg:py-32 section-glow">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
            <AlertTriangle className="w-3 h-3" />
            A verdade que ninguém conta
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Por que{" "}
            <span className="text-red-400">93% dos concurseiros</span>{" "}
            desistem?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Não é falta de inteligência. É falta de um sistema que não te
            abandona quando você falha.
          </p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* ❌ Without Protocolo 45 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-red-500/[0.06] to-transparent border border-red-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/15 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-400">Método Tradicional</h3>
                <p className="text-xs text-[var(--text-muted)]">
                  O modelo que gera frustração
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {painPoints.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-3 p-3 rounded-lg bg-red-500/[0.04] border border-red-500/[0.06]"
                >
                  <item.icon className="w-5 h-5 text-red-400/70 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Emotional kicker */}
            <div className="mt-6 p-4 rounded-lg bg-red-500/[0.05] border border-red-500/10">
              <p className="text-sm text-red-300/80 italic leading-relaxed">
                &ldquo;Perdi 3 meses de estudo porque pulei uma semana e a
                planilha virou um monstro. Achei que o problema era eu.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* ✅ With Protocolo 45 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-6 lg:p-8 bg-gradient-to-br from-cyan-500/[0.06] to-transparent border border-cyan-500/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[var(--cyan-vivid)]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--cyan-vivid)]">
                  Protocolo 45
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  O sistema que trabalha com você
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i + 4}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="flex items-start gap-3 p-3 rounded-lg bg-cyan-500/[0.04] border border-cyan-500/[0.06]"
                >
                  <item.icon className="w-5 h-5 text-emerald-400/70 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Positive kicker */}
            <div className="mt-6 p-4 rounded-lg bg-cyan-500/[0.05] border border-cyan-500/10">
              <p className="text-sm text-cyan-300/80 italic leading-relaxed">
                &ldquo;Voltei de 5 dias sem estudar e o Protocolo 45 já tinha ajustado
                tudo. Não precisei refazer nenhuma planilha.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
