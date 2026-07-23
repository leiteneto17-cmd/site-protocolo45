import { ArrowRight, ShieldCheck } from "lucide-react";
import { CHECKOUT_URL, GUARANTEE } from "@/lib/constants";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="gradient-border rounded-3xl bg-[var(--surface-1)] p-7 text-center sm:p-12">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Sua próxima sessão já pode começar{" "}
            <span className="gradient-text">com uma missão clara.</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-[var(--text-secondary)]">
            Escolha seu plano, configure sua preparação e deixe o Motor P45
            organizar a próxima rota a partir da sua realidade.
          </p>
          <a
            href={CHECKOUT_URL}
            className="btn-cta inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-base"
          >
            Criar meu plano de estudos
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </a>
          <p className="mt-5 flex items-center justify-center gap-2 text-xs text-[var(--text-secondary)]">
            <ShieldCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
            {GUARANTEE.days} dias de garantia
          </p>
        </div>
      </div>
    </section>
  );
}
