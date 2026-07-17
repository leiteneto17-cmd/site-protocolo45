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
  title: "PROTOCOLO 45 — O método matemático e blindado contra o esquecimento",
  description:
    "O único sistema inteligente de estudos que se adapta ao seu cérebro, organiza suas revisões científicas (FSRS-4.5) e recalcula a sua rota automaticamente sem acumular matéria.",
  keywords: [
    "concurso público",
    "estudos",
    "cronograma",
    "FSRS",
    "repetição espaçada",
    "aprovação",
    "método de estudo",
    "Protocolo 45",
    "Protocolo45",
  ],
  openGraph: {
    title: "PROTOCOLO 45 — Estude com ciência, aprove com consistência",
    description:
      "O método matemático e blindado contra o esquecimento. Revisões científicas FSRS e cronograma dinâmico que recalcula a rota automaticamente.",
    type: "website",
    locale: "pt_BR",
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
