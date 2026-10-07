import { sendGAEvent } from "@next/third-parties/google";

/** Eventos usados no site (aparecem em GA4 > Relatórios > Eventos) */
export type TrackedEvent =
  | "generate_lead" // clique em "Agendar minha Consulta"
  | "click_whatsapp" // clique no botão flutuante / rodapé
  | "click_instagram"
  | "click_email";

export function trackEvent(
  name: TrackedEvent,
  params: Record<string, string> = {}
) {
  try {
    sendGAEvent("event", name, params);
  } catch {
    /* analytics nunca deve quebrar a navegação */
  }
}
