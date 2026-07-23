import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://protocolo45.com.br"),

  title: {
    default: "PROTOCOLO 45 — Cronograma adaptativo para concursos",
    template: "%s | Protocolo 45",
  },

  description:
    "Avance no edital sem deixar revisões acumularem. O Protocolo 45 equilibra teoria, questões e revisões FSRS-6 e recalcula sua rota conforme seus resultados.",

  keywords: [
    "concurso público",
    "cronograma de estudos",
    "planejamento para concursos",
    "FSRS-6",
    "repetição espaçada",
    "revisão para concursos",
    "questões de concurso",
    "Protocolo 45",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "PROTOCOLO 45 — Estude com ciência, avance com consistência",
    description:
      "Um cronograma adaptativo que equilibra teoria, questões e revisões FSRS-6 conforme seu desempenho.",
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Protocolo 45",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Protocolo 45 — cronograma adaptativo para concursos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PROTOCOLO 45 — Estude com ciência, avance com consistência",
    description:
      "Teoria, questões e revisões FSRS-6 in uma rota que se adapta ao seu desempenho.",
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
