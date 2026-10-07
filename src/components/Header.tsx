"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-plum-100 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="font-serif text-lg font-semibold text-plum-700 sm:text-xl">
          Nanelly Andrade <span className="font-normal text-plum-500">|</span> Nutricionista
        </a>

        {/* Desktop */}
        <nav className="hidden gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-plum-900/80 transition hover:text-plum-700">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile */}
        <button
          className="rounded-lg p-2 text-plum-700 focus-visible:outline-2 focus-visible:outline-plum-500 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-plum-100 bg-paper px-5 py-3 md:hidden" aria-label="Principal mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 font-medium text-plum-700">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
