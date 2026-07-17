"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, Code2, Heart } from "lucide-react";

export default function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="jornada" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Quem está por trás do{" "}
            <span className="gradient-text">PROTOCOLO 45</span>?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl gradient-border overflow-hidden"
        >
          <div className="rounded-2xl bg-[var(--surface-1)] p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-center">
              {/* Avatar + badges */}
              <div className="flex flex-col items-center gap-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-br from-[var(--blue-royal)] to-[var(--cyan-vivid)] flex items-center justify-center shadow-xl shadow-cyan-500/15">
                    <span
                      className="text-4xl sm:text-5xl font-bold text-white"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      PL
                    </span>
                  </div>
                  {/* Badge aprovado */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Award className="w-3 h-3" />
                      Dupla Aprovação em 1 Ano
                    </span>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="flex gap-3 mt-4">
                  {[
                    { icon: Shield, label: "2 Aprovações" },
                    { icon: Code2, label: "Developer" },
                    { icon: Heart, label: "Concurseiro" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 text-xs text-[var(--text-muted)]"
                    >
                      <stat.icon className="w-3 h-3" />
                      {stat.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Story */}
              <div className="space-y-5 text-center lg:text-left">
                <h3
                  className="text-2xl sm:text-3xl font-bold text-white"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Paulo Leite
                </h3>

                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="text-white font-medium">
                      Fui aprovado em dois concursos concorridos em apenas um ano:
                    </span>{" "}
                    Polícia Civil (PCMS) e Socioeducativo. Já realizei o curso de formação das UNEIs e atualmente aguardo a convocação para a próxima turma do curso de formação da PCMS.
                  </p>

                  <p>
                    Mas a verdade é que, durante a minha preparação, o método do Protocolo 45 não existia. Eu precisei estudar na força bruta, sofrendo na pele com planilhas de estudo que quebravam no primeiro imprevisto, revisões mal planejadas e a constante ansiedade de achar que o progresso não era suficiente.
                  </p>

                  <p>
                    O Protocolo 45 nasceu justamente da consolidação dessas dificuldades reais. Eu decidi automatizar e criar um{" "}
                    <span className="text-[var(--cyan-vivid)] font-medium">
                      motor inteligente de estudos
                    </span>{" "}
                    que funciona como seu copiloto. Um sistema que recalcula sua rota automaticamente sem te julgar, organizando revisões com base científica (FSRS) para garantir a constância que eu penei para conquistar sozinho.
                  </p>
                </div>

                {/* Quote */}
                <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <p className="text-sm text-[var(--text-secondary)] italic">
                    &ldquo;Na minha preparação, o que realmente virou a chave foi o suporte de um mentor online que organizava meus cronogramas e tirava o peso das decisões de estudo das minhas costas. Foi ali que tive o estalo: eu precisava transformar essa mentoria em algo inteligente, automatizado e acessível para qualquer concurseiro do país.&rdquo;
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-2">
                    — Paulo Leite, Criador do Protocolo 45
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
