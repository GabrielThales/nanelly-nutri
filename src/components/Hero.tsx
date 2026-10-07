import Image from "next/image";
import { CalendarHeart } from "lucide-react";
import TrackedLink from "./TrackedLink";
import { WHATSAPP_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20">
      {/* Texto (primeiro no mobile, à direita no desktop) */}
      <div className="order-1 lg:order-2">
        <h1 className="font-serif text-4xl font-semibold leading-tight text-plum-700 sm:text-5xl">
          Transforme sua relação com a comida de forma leve e saudável
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-plum-900/80">
          Atendimento nutricional humanizado, sem dietas radicais: um plano
          feito para a sua rotina, o seu corpo e os seus objetivos.
        </p>
        <TrackedLink
          href={WHATSAPP_URL}
          event="generate_lead"
          location="hero"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-plum-700 px-7 py-4 font-semibold text-white shadow-lg shadow-plum-700/25 transition hover:bg-plum-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-plum-500"
        >
          <CalendarHeart size={20} aria-hidden />
          Agendar minha Consulta
        </TrackedLink>
      </div>

      {/* Foto: arquivo em /public/images/foto-nanelly.jpg (original 1080x1080) */}
      <div className="order-2 lg:order-1">
        <Image
          src="/images/foto-nanelly.jpg"
          alt="Nanelly Andrade, nutricionista, sorrindo"
          width={1080}
          height={1080}
          priority
          sizes="(min-width: 1024px) 560px, 100vw"
          className="aspect-square w-full rounded-3xl object-cover shadow-xl shadow-plum-900/15"
        />
      </div>
    </section>
  );
}
