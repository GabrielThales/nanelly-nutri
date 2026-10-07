import { MessageCircle } from "lucide-react";
import TrackedLink from "./TrackedLink";
import { WHATSAPP_URL } from "@/lib/config";

/** Botão fixo no canto inferior direito, sempre visível. */
export default function WhatsAppFloat() {
  return (
    <TrackedLink
      href={WHATSAPP_URL} // número editado em src/lib/config.ts (WHATSAPP_NUMBER)
      event="click_whatsapp"
      location="floating_button"
      ariaLabel="Falar com a Nanelly no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whatsapp sm:bottom-6 sm:right-6"
    >
      <MessageCircle size={28} aria-hidden />
    </TrackedLink>
  );
}
