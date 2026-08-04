// PROTOCOLO 45 — Constantes da Landing Page
// ============================================================
// Edite os valores abaixo para configurar links, preços e textos
// sem precisar tocar nos componentes.
// ============================================================

/** URLs de checkout Kiwify (produto "PROTOCOLO 45"). Links REAIS.
 * Três planos: Mensal, Trimestral e Anual (vitalício descontinuado). */
export const CHECKOUT_URLS = {
  mensal: "https://pay.kiwify.com.br/lbxV3PJ",
  trimestral: "https://pay.kiwify.com.br/UEKtIOs",
  anual: "https://pay.kiwify.com.br/4UnTvl2",
};

/** Página de vendas (Sales Page da Kiwify) */
export const SALES_PAGE_URL = "https://kiwify.app/v9cQ7CY";

/** URL padrão (Hero CTA aponta para o plano recomendado = Anual) */
export const CHECKOUT_URL = CHECKOUT_URLS.anual;

/** URL de login DO APP. A landing (protocolo45.com.br) e o app (Vercel) são
 * deploys separados — precisa ser absoluta, senão "Entrar" cai na própria
 * landing. Trocar aqui se o app ganhar domínio próprio (ex.: app.protocolo45.com.br). */
export const LOGIN_URL = "https://app.protocolo45.com.br/login";

/** Trial de 7 dias sem cartão. O link de campanha carrega o convite; a tela
 * `/7dias` do app valida o token, cria a conta e concede o direito temporário.
 *
 * TRAVA DE SEGURANÇA: convite tem validade (padrão 14 dias) e o link morre
 * calado — quem clica num convite vencido cai em "Convite expirado". Por isso
 * o trial só aparece na landing com `TRIAL_ENABLED = true`, e só se liga isso
 * depois de conferir o token novo em
 * https://protocolo45.up.railway.app/api/invites/SEU_TOKEN → "valid".
 * Gerar um novo no console do Railway:
 *   python -m app.admin invite --campaign meta-ads --max-uses 80 --days 60
 */
export const TRIAL_ENABLED = true;
/** Conferido `valid` em 2026-08-04. */
export const TRIAL_INVITE_TOKEN = "qhjnI-uQYHf-GDgGl0V0D8FILq30KX8RtzNky3f89C0";
export const TRIAL_URL = `https://app.protocolo45.com.br/7dias?invite=${TRIAL_INVITE_TOKEN}`;

/** Vagas restantes no convite, conferidas manualmente em 2026-08-04.
 * É o número exibido enquanto a leitura ao vivo não estiver ligada — por isso
 * precisa ser reconferido a cada campanha, senão envelhece e vira mentira. */
export const TRIAL_SEATS_SEED = 80;

/** Base da API (Railway) para ler o saldo REAL de vagas e manter o contador
 * honesto sozinho — inclusive apagando a oferta se o convite vencer.
 * Exige https://protocolo45.com.br em GPS_CORS_ORIGINS no Railway, senão o
 * navegador bloqueia a leitura e vale só a semente acima. */
export const API_URL = "https://protocolo45.up.railway.app";

/** Acima deste saldo o contador esconde o número: anunciar "497 de 500 vagas"
 * conta que ninguém entrou. Abaixo dele a escassez é real e ajuda. */
export const TRIAL_COUNTER_THRESHOLD = 120;

/** Garantia */
export const GUARANTEE = {
  days: 7,
  text: "Garantia incondicional de 7 dias. Se não gostar, devolvemos 100%.",
};

/** Redes sociais / links externos */
export const SOCIAL = {
  instagram: "https://www.instagram.com/protocolo45_app/",
};
