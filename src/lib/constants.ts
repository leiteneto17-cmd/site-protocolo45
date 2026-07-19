// PROTOCOLO 45 — Constantes da Landing Page
// ============================================================
// Edite os valores abaixo para configurar links, preços e textos
// sem precisar tocar nos componentes.
// ============================================================

/** URLs de checkout Kiwify (produto "PROTOCOLO 45"). Links REAIS.
 * Só dois planos ativos hoje: Mensal e Anual (vitalício descontinuado). */
export const CHECKOUT_URLS = {
  mensal: "https://pay.kiwify.com.br/IFS2o9Z",
  anual: "https://pay.kiwify.com.br/rysEs7d",
};

/** Página de vendas (Sales Page da Kiwify) */
export const SALES_PAGE_URL = "https://kiwify.app/v9cQ7CY";

/** URL padrão (Hero CTA aponta para o plano recomendado = Anual) */
export const CHECKOUT_URL = CHECKOUT_URLS.anual;

/** URL de login DO APP. A landing (protocolo45.com.br) e o app (Vercel) são
 * deploys separados — precisa ser absoluta, senão "Entrar" cai na própria
 * landing. Trocar aqui se o app ganhar domínio próprio (ex.: app.protocolo45.com.br). */
export const LOGIN_URL = "https://protocolo45.vercel.app/login";

/** Garantia */
export const GUARANTEE = {
  days: 7,
  text: "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100%.",
};

/** Redes sociais / links externos */
export const SOCIAL = {
  instagram: "https://instagram.com/gpsdoconcurseiro",
};

