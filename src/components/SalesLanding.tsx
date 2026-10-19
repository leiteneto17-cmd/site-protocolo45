import { ArrowRight, Check, ChevronDown, Clock3, RefreshCw, ShieldCheck, Target } from "lucide-react";
import { CHECKOUT_URLS, LOGIN_URL } from "@/lib/constants";
import { TrialAccessProvider, TrialCta, TrialNote } from "@/components/TrialAccess";
import CatalogLookup from "@/components/CatalogLookup";

const benefits = [
  { icon: Target, title: "O próximo passo já está escolhido", text: "Abra a missão e veja o tópico, o método e o tempo previsto para estudar." },
  { icon: Clock3, title: "Revisões entram na sua rotina", text: "O plano combina teoria, questões e revisões conforme o desempenho registrado." },
  { icon: RefreshCw, title: "Sua rotina mudou? A rota acompanha.", text: "Ajuste seus horários e continue a preparação a partir do seu progresso real." },
];

const plans = [
  { name: "Mensal", price: "9,90", period: "/mês", note: "Para começar com a rota semanal.", features: ["Próximos 7 dias detalhados", "Missões e revisões adaptativas", "Progresso da preparação"], url: CHECKOUT_URLS.mensal, featured: false },
  { name: "Trimestral", price: "19,90", period: "/trimestre", note: "Estratégia completa por 3 meses.", features: ["Projeção completa até a prova", "Missões e revisões adaptativas", "Calendário de longo prazo"], url: CHECKOUT_URLS.trimestral, featured: false },
  { name: "Anual", price: "49,90", period: "/ano", note: "Equivale a R$ 4,16 por mês.", features: ["Projeção completa até a prova", "Missões e revisões adaptativas", "12 meses para seguir sua rota"], url: CHECKOUT_URLS.anual, featured: true },
];

const faqs = [
  { question: "Como funcionam os 7 dias grátis?", answer: "Você cria sua conta pelo convite e usa o app por 7 dias, sem informar cartão. O teste não vira uma cobrança automática. Para continuar, escolha um plano e assine com o mesmo e-mail para manter o progresso." },
  { question: "Posso usar o material que já tenho?", answer: "Sim. O foco do Protocolo 45 é organizar o que estudar, por quanto tempo e quando revisar. Você pode executar as missões com seu cursinho, livros, apostilas ou plataforma de questões." },
  { question: "E se eu perder um dia ou mudar meus horários?", answer: "A preparação usa seus registros de estudo e sua disponibilidade para reorganizar as próximas atividades. Você pode ajustar os horários no app e seguir a partir do progresso que já fez." },
  { question: "O que muda entre os planos?", answer: "Todos usam o mesmo Motor P45. O Mensal detalha uma janela móvel de 7 dias. No Trimestral e no Anual, você também vê a projeção completa até a prova. A diferença de preço corresponde ao período contratado." },
];

