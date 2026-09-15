import { ScanLine } from "lucide-react";

const shots = [
  {
    src: "/screenshots/estudar-crop.png",
    w: 2580,
    h: 1010,
    alt: "Missão do dia no Protocolo 45: tópico de Língua Portuguesa, método, tempo e a explicação de por que estudar isso agora",
    title: "A missão de hoje — e por que é ela",
    text:
      "O app diz o tópico, o método e o tempo previsto, e explica o motivo daquela ser a próxima missão. Você executa no seu próprio material.",
  },
  {
    src: "/screenshots/plano-crop.png",
    w: 2640,
    h: 1560,
    alt: "Plano completo no Protocolo 45: rota até a prova, calendário adaptativo e cobertura do edital",
    title: "O plano inteiro, recalculado sozinho",
    text:
      "Rota até a prova, calendário adaptativo e cobertura do edital. Mudou sua rotina? O Motor P45 reorganiza as próximas missões — sem você montar planilha.",
  },
];

export default function ProductDemoSection() {
  return (
    <section id="produto" className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 bg-[var(--surface-0)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            <ScanLine className="h-3.5 w-3.5" />
            Telas reais do app
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Não é mockup.{" "}
            <span className="gradient-text">É o produto, no ar.</span>
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            Estas são capturas do Protocolo 45 rodando em{" "}
            <span className="text-white">app.protocolo45.com.br</span>. O que
            você vê aqui é exatamente o que recebe ao entrar.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {shots.map((shot) => (
            <figure key={shot.src} className="flex flex-col">
              <div className="relative glass rounded-2xl p-1 shadow-2xl shadow-violet-500/10">
                <div className="rounded-xl bg-[var(--surface-1)] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-[var(--text-muted)]">
                      app.protocolo45.com.br
                    </div>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={shot.w}
                    height={shot.h}
                    loading="lazy"
                    className="block w-full bg-white"
                  />
                </div>
              </div>
              <figcaption className="mt-5 px-1">
                <strong className="block text-lg font-semibold text-white">
                  {shot.title}
                </strong>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {shot.text}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-[var(--text-muted)]">
          Os dados das telas são de uma preparação real de exemplo. Tópicos,
          datas e durações mudam conforme cada edital. O material de estudo não
          está incluso — as missões apontam o que estudar na sua própria fonte.
        </p>
      </div>
    </section>
  );
}
