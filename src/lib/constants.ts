// PROTOCOLO 45 — Constantes da Landing Page
// ============================================================
// Edite os valores abaixo para configurar links, preços e textos
// sem precisar tocar nos componentes.
// ============================================================

/** URLs de checkout (Kiwify, Hotmart, Stripe, etc.)
 * ⚠️ PLACEHOLDERS — troque pelos links REAIS do checkout Kiwify (produto
 * "PROTOCOLO 45 Mensal&Anual"). Ver painel Kiwify → Link de pagamento. */
export const CHECKOUT_URLS = {
  mensal: "https://pay.kiwify.com.br/MENSAL_LINK",
  anual: "https://pay.kiwify.com.br/ANUAL_LINK",
  vitalicio: "https://pay.kiwify.com.br/VITALICIO_LINK",
};

/** URL padrão (Hero CTA aponta para o plano recomendado/mais vendido) */
export const CHECKOUT_URL = CHECKOUT_URLS.vitalicio;

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

