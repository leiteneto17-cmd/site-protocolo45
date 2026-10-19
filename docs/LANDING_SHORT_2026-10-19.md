# Landing curta — 19/10/2026

Objetivo: explicar o produto e oferecer o teste na primeira tela, reduzindo a rolagem até os preços.

- Página clara, alinhada ao visual do app; proposta, CTA e preço inicial sem animação de entrada.
- Dez seções visíveis da versão anterior substituídas por quatro: abertura, benefícios com catálogo recolhido, planos e dúvidas com CTA final.
- Em 390 × 844 px: altura anterior de 16.050 px e nova de 3.595 px, com catálogo e dúvidas recolhidos. Redução de aproximadamente 78%.
- CTA principal termina em 441 px nessa largura, dentro da primeira tela. Também fica visível em 320 × 740, 768 × 1024 e 1440 × 900 px. Nenhuma rolagem horizontal nesses tamanhos.
- Convite criado pelo responsável: campanha `landing-2026-10`, 200 usos, expira em 16/02/2027. Consulta pública retornou `valid`, 200 restantes de 200. Cada cadastro recebe 7 dias; a validade do link é distinta do período de teste.
- Os CTAs compartilham a consulta do convite: se a API informar expiração ou esgotamento, passam a apontar para os planos. Não há contador de escassez.
- REA: captura de desktop e celular; clique no CTA até `/7dias`; formulário de cadastro carregado sem criar conta; catálogo aberto e filtrado por PRF em 320 px, com uma missão retornada. Sem erros de página nesses cenários.
- Build de produção e ESLint dos arquivos alterados aprovados. A medição de layout foi feita no navegador integrado; os fluxos de navegação e capturas também foram conferidos com o REA.

Não houve medição de conversão comercial. A primeira tela foi preparada para comunicar proposta e oferta rapidamente; ganhos de cadastro ou venda precisam ser medidos com visitantes reais.
