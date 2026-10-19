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
// Campanha criada pelo responsável e validada na API em 19/10/2026.
// 200 cadastros, link válido até 16/02/2027; cada conta recebe 7 dias de teste.
export const TRIAL_ENABLED = true;
export const TRIAL_INVITE_TOKEN = "KpUEbVMHuB3GH8JSEmy0NtWORYdMOYNCVyQJUoZEANo";
export const TRIAL_URL = `https://app.protocolo45.com.br/7dias?invite=${TRIAL_INVITE_TOKEN}`;

/** Saldo conferido em 19/10/2026. Mantido para o componente antigo;
 * a nova landing não anuncia quantidade de vagas nem usa escassez. */
export const TRIAL_SEATS_SEED = 200;

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
