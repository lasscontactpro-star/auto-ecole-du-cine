import Link from "next/link";

const modes = [
  {
    icon: "🎓",
    title: "CPF",
    desc: "Compte Personnel de Formation",
  },
  {
    icon: "🪙",
    title: "Permis 1€/jour",
    desc: "Pour les 15–25 ans",
  },
  {
    icon: "💳",
    title: "Paiement 4x",
    desc: "Sans frais supplémentaires",
  },
  {
    icon: "🏢",
    title: "France Travail",
    desc: "Aide pour demandeurs d'emploi",
  },
];

export default function FinancementSpot() {
  return (
    <section className="bg-[#2D2D2D] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Financement</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Votre permis peut vous coûter beaucoup moins cher
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Profitez des aides disponibles pour financer votre permis de conduire. Nous vous accompagnons dans toutes les démarches.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {modes.map((m, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#E91E8C]/50 transition-colors">
              <span className="text-3xl mb-3 block">{m.icon}</span>
              <p className="font-bold text-white text-sm">{m.title}</p>
              <p className="text-gray-400 text-xs mt-1">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/financement"
            className="inline-flex items-center justify-center bg-white text-[#E91E8C] font-bold px-7 py-3.5 rounded-xl hover:bg-gray-100 transition-colors"
          >
            En savoir plus sur le financement
          </Link>
          <a
            href="tel:0232392698"
            className="inline-flex items-center justify-center border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
          >
            Appeler maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
