/** Print do app com a moldura certa para cada tela.
 *
 *  O problema que isto resolve: a landing mostrava UMA captura de tela larga
 *  (2082px) para todo mundo. No celular ela era reduzida a ~330px — seis vezes
 *  menor — e o texto do app virava borrão cinza. Aqui o visitante de celular
 *  recebe a captura de celular, dentro de uma moldura de telefone; o de
 *  desktop recebe a captura larga, na moldura de navegador. Cada um baixa só
 *  a sua: a que não aparece fica `hidden` e com carregamento adiado.
 */
type Props = {
  /** Captura em 1440×900 (arquivo em /public/screenshots). */
  desktop: string;
  /** Captura em 390×844. */
  mobile: string;
  alt: string;
  /** Primeira imagem da página: carrega sem adiar. */
  priority?: boolean;
};

const URL_APP = "app.protocolo45.com.br";

export default function AppShot({ desktop, mobile, alt, priority }: Props) {
  return (
    <>
      {/* Celular — moldura de telefone */}
      <div className="mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:hidden">
        <div className="relative rounded-[2.2rem] border border-white/15 bg-[var(--surface-1)] p-2 shadow-2xl shadow-violet-500/10">
          <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/20" />
          <div className="overflow-hidden rounded-[1.7rem] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mobile}
              alt={alt}
              width={390}
              height={844}
              loading={priority ? "eager" : "lazy"}
              className="block w-full"
            />
          </div>
        </div>
      </div>

      {/* Desktop — moldura de navegador com a URL real */}
      <div className="hidden lg:block">
        <div className="relative glass rounded-2xl p-1 shadow-2xl shadow-violet-500/10">
          <div className="overflow-hidden rounded-xl bg-[var(--surface-1)]">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
              </div>
              <div className="ml-2 flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center text-[11px] text-[var(--text-muted)]">
                {URL_APP}
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={desktop}
              alt={alt}
              width={1440}
              height={900}
              loading="lazy"
              className="block w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
