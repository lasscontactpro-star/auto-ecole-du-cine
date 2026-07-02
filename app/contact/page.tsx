import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contacter Auto École du Ciné Évreux — 02 32 39 26 98",
  description:
    "Contactez l'Auto École du Ciné à Évreux. 28 rue de l'Horloge, 27000 Évreux. Ouvert mar-sam. ☎ 02 32 39 26 98 ou formulaire en ligne. Réponse rapide garantie.",
  alternates: {
    canonical: "https://autoecoleducine-evreux.com/contact",
  },
  openGraph: {
    title: "Contact — Auto École du Ciné Évreux",
    description:
      "Appelez-nous ou envoyez un message. 28 rue de l'Horloge, 27000 Évreux. ☎ 02 32 39 26 98.",
    url: "https://autoecoleducine-evreux.com/contact",
    images: [
      {
        url: "/photos/auto-ecole-du-cine-evreux.jpg",
        width: 1200,
        height: 630,
        alt: "Façade Auto École du Ciné Évreux — 28 rue de l'Horloge",
      },
    ],
  },
};

export default function ContactPage() {
  const crumbs = breadcrumbSchema([
    { name: "Accueil", url: "https://autoecoleducine-evreux.com" },
    { name: "Contact", url: "https://autoecoleducine-evreux.com/contact" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Contact</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">Contactez-nous</h1>
              <p className="text-[#555555] text-lg leading-relaxed mb-6">
                Appelez-nous ou envoyez un message. Nous répondons rapidement pour répondre à toutes vos questions.
              </p>
              <a
                href="tel:0232392698"
                className="inline-flex items-center gap-3 bg-[#E91E8C] text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-[#c91578] transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                02 32 39 26 98
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
              <Image
                src="/photos/auto-ecole-du-cine-evreux.jpg"
                alt="Façade Auto École du Ciné Évreux — 28 rue de l'Horloge"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire + Horaires */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Envoyer un message</h2>
              <ContactForm />
            </div>

            {/* Infos pratiques */}
            <div className="space-y-7">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E91E8C] mb-3">Horaires bureau & code</p>
                <div className="bg-white rounded-xl p-5 space-y-2 text-sm">
                  <div className="flex justify-between text-[#2D2D2D]">
                    <span className="font-medium">Mardi – Vendredi</span>
                    <span>10h–12h / 14h–18h</span>
                  </div>
                  <div className="flex justify-between text-[#2D2D2D]">
                    <span className="font-medium">Samedi</span>
                    <span>14h–17h</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Dimanche & Lundi</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E91E8C] mb-3">Horaires conduite</p>
                <div className="bg-white rounded-xl p-5 space-y-2 text-sm">
                  <div className="flex justify-between text-[#2D2D2D]">
                    <span className="font-medium">Lundi – Vendredi</span>
                    <span>9h–19h</span>
                  </div>
                  <div className="flex justify-between text-[#2D2D2D]">
                    <span className="font-medium">Samedi</span>
                    <span>9h–17h</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E91E8C] mb-3">Accès</p>
                <div className="bg-white rounded-xl p-5 space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-[#555555]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E8C" className="flex-shrink-0 mt-0.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    <div>
                      <p className="font-semibold text-[#2D2D2D]">28 rue de l'Horloge</p>
                      <p>27000 Évreux</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-[#555555]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    </svg>
                    <span>Bus : Arrêt Cathédrale – Hôtel de ville</span>
                  </div>
                  <div className="flex items-start gap-3 text-[#555555]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E91E8C" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                      <rect x="1" y="3" width="15" height="13" rx="2"/>
                      <path d="M16 8h4l3 5v3h-7V8z"/>
                      <circle cx="5.5" cy="18.5" r="2.5"/>
                      <circle cx="18.5" cy="18.5" r="2.5"/>
                    </svg>
                    <span>Parking gratuit en face du bâtiment</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#E91E8C] mb-3">Réseaux sociaux</p>
                <div className="flex gap-3">
                  {[
                    { href: "https://www.facebook.com/autoecoleducine", label: "Facebook" },
                    { href: "https://www.instagram.com/autoecole_du_cine_evreux", label: "Instagram" },
                    { href: "https://www.tiktok.com/@autoecoleducine", label: "TikTok" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white border border-gray-200 text-[#555555] font-semibold text-sm px-4 py-2.5 rounded-xl hover:border-[#E91E8C] hover:text-[#E91E8C] transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-80 md:h-96">
        <iframe
          title="Localisation Auto École du Ciné Évreux — 28 rue de l'Horloge, 27000 Évreux"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d1.1503!3d49.0196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0df5a3b4f1a6d%3A0x0!2s28+Rue+de+l'Horloge%2C+27000+%C3%89vreux!5e0!3m2!1sfr!2sfr!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
