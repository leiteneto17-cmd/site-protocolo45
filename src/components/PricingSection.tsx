"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Zap,
  ShieldCheck,
  CreditCard,
  ArrowRight,
  Infinity as InfinityIcon,
  Calendar,
} from "lucide-react";
import { CHECKOUT_URLS, GUARANTEE } from "@/lib/constants";

const plans = [
  {
    name: "Plano Mensal",
    price: "6,90",
    period: "/mês",
    type: "Assinatura recorrente",
    description: "Ideal para testar a ferramenta e sentir o poder do cronograma no dia a dia.",
    badge: "Teste sem compromisso",
    icon: Calendar,
    highlight: false,
    checkoutUrl: CHECKOUT_URLS.mensal,
    details: [
      "Acesso recorrente (cancele quando quiser)",
      "Cronograma inteligente adaptativo",
      "Revisões automatizadas FSRS-4.5",
      "Painel de controle e estatísticas",
      "Suporte via e-mail",
    ],
    buttonText: "Experimentar Mensal",
  },
  {
    name: "Plano Anual",
    price: "29,90",
    period: "/ano",
    type: "Pagamento único anual",
    description: "Equivale a apenas R$ 2,49 por mês. Economia de mais de 60% comparado ao mensal.",
    badge: "Mais de 60% de desconto",
    icon: Zap,
    highlight: false,
    checkoutUrl: CHECKOUT_URLS.anual,
    details: [
      "Acesso completo por 12 meses",
      "Cronograma inteligente adaptativo",
      "Revisões automatizadas FSRS-4.5",
      "Painel de controle e estatísticas",
      "Suporte prioritário",
      "Equivale a R$ 2,49/mês",
    ],
    buttonText: "Garantir Desconto Anual",
  },
  {
    name: "Plano Vitalício",
    price: "49,90",
    period: "",
    type: "Pagamento único. Sem mensalidade.",
    description: "Acesso permanente para sempre, com todas as atualizações de algoritmos inclusas.",
    badge: "Estude até passar",
    icon: InfinityIcon,
    highlight: true,
    checkoutUrl: CHECKOUT_URLS.vitalicio,
    details: [
      "Acesso permanente e vitalício",
      "Todas as futuras atualizações inclusas",
      "Cronograma inteligente adaptativo",
      "Revisões automatizadas FSRS-4.5",
      "Suporte prioritário direto com o criador",
      "Sem qualquer mensalidade ou taxa futura",
    ],
    buttonText: "Aproveitar Plano Vitalício",
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />

      {/* Ambient glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--cyan-vivid)] opacity-[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--amber)] opacity-[0.03] blur-[180px] rounded-full pointer-events-none" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-[var(--amber)] border border-amber-500/25 mb-4">
            Oferta Especial de Lançamento
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Escolha o seu plano e{" "}
            <span className="gradient-text">destrave sua constância</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Mais barato que um café por mês para ter um assistente de estudos inteligente programando seus passos.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className={`relative flex flex-col justify-between rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? "md:-translate-y-4 md:scale-105 z-10 shadow-2xl shadow-amber-500/10 gradient-border gradient-border-amber"
                    : "glass border-white/5 hover:border-white/10"
                }`}
              >
                {/* Visual Highlight Badge */}
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold bg-[var(--amber)] text-[#0F172A] tracking-wider uppercase shadow-lg shadow-amber-500/30">
                      <Zap className="w-3.5 h-3.5 fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header Card */}
                    <div className="flex items-center justify-between mb-4">
                      <h3
                        className="text-xl font-bold text-white"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {plan.name}
                      </h3>
                      {!plan.highlight && (
                        <span className="text-[10px] uppercase font-bold text-[var(--text-muted)] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] min-h-[32px] mb-6">
                      {plan.description}
                    </p>

                    {/* Price display */}
                    <div className="mb-6 flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-semibold text-[var(--text-muted)]">R$</span>
                        <span
                          className={`text-5xl font-extrabold text-white tracking-tight ${
                            plan.highlight ? "text-[var(--amber)] font-heading" : ""
                          }`}
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-sm text-[var(--text-muted)]">{plan.period}</span>
                        )}
                      </div>
                      <span className="text-[10px] font-medium text-[var(--text-muted)] mt-1.5 uppercase tracking-wide">
                        {plan.type}
                      </span>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-white/5 mb-6" />

                    {/* Features list */}
                    <div className="space-y-3 mb-8">
                      {plan.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 mt-0.5 shrink-0 ${
                            plan.highlight ? "text-[var(--amber)]" : "text-cyan-400"
                          }`} />
                          <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={plan.checkoutUrl}
                    className={`flex items-center justify-center gap-2 w-full py-4 rounded-xl text-sm font-bold transition-all duration-300 ${
                      plan.highlight
                        ? "btn-cta animate-pulse-glow"
                        : "border border-white/10 hover:border-white/20 text-white hover:bg-white/5 bg-white/5 active:bg-white/10 hover:translate-y-[-1px]"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee and Secure badge */}
        <div className="mt-16 flex flex-col items-center gap-4 max-w-lg mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" />
              {GUARANTEE.days} dias de garantia incondicional
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
              <CreditCard className="w-4.5 h-4.5 text-[var(--cyan-vivid)]" />
              Pagamento 100% criptografado e seguro
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] text-center leading-relaxed">
            {GUARANTEE.text}
          </p>
        </div>
      </div>
    </section>
  );
}
