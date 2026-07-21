"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { CHECKOUT_URL } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
} as const;


export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 animate-gradient-mesh" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--blue-royal)] opacity-20 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--cyan-vivid)] opacity-15 blur-[100px] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--amber)] opacity-[0.04] blur-[150px] pointer-events-none" />

      {/* Grid overlay (subtle tech feel) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="glass-subtle inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-[var(--cyan-vivid)] border border-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-[var(--cyan-vivid)] animate-pulse" />
                Sistema de Estudos Inteligente
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              O método matemático e{" "}
              <span className="gradient-text">blindado contra o esquecimento.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              O <span className="text-white font-semibold">PROTOCOLO 45</span> equilibra cobertura do edital, questões e revisões adaptativas FSRS-6, recalculando sua rota conforme os resultados reais.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={CHECKOUT_URL}
                className="btn-cta animate-pulse-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
              >
                Começar Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() =>
                  document
                    .querySelector("#pilares")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-[var(--text-secondary)] border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
              >
                Ver como funciona
                <ChevronDown className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[
                  "bg-blue-500",
                  "bg-cyan-500",
                  "bg-amber-500",
                  "bg-emerald-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} border-2 border-[var(--surface-0)] flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {["P", "A", "L", "C"][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                <span className="text-white font-medium">+120</span> concurseiros já
                estão usando
              </p>
            </motion.div>
          </motion.div>

          {/* Right — App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-royal)] via-[var(--cyan-vivid)] to-[var(--blue-mid)] opacity-20 blur-[80px] rounded-3xl" />

            {/* Mockup card */}
            <div className="relative glass rounded-2xl p-1 shadow-2xl shadow-cyan-500/10">
              <div className="rounded-xl bg-[var(--surface-1)] overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-[var(--text-muted)] ml-2">PROTOCOLO 45 — Dashboard</span>
                </div>

                {/* Fake dashboard content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[var(--text-muted)]">Bom dia, Paulo 👋</p>
                      <p className="text-sm font-semibold text-white">Seu plano para hoje</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-[var(--text-muted)]">Streak</p>
                      <p className="text-lg font-bold text-[var(--amber)]">🔥 12 dias</p>
                    </div>
                  </div>

                  {/* Study items */}
                  {[
                    { subject: "Direito Constitucional", type: "Revisão FSRS", time: "45 min", score: 92, color: "cyan" },
                    { subject: "Informática", type: "Teoria + Questões", time: "30 min", score: 78, color: "blue" },
                    { subject: "Português", type: "Questões CESPE", time: "25 min", score: 65, color: "amber" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                          item.color === "cyan"
                            ? "bg-cyan-500/15 text-cyan-400"
                            : item.color === "blue"
                            ? "bg-blue-500/15 text-blue-400"
                            : "bg-amber-500/15 text-amber-400"
                        }`}
                      >
                        {item.score}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.subject}</p>
                        <p className="text-xs text-[var(--text-muted)]">{item.type}</p>
                      </div>
                      <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}

                  {/* Progress bar */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="text-[var(--text-muted)]">Progresso do edital</span>
                      <span className="text-[var(--cyan-vivid)] font-medium">34%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--blue-royal)] to-[var(--cyan-vivid)]"
                        style={{ width: "34%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-2.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
