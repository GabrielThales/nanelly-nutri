import { Instagram, Mail, MessageCircle } from "lucide-react";
import TrackedLink from "./TrackedLink";
import { CRN, EMAIL, INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/config";

const linkClass =
  "inline-flex items-center gap-2 text-white/90 transition hover:text-white focus-visible:outline-2 focus-visible:outline-white";

export default function Footer() {
  return (
    <footer id="contato" className="bg-plum-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-3xl font-semibold">Vamos conversar?</h2>
        <p className="mt-3 max-w-md text-white/80">
          Me chame no WhatsApp ou acompanhe dicas de alimentação no Instagram.
        </p>

        <ul className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-8">
          <li>
            <TrackedLink href={WHATSAPP_URL} event="click_whatsapp" location="footer" className={linkClass}>
              <MessageCircle size={20} aria-hidden /> WhatsApp
            </TrackedLink>
          </li>
          <li>
            {/* INSTAGRAM: edite o link em src/lib/config.ts (INSTAGRAM_URL) */}
            <TrackedLink href={INSTAGRAM_URL} event="click_instagram" location="footer" className={linkClass}>
              <Instagram size={20} aria-hidden /> Instagram
            </TrackedLink>
          </li>
          <li>
            <TrackedLink href={`mailto:${EMAIL}`} event="click_email" location="footer" className={linkClass}>
              <Mail size={20} aria-hidden /> {EMAIL}
            </TrackedLink>
          </li>
        </ul>

        <p className="mt-12 border-t border-white/15 pt-6 text-sm text-white/65">
          © {new Date().getFullYear()} Nanelly Andrade | Nutricionista
          {CRN ? ` · ${CRN}` : ""}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
