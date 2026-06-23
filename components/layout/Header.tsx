"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/formules", label: "Formules" },
  { href: "/financement", label: "Financement" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/photos/auto-ecole-du-cine-evreux-logo.jpg"
            alt="Auto École du Ciné Évreux"
            width={180}
            height={60}
            className="h-10 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        <nav role="navigation" aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-150 ${
                pathname === link.href
                  ? "text-[#E91E8C] border-b-2 border-[#E91E8C] pb-0.5"
                  : "text-[#2D2D2D] hover:text-[#E91E8C]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:0232392698"
          className="hidden md:inline-flex items-center gap-2 bg-[#E91E8C] text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-[#c91578] transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          02 32 39 26 98
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-[#2D2D2D] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#2D2D2D] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#2D2D2D] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base font-semibold py-2 ${
                pathname === link.href ? "text-[#E91E8C]" : "text-[#2D2D2D]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0232392698"
            className="mt-2 flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-bold text-base px-5 py-3 rounded-xl"
          >
            📞 02 32 39 26 98
          </a>
        </div>
      )}
    </header>
  );
}
