import Link from "next/link";

const formules = [
  {
    badge: "Le plus populaire",
    title: "Permis B",
    desc: "Boîte manuelle ou automatique",
    price: "À partir de 1 050€",
    sub: "13h de conduite · Code inclus",
    href: "/formules",
    cta: "Voir le détail",
    highlight: true,
  },
  {
    badge: "Dès 15 ans",
    title: "Conduite Accompagnée",
    desc: "AAC — Apprentissage anticipé",
    price: "À partir de 1 250€",
    sub: "17h de conduite incluses",
    href: "/formules",
    cta: "En savoir plus",
    highlight: false,
  },
  {
    badge: "15–25 ans",
    title: "Permis 1€ / Jour",
    desc: "Sans avance de frais",
    price: "0€ d'avance",
    sub: "État couvre les intérêts",
    href: "/financement",
    cta: "Vérifier mon éligibilité",
    highlight: false,
  },
];

export default function FormulesCTA() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Tarifs transparents</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Nos formules de conduite</h2>
          <p className="text-[#555555] mt-4 max-w-xl mx-auto">Chaque formule inclut les frais administratifs, le disque A, le code 6 mois et l'accompagnement à l'examen.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {formules.map((f, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl p-7 flex flex-col shadow-sm border transition-all duration-200 hover:shadow-md ${
                f.highlight ? "border-[#E91E8C]" : "border-gray-200 hover:border-[#E91E8C]"
              }`}
            >
              <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4 ${
                f.highlight ? "bg-[#E91E8C] text-white" : "bg-[#F5F5F5] text-[#555555]"
              }`}>
                {f.badge}
              </span>
              <h3 className="text-xl font-bold text-[#2D2D2D] mb-1">{f.title}</h3>
              <p className="text-sm text-[#555555] mb-4">{f.desc}</p>
              <p className="text-3xl font-bold text-[#E91E8C] mb-1">{f.price}</p>
              <p className="text-xs text-gray-400 mb-6">{f.sub}</p>
              <div className="mt-auto">
                <Link
                  href={f.href}
                  className="block text-center bg-[#E91E8C] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#c91578] transition-colors"
                >
                  {f.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#555555] mt-8">
          Leçon à l'heure : <strong>55€/h</strong> · Formule accélérée disponible ·{" "}
          <a href="tel:0232392698" className="text-[#E91E8C] font-semibold hover:underline">
            Appelez pour un devis personnalisé
          </a>
        </p>
      </div>
    </section>
  );
}
