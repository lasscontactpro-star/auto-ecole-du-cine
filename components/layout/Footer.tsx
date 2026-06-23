import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Image
            src="/photos/auto-ecole-du-cine-evreux-logo.jpg"
            alt="Auto École du Ciné Évreux"
            width={160}
            height={55}
            className="h-12 w-auto object-contain brightness-0 invert mb-4"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            28 rue de l'Horloge<br />
            27000 Évreux
          </p>
          <a
            href="tel:0232392698"
            className="mt-3 inline-block text-[#E91E8C] font-bold text-lg hover:text-[#f04dab] transition-colors"
          >
            02 32 39 26 98
          </a>
          <p className="mt-4 text-xs text-gray-500">
            Agrément E 22 027 0008 0<br />
            SIRET 52323691700010
          </p>
        </div>

        <div>
          <p className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Navigation</p>
          <nav role="navigation" aria-label="Navigation pied de page" className="flex flex-col gap-3">
            {[
              { href: "/", label: "Accueil" },
              { href: "/formules", label: "Formules & Tarifs" },
              { href: "/financement", label: "Financement CPF" },
              { href: "/contact", label: "Contact & Horaires" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-[#E91E8C] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="font-bold text-white mb-4 text-sm uppercase tracking-widest">Nous suivre</p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/autoecoleducine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Auto École du Ciné"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E91E8C] transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/autoecole_du_cine_evreux"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Auto École du Ciné"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E91E8C] transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5"/>
              </svg>
            </a>
            <a
              href="https://www.tiktok.com/@autoecoleducine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Auto École du Ciné"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E91E8C] transition-colors"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z"/>
              </svg>
            </a>
          </div>
          <div className="mt-6 text-xs text-gray-500 space-y-1">
            <p>Lundi–Vendredi : 9h–19h (conduite)</p>
            <p>Mardi–Vendredi : 10h–12h / 14h–18h (bureau)</p>
            <p>Samedi : 9h–17h (conduite) / 14h–17h (bureau)</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2025 Auto École du Ciné Évreux — SIRET 52323691700010 — Tous droits réservés
      </div>
    </footer>
  );
}
