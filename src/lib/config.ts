/**
 * =====================================================================
 *  ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR PARA PERSONALIZAR O SITE
 * =====================================================================
 */

// 1) GOOGLE ANALYTICS (GA4) — substitua pelo seu ID de acompanhamento real
//    (GA4 > Admin > Fluxos de dados > ID da métrica, começa com "G-")
export const GA_ID = "G-XXXXXXXXXX"; // <<< COLOQUE SEU ID AQUI

// 2) WHATSAPP — somente números, com código do país + DDD + número
//    Exemplo Brasil: 5521999998888  (55 = Brasil, 21 = DDD)
export const WHATSAPP_NUMBER = "5521967123080"; // <<< COLOQUE SEU NÚMERO AQUI
export const WHATSAPP_MESSAGE =
  "Olá, gostaria de agendar uma consulta com a nutri Nanelly!";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

// 3) INSTAGRAM — troque SEU_USUARIO pelo @ do perfil (sem o @)
export const INSTAGRAM_URL = "https://www.instagram.com/nutrinanelly"; // <<< COLOQUE SEU INSTAGRAM AQUI

// 4) E-MAIL PROFISSIONAL
export const EMAIL = "Nutricionistananellyandrade@gmail.com"; // <<< COLOQUE SEU E-MAIL AQUI

// 5) REGISTRO PROFISSIONAL (opcional, aparece no rodapé). Deixe "" para ocultar.
export const CRN = "19101603"; // ex.: "CRN-4 00000"