export default function SalesLanding() {
  return (
    <TrialAccessProvider>
      <div className="sales-page min-h-screen bg-[#f7f5f1] text-[#202637]">
        <header className="border-b border-[#e7e1d9] bg-[#fffdfa]">
          <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
            <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="Protocolo 45 — início">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon-p45.png" alt="" width={34} height={34} className="rounded-lg" />
              <span className="text-base font-bold tracking-tight sm:text-lg">Protocolo <span className="text-[#5c4185]">45</span></span>
            </a>
            <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm font-medium text-[#5d6576] md:flex">
              <a href="#catalogo">Concursos</a><a href="#produto">Como funciona</a><a href="#pricing">Planos</a><a href="#faq">Dúvidas</a>
            </nav>
            <div className="flex items-center gap-4">
              <a href={LOGIN_URL} className="hidden text-sm font-semibold text-[#5c4185] sm:block">Entrar</a>
              <TrialCta compact className="!min-h-10 !px-4 !py-2" />
            </div>
          </div>
        </header>

        <main>
          <section className="border-b border-[#e7e1d9] bg-[radial-gradient(ellipse_at_top_right,#eae2f2_0%,#f7f5f1_65%)]">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 pb-10 pt-9 sm:px-8 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:py-20">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#5c4185]">Seu plano de estudos para concursos</p>
                <h1 className="max-w-xl text-[2.5rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">Saiba exatamente <span className="text-[#5c4185]">o que estudar hoje.</span></h1>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5d6576] sm:text-lg">Seu edital e seu tempo viram missões diárias com <strong className="font-semibold text-[#202637]">tópico, método e duração.</strong> O Protocolo 45 ajusta a rota conforme seus resultados.</p>
                <TrialCta className="mt-6 w-full sm:w-auto sm:!px-7 sm:!py-4 sm:!text-base" />
                <TrialNote className="mt-3 max-w-sm text-xs leading-relaxed text-[#5d6576]" />
                <a href="#pricing" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#5c4185]">Depois do teste, planos a partir de R$ 9,90/mês <ArrowRight size={14} aria-hidden="true" /></a>
                <a href={LOGIN_URL} className="mt-4 block text-xs font-medium text-[#5d6576] sm:hidden">Já tem conta? Entrar</a>
              </div>
              <figure className="min-w-0">
                <div className="overflow-hidden rounded-2xl border border-[#e0d6e9] bg-[#fffdfa] p-2 shadow-[0_16px_50px_-25px_#5c418540] sm:p-3">
                  <div className="mb-2 flex items-center justify-between px-2 py-2 text-xs"><span className="font-semibold text-[#5c4185]">Sua próxima missão</span><span className="text-[#647083]">Protocolo 45</span></div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="overflow-hidden rounded-lg border border-[#e7e1d9] bg-white"><img src="/screenshots/estudar-crop.png" alt="Exemplo de missão no app: tópico de estudo, método, duração e ação para abrir a aula" width={1290} height={505} fetchPriority="high" className="block h-auto w-[145%] max-w-none sm:w-full" /></div>
                  <div className="mt-3 grid grid-cols-3 divide-x divide-[#e7e1d9] pb-2 text-center text-[11px] font-medium text-[#5d6576] sm:text-xs"><span>Veja a missão</span><span>Estude no seu material</span><span>Registre e avance</span></div>
                </div>
                <figcaption className="mt-3 text-center text-[11px] text-[#647083]">Tela real de uma preparação de exemplo. Tópicos e tempos variam por edital.</figcaption>
              </figure>
            </div>
          </section>

          <CatalogLookup />

          <section id="produto" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-10 sm:px-8 sm:py-14">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="max-w-md text-2xl font-bold tracking-tight sm:text-3xl">Menos tempo organizando.<br />Mais clareza para estudar.</h2>
              <p className="max-w-sm text-sm leading-relaxed text-[#5d6576]">Escolha seu concurso, informe seus horários e siga a próxima missão.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {benefits.map(({ icon: Icon, title, text }) => <article key={title} className="sales-card rounded-2xl p-5">
                <Icon size={21} className="mb-3 text-[#5c4185]" aria-hidden="true" />
                <h3 className="text-sm font-bold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5d6576]">{text}</p>
              </article>)}
            </div>
          </section>

          <section id="pricing" className="scroll-mt-6 border-y border-[#e7e1d9] bg-[#eee9f2] px-5 py-10 sm:px-8 sm:py-14">
            <div className="mx-auto max-w-6xl">
              <div className="mb-7 text-center"><p className="text-xs font-bold uppercase tracking-[0.12em] text-[#5c4185]">Continue se fizer sentido para você</p><h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Um plano claro. Um preço acessível.</h2></div>
              <div className="grid items-stretch gap-3 md:grid-cols-3">
                {plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-2xl border bg-[#fffdfa] p-5 sm:p-6 ${plan.featured ? "border-[#5c4185] ring-1 ring-[#5c4185]" : "border-[#e0d8e7]"}`}>
                  <div className="flex items-center justify-between gap-2"><h3 className="text-base font-bold">{plan.name}</h3>{plan.featured && <span className="rounded-full bg-[#f0ebf5] px-2.5 py-1 text-[10px] font-bold text-[#5c4185]">Menor custo por mês</span>}</div>
                  <p className="mt-3 text-4xl font-bold tracking-tight"><span className="mr-1 text-sm font-medium text-[#647083]">R$</span>{plan.price}<span className="ml-1 text-xs font-normal tracking-normal text-[#647083]">{plan.period}</span></p>
                  <p className="mb-4 mt-2 text-xs text-[#647083]">{plan.note}</p>
                  <ul className="mb-5 space-y-2 text-sm text-[#5d6576]">{plan.features.map((feature) => <li key={feature} className="flex items-center gap-2"><Check size={15} className="shrink-0 text-[#5c4185]" aria-hidden="true" />{feature}</li>)}</ul>
                  <a href={plan.url} className={`mt-auto flex min-h-11 items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold ${plan.featured ? "sales-cta" : "border border-[#d6c9e2] text-[#5c4185] hover:bg-[#f0ebf5]"}`}>Assinar {plan.name.toLowerCase()} <ArrowRight size={15} className="ml-2" aria-hidden="true" /></a>
                </article>)}
              </div>
              <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-[#5d6576]"><ShieldCheck size={17} className="shrink-0 text-[#5c4185]" aria-hidden="true" />Pagamento pela Kiwify · 7 dias de garantia após a compra</p>
            </div>
          </section>

          <section id="faq" className="mx-auto max-w-3xl scroll-mt-6 px-5 py-10 sm:px-8 sm:py-14">
            <h2 className="mb-5 text-2xl font-bold tracking-tight">Antes de começar</h2>
            <div className="divide-y divide-[#e7e1d9]">{faqs.map((faq) => <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold [&::-webkit-details-marker]:hidden">{faq.question}<ChevronDown size={17} className="shrink-0 text-[#5c4185] transition-transform group-open:rotate-180" aria-hidden="true" /></summary>
              <p className="mt-3 text-sm leading-relaxed text-[#5d6576]">{faq.answer}</p>
            </details>)}</div>
            <div className="mt-7 rounded-2xl border border-[#e0d6e9] bg-[#f0ebf5] p-5 text-center sm:p-7">
              <h2 className="text-xl font-bold">Sua próxima sessão pode começar com uma decisão pronta.</h2>
              <TrialCta className="mt-5 w-full sm:w-auto" />
              <TrialNote className="mt-3 text-xs leading-relaxed text-[#5d6576]" />
            </div>
          </section>
        </main>

        <footer className="border-t border-[#e7e1d9] bg-[#fffdfa] px-5 py-6 sm:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-[#647083] sm:flex-row"><span>© {new Date().getFullYear()} Protocolo 45 · Paulo Leite</span><nav aria-label="Informações legais" className="flex flex-wrap justify-center gap-5"><a href={LOGIN_URL}>Entrar no app</a><a href="/termos">Termos de uso</a><a href="/privacidade">Privacidade</a></nav></div>
        </footer>
      </div>
    </TrialAccessProvider>
  );
}
