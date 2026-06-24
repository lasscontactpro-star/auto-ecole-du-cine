const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Une équipe à l'écoute",
    text: "Emma Saget et ses moniteurs vous accompagnent à chaque étape, avec patience et bienveillance.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="3" width="15" height="13" rx="2" />
        <path d="M16 8h4l3 5v3h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "7 véhicules récents",
    text: "4 boîtes manuelles + 3 boîtes automatiques. Vous conduisez de vrais véhicules, jamais sur simulateur.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "CPF & financements",
    text: "Votre permis possiblement à 0€ selon votre situation. CPF, Permis 1€/jour, paiement 4x sans frais.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Horaires flexibles",
    text: "Cours de conduite du lundi au samedi, de 9h à 19h. Bureau et code du mardi au samedi.",
  },
];

export default function PourquoiNous() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Notre engagement</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">
            Pourquoi choisir l'Auto École du Ciné ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group border border-gray-200 rounded-2xl p-6 hover:border-[#E91E8C] hover:shadow-lg transition-all duration-200 cursor-default"
            >
              <div className="text-[#E91E8C] mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                {card.icon}
              </div>
              <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{card.title}</h3>
              <p className="text-[#555555] text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
