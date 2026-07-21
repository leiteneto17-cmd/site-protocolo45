"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o algoritmo de revisão FSRS?",
    answer:
      "O FSRS-6 é o subsistema de memória do Motor P45: estima a probabilidade de recuperação e agenda cada revisão conforme o desempenho registrado. Ele não manda sozinho no seu dia. O Motor P45 limita a carga de revisões e preserva tempo para cobertura do edital e questões.",
  },
  {
    question: "E se eu perder dias de estudo?",
    answer:
      "O Protocolo 45 foi projetado exatamente para isso. Diferente de planilhas que acumulam matéria e te fazem sentir que falhou, o nosso Core Engine recalcula o cronograma automaticamente quando detecta que você não estudou. Ele redistribui as prioridades, ajusta o Score de cada matéria e cria um novo plano a partir de onde você está — sem bola de neve, sem culpa. O cronograma funciona em ciclos adaptativos, não como um calendário fixo.",
  },
  {
    question: "Preciso de algum conhecimento técnico para usar?",
    answer:
      "Absolutamente não. Toda a inteligência do sistema roda por baixo — você só vê o plano do dia, as revisões agendadas e seu progresso. A interface é limpa e intuitiva: abriu o app, viu o que estudar hoje, estudou, marcou como feito. O Protocolo 45 faz o trabalho pesado de organizar e priorizar para você.",
  },
  {
    question: "Funciona para qualquer concurso?",
    answer:
      "Sim. O Protocolo 45 funciona para qualquer concurso que tenha um edital com matérias e submatérias. O sistema analisa o edital (pode ser de qualquer banca — CESPE, FCC, FGV, VUNESP, etc.), extrai a estrutura de conteúdo, e monta o cronograma personalizado com base nos pesos, sua disponibilidade de horas e a data da prova. Funciona desde concursos de nível médio até carreiras jurídicas e fiscais.",
  },
];

export default function FaqSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative py-24 lg:py-32 section-glow">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Perguntas{" "}
            <span className="gradient-text">frequentes</span>
          </h2>
          <p className="text-[var(--text-secondary)]">
            Tudo o que você precisa saber antes de começar.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                className="rounded-xl glass overflow-hidden border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-[15px] font-semibold text-white hover:no-underline hover:text-[var(--cyan-vivid)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
