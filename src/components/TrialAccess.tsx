"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { API_URL, TRIAL_ENABLED, TRIAL_INVITE_TOKEN, TRIAL_URL } from "@/lib/constants";

const TrialContext = createContext(TRIAL_ENABLED);

export function TrialAccessProvider({ children }: { children: React.ReactNode }) {
  const [available, setAvailable] = useState(TRIAL_ENABLED);
  useEffect(() => {
    if (!TRIAL_ENABLED) return;
    const controller = new AbortController();
    fetch(`${API_URL}/api/invites/${TRIAL_INVITE_TOKEN}`, { signal: controller.signal, cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then((body) => {
        if (body && typeof body.status === "string") setAvailable(body.status === "valid");
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  return <TrialContext.Provider value={available}>{children}</TrialContext.Provider>;
}

export function TrialCta({ compact = false, className = "" }: { compact?: boolean; className?: string }) {
  const available = useContext(TrialContext);
  return (
    <a href={available ? TRIAL_URL : "#pricing"} className={`sales-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold ${className}`}>
      {available ? compact ? "Testar grátis" : "Começar meus 7 dias grátis" : compact ? "Ver planos" : "Ver planos a partir de R$ 9,90"}
      {!compact && <ArrowRight size={18} aria-hidden="true" />}
    </a>
  );
}

export function TrialNote({ className = "" }: { className?: string }) {
  const available = useContext(TrialContext);
  return <p className={className}>{available ? "Sem cartão. Ao fim dos 7 dias, você decide se quer assinar." : "Planos a partir de R$ 9,90/mês, com 7 dias de garantia."}</p>;
}
