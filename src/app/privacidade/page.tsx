import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Protocolo 45.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-4 py-16 sm:px-6">
      <Link href="/" className="text-sm font-semibold text-cyan-300">
        ← Voltar ao Protocolo 45
      </Link>
      <h1 className="mb-6 mt-10 text-4xl font-bold">Política de Privacidade</h1>
      <div className="space-y-5 leading-relaxed text-[var(--text-secondary)]">
        <p>
          O Protocolo 45 utiliza os dados necessários para autenticação,
          funcionamento do plano de estudos, suporte e cumprimento das
          obrigações relacionadas à contratação.
        </p>
        <p>
          Dados de pagamento são processados pela plataforma de checkout e não
          são armazenados diretamente nesta landing page.
        </p>
        <p>
          Informações de estudo podem ser usadas para calcular missões,
          revisões e progresso dentro da conta do aluno.
        </p>
        <p>
          Solicitações relacionadas aos dados pessoais podem ser encaminhadas
          pelos canais de suporte informados no acesso ao produto.
        </p>
      </div>
    </main>
  );
}
