import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://protocolo45.com.br"),

  title: {
    default: "PROTOCOLO 45 — O que estudar hoje, calculado todo dia",
    template: "%s | Protocolo 45",
  },

  description:
    "O Protocolo 45 não vende conteúdo: vende a decisão. Ele diz qual tópico do edital estudar hoje, com qual método e por quanto tempo — no material que você já tem — e recalcula a rota conforme seus resultados.",

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
    title: "PROTOCOLO 45 — Não estude mais. Estude a próxima missão certa.",
    description:
      "O sistema de decisão da sua preparação: qual tópico estudar hoje, com qual método e por quanto tempo — no material que você já tem.",
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
    title: "PROTOCOLO 45 — Não estude mais. Estude a próxima missão certa.",
    description:
      "A estratégia diária da sua preparação: o que estudar, quando revisar e por quanto tempo — no material que você já tem.",
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
