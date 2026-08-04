"use client";

/** Oferta de entrada: 7 dias sem cartão. O contador mostra as vagas REAIS do
 * convite — semente conferida em constants.ts, substituída pela leitura ao vivo
 * da API quando API_URL estiver preenchida. Se a API responder que o convite
 * acabou ou expirou, a seção troca o discurso em vez de mentir. */

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CreditCard, Clock, Users } from "lucide-react";
import {
  API_URL,
  TRIAL_COUNTER_THRESHOLD,
  TRIAL_ENABLED,
  TRIAL_INVITE_TOKEN,
  TRIAL_SEATS_SEED,
  TRIAL_URL,
} from "@/lib/constants";

const perks = [
  { icon: CreditCard, text: "Sem cartão de crédito" },
  { icon: Clock, text: "7 dias completos, com tudo liberado" },
  { icon: Users, text: "Vira assinatura só se você quiser" },
];

export default function TrialSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [seats, setSeats] = useState<number>(TRIAL_SEATS_SEED);
  const [soldOut, setSoldOut] = useState(false);

  useEffect(() => {
    // sem API (ou trial desligado): vale a semente conferida, sem requisição
    if (!API_URL || !TRIAL_ENABLED) return;
    const ctrl = new AbortController();
    fetch(`${API_URL}/api/invites/${TRIAL_INVITE_TOKEN}`, {
      signal: ctrl.signal,
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((body) => {
        if (!body) return;
        if (body.status !== "valid") {
          setSoldOut(true);
          return;
        }
        if (typeof body.remaining === "number") setSeats(body.remaining);
      })
      .catch(() => {
        /* rede fora: mantém a semente, nunca inventa outro número */
      });
    return () => ctrl.abort();
  }, []);

  const showCount = !soldOut && seats > 0 && seats <= TRIAL_COUNTER_THRESHOLD;

  // Convite não confirmado ainda: melhor não existir do que mandar o visitante
  // para uma tela de "convite expirado".
  if (!TRIAL_ENABLED) return null;

  return (
    <section id="trial" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--surface-0)] via-[var(--surface-1)] to-[var(--surface-0)]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cyan-vivid)] opacity-[0.04] blur-[140px]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="gradient-border rounded-3xl bg-[var(--surface-1)] p-7 text-center sm:p-12"
        >
          {showCount && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-4 py-1.5 text-xs font-bold text-[var(--amber)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--amber)]" />
              Restam {seats} vagas nesta turma
            </span>
          )}
          {soldOut && (
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[var(--text-secondary)]">
              As vagas gratuitas desta turma acabaram
            </span>
          )}

          <h2
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Teste 7 dias{" "}
            <span className="gradient-text">sem pagar nada.</span>
          </h2>

          <p className="mx-auto mb-8 max-w-xl leading-relaxed text-[var(--text-secondary)]">
            {soldOut ? (
              <>
                Esta rodada de acessos gratuitos se esgotou. Você ainda pode
                começar pelo plano mensal de R$ 9,90, com 7 dias de garantia
                incondicional — se não servir, devolvemos tudo.
              </>
            ) : (
              <>
                Crie sua conta, informe seu concurso e receba a missão de amanhã
                calculada pelo Motor P45. Se não fizer sentido para você, é só
                não assinar — não pedimos cartão para começar.
              </>
            )}
          </p>

          {!soldOut && (
            <ul className="mx-auto mb-8 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row sm:gap-6">
              {perks.map((perk) => (
                <li
                  key={perk.text}
                  className="flex items-center justify-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                  <perk.icon
                    className="h-4 w-4 shrink-0 text-cyan-300"
                    aria-hidden="true"
                  />
                  {perk.text}
                </li>
              ))}
            </ul>
          )}

          <a
            href={soldOut ? "#pricing" : TRIAL_URL}
            className="btn-cta animate-pulse-glow inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base font-bold"
          >
            {soldOut ? "Ver planos a partir de R$ 9,90" : "Começar meus 7 dias grátis"}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>

          {!soldOut && (
            <p className="mt-4 text-xs leading-relaxed text-[var(--text-muted)]">
              Ao terminar os 7 dias, assinando com o mesmo e-mail você mantém
              todo o progresso e continua de onde parou.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
