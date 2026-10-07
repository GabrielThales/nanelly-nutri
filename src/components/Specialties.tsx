import { Scale, Dumbbell, Salad, Flower2, type LucideIcon } from "lucide-react";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Scale, title: "Emagrecimento", text: "Perda de peso gradual e sustentável, sem passar fome e sem efeito sanfona." },
  { icon: Dumbbell, title: "Hipertrofia", text: "Estratégia alimentar para ganhar massa muscular e melhorar seu desempenho nos treinos." },
  { icon: Salad, title: "Reeducação Alimentar", text: "Aprenda a se alimentar bem no dia a dia, com flexibilidade e prazer à mesa." },
  { icon: Flower2, title: "Saúde da Mulher", text: "Cuidado nutricional para TPM, ciclo hormonal, SOP, gestação e menopausa." },
];

export default function Specialties() {
  return (
    <section id="especialidades" className="bg-plum-50 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-serif text-3xl font-semibold text-plum-700 sm:text-4xl">
          Como posso te ajudar
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl bg-plum-100 p-6">
              <Icon className="text-plum-700" size={28} strokeWidth={1.5} aria-hidden />
              <h3 className="mt-4 font-serif text-xl font-semibold text-plum-700">{title}</h3>
              <p className="mt-2 leading-relaxed text-plum-900/80">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
