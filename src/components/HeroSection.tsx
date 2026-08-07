"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import { TRIAL_ENABLED, TRIAL_URL } from "@/lib/constants";

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
                Sistema de decisão para concursos
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Você não precisa de mais material.{" "}
              <span className="gradient-text">Precisa saber o que estudar hoje.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
            >
              O <span className="text-white font-semibold">PROTOCOLO 45</span>{" "}
              transforma seu edital, seu tempo disponível e seus resultados em
              missões diárias — o tópico, o método e a duração de cada uma.
              Você executa no material que já usa. Quando sua rotina muda, o
              Motor P45 recalcula a próxima rota.
            </motion.p>

            {/* Fronteira do produto — o que é e o que não é */}
            <motion.p
              variants={itemVariants}
              className="mb-10 max-w-xl mx-auto lg:mx-0 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3 text-sm leading-relaxed text-[var(--text-secondary)]"
            >
              <span className="font-semibold text-[var(--amber)]">
                Não vendemos conteúdo. Vendemos a decisão.
              </span>{" "}
              Sem videoaulas, sem apostilas, sem banco de questões — o
              Protocolo 45 é a estratégia que organiza o material que você já
              tem (cursinho, PDFs, sua plataforma de questões).
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {TRIAL_ENABLED ? (
                <a
                  href={TRIAL_URL}
                  className="btn-cta animate-pulse-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
                >
                  Começar 7 dias grátis
                  <ArrowRight className="w-5 h-5" />
                </a>
              ) : (
                <button
                  onClick={() =>
                    document
                      .querySelector("#pricing")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn-cta animate-pulse-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold"
                >
                  Ver planos a partir de R$ 9,90
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
              <button
                onClick={() =>
                  document
                    .querySelector(TRIAL_ENABLED ? "#pricing" : "#produto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-[var(--text-secondary)] border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all"
              >
                {TRIAL_ENABLED ? "Ver planos" : "Ver o Protocolo funcionando"}
                <ChevronDown className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Faixa de confiança — risk reversal logo abaixo do CTA */}
            <motion.ul
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start"
            >
              {[
                TRIAL_ENABLED ? "7 dias grátis, sem cartão" : "Garantia incondicional de 7 dias",
                "Cancele quando quiser",
                "Você usa o material que já tem",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)]"
                >
                  <Check className="h-4 w-4 shrink-0 text-[var(--cyan-vivid)]" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — Print REAL do app (tela inicial), emoldurado como navegador */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl lg:block"
          >
            {/* Glow atrás do print */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue-royal)] via-[var(--cyan-vivid)] to-[var(--blue-mid)] opacity-20 blur-[80px] rounded-3xl" />

            {/* Moldura de navegador */}
            <div className="relative glass rounded-2xl p-1 shadow-2xl shadow-cyan-500/10">
              <div className="rounded-xl bg-[var(--surface-1)] overflow-hidden">
                {/* Barra do navegador com a URL real */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-[var(--text-muted)]">
                    app.protocolo45.com.br
                  </div>
                </div>

                {/* Screenshot real — arquivo em /public/screenshots/home.png */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screenshots/home.png"
                  alt="Tela inicial do Protocolo 45: missão do dia, meta da semana e progresso do edital"
                  width={1280}
                  height={840}
                  loading="eager"
                  className="block w-full"
                />
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-[var(--text-muted)]">
              Tela real do app, hoje no ar.
            </p>
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
