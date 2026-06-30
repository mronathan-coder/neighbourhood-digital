"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { href: "#services",     label: "// WHY US?" },
  { href: "#how-it-works", label: "// THE PROCESS" },
  { href: "#pricing",      label: "// PRICING & WHAT'S INCLUDED" },
  { href: "#faq",          label: "// FAQ" },
  { href: "#work",         label: "// RECENT WORK" },
  { href: "#contact",      label: "// CONTACT" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#111827]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-8">

        {/* Logo — height-constrained so it's always visually large */}
        <a href="#" className="shrink-0" aria-label="Neighbourhood Digital home">
          <Image
            src="/nd-logo-new.png"
            alt="Neighbourhood Digital"
            width={400}
            height={160}
            className="h-20 sm:h-24 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-mono text-sm tracking-wide whitespace-nowrap text-[#6b7fa0] hover:text-white transition-colors duration-200 py-1"
            >
              {link.label}
              {/* Laser-red underline on hover */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#ff1133] group-hover:w-full transition-all duration-200" />
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <a
          href="https://wa.me/27613829267"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center border border-[#00e5ff] text-[#00e5ff] font-mono font-bold text-base tracking-widest px-6 py-3 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200 shrink-0"
        >
          [ WHATSAPP US → ]
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span className={`block w-5 h-0.5 bg-[#e8f4fd] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#e8f4fd] transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#e8f4fd] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#111827] border-t border-white/5 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-[#6b7fa0] hover:text-white transition-colors py-3 border-b border-white/5 tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/27613829267"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center border border-[#00e5ff] text-[#00e5ff] font-mono font-bold text-xs tracking-widest py-3 hover:bg-[#00e5ff] hover:text-[#020c18] transition-all duration-200"
          >
            [ WHATSAPP US → ]
          </a>
        </div>
      </div>
    </nav>
  );
}
