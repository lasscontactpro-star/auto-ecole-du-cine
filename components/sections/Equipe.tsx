import Image from "next/image";

const avantages = [
  "Pédagogie patiente et bienveillante",
  "Suivi personnalisé tout au long de la formation",
  "Disponible pour répondre à toutes vos questions",
  "Une auto-école de confiance à Évreux",
];

export default function Equipe() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <Image
              src="/photos/20250417_135707.jpg"
              alt="Équipe Auto École du Ciné Évreux — Ema et ses moniteurs"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">L'équipe</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
              Une équipe passionnée à votre service
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed mb-6">
              Emmanuelle Saget et toute son équipe de moniteurs vous accueillent au 28 rue de l'Horloge à Évreux. Une auto-école de confiance, pas une usine à permis.
            </p>

            <ul className="space-y-3 mb-8">
              {avantages.map((a, i) => (
                <li key={i} className="flex items-center gap-3 text-[#2D2D2D]">
                  <span className="w-5 h-5 rounded-full bg-[#E91E8C] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 10" fill="none">
                      <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm font-medium">{a}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:0232392698"
              className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#c91578] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Appeler : 02 32 39 26 98
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
