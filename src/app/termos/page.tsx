import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Protocolo 45.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-cyan-300">
        ← Voltar ao Protocolo 45
      </Link>
      <h1 className="mb-6 mt-10 text-4xl font-bold">Termos de Uso</h1>
      <div className="space-y-5 leading-relaxed text-[var(--text-secondary)]">
        <p>
          O Protocolo 45 é uma ferramenta de planejamento de estudos. O uso do
          serviço não representa promessa ou garantia de aprovação em concurso.
        </p>
        <p>
          O aluno é responsável por conferir editais, datas, requisitos e
          alterações divulgadas pelos órgãos e bancas organizadoras.
        </p>
        <p>
          Planos, recorrência, período de acesso, cancelamento e garantia são
          apresentados antes da contratação no checkout da plataforma de
          pagamento.
        </p>
        <p>
          Para questões sobre acesso, cobrança ou uso do produto, utilize os
          canais informados na confirmação da compra.
        </p>
      </div>
    </main>
  );
}
