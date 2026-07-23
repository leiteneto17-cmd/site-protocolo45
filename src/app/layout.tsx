import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

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
    "aprovação em concurso",
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
        url: "/og-protocolo45.jpg",
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
    images: ["/og-protocolo45.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
