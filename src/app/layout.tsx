import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://protocolo45.com.br"),

  title: {
    default: "Protocolo 45 — Saiba o que estudar hoje | 7 dias grátis",
    template: "%s | Protocolo 45",
  },

  description:
    "Seu plano de estudos para concursos com missões diárias, revisões e ajustes à sua rotina. Saiba o tópico, o método e o tempo de cada estudo. Teste 7 dias grátis, sem cartão.",

  keywords: [
    "concurso público",
    "planejamento para concursos",
    "organizar estudos para concurso",
    "o que estudar hoje concurso",
    "FSRS-6",
    "repetição espaçada",
    "revisão para concursos",
    "Protocolo 45",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Protocolo 45 — Saiba exatamente o que estudar hoje",
    description:
      "Missões diárias, revisões e uma rota que acompanha sua rotina. Teste 7 dias grátis, sem cartão.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Protocolo 45",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Protocolo 45 — sistema de decisão para concursos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Protocolo 45 — Saiba exatamente o que estudar hoje",
    description:
      "Seu edital e seu tempo viram missões claras. Teste 7 dias grátis, sem cartão.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
