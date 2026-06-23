import Image from "next/image";

const communes = [
  "Évreux (centre-ville)",
  "Gravigny",
  "Aviron",
  "Arnières-sur-Iton",
  "Angerville-la-Campagne",
];

export default function ZonesDesservies() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Zone d'intervention</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Nous intervenons à Évreux et alentours
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              Notre auto-école est basée au 28 rue de l'Horloge à Évreux. Les leçons de conduite démarrent depuis l'auto-école et se pratiquent sur les routes d'Évreux et des communes environnantes — ce qui en fait une formation idéale si vous habitez dans l'agglomération.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {communes.map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[#2D2D2D]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#E91E8C"/>
                  </svg>
                  <span className="text-sm font-medium">{c}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] rounded-xl p-5 space-y-2">
              <div className="flex items-start gap-2 text-sm text-[#555555]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                  <path d="M17 17H3v-2l2-2V9a6 6 0 0112 0v4l2 2v2zm-5 4a2 2 0 01-2-2h4a2 2 0 01-2 2z" fill="#E91E8C"/>
                </svg>
                <span><strong className="text-[#2D2D2D]">En bus :</strong> Arrêt Cathédrale – Hôtel de ville</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555555]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                  <rect x="1" y="3" width="15" height="13" rx="2" fill="none" stroke="#E91E8C" strokeWidth="2"/>
                  <path d="M16 8h4l3 5v3h-7V8z" fill="none" stroke="#E91E8C" strokeWidth="2"/>
                  <circle cx="5.5" cy="18.5" r="2.5" fill="#E91E8C"/>
                  <circle cx="18.5" cy="18.5" r="2.5" fill="#E91E8C"/>
                </svg>
                <span><strong className="text-[#2D2D2D]">Parking :</strong> Gratuit en face du bâtiment</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[#555555]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#E91E8C" className="mt-0.5 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                <span><strong className="text-[#2D2D2D]">Adresse :</strong> 28 rue de l'Horloge, 27000 Évreux</span>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=28+rue+de+l+Horloge+27000+Evreux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-[#E91E8C] font-semibold text-sm hover:underline"
            >
              Ouvrir dans Google Maps
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-md h-72 lg:h-full min-h-[320px]">
            <iframe
              title="Localisation Auto École du Ciné Évreux"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.5!2d1.1503!3d49.0196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e0df5a3b4f1a6d%3A0x0!2s28+Rue+de+l'Horloge%2C+27000+%C3%89vreux!5e0!3m2!1sfr!2sfr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
