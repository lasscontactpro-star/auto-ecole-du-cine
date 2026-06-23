import type { Metadata } from "next";
import ContactRapide from "@/components/sections/ContactRapide";
import LiensUtiles from "@/components/sections/LiensUtiles";

export const metadata: Metadata = {
  title: "Financement Permis CPF, Permis 1€, Pôle Emploi",
  description:
    "Financer votre permis à Évreux : CPF, Permis 1€/jour (15-25 ans), paiement 4x sans frais, aide Pôle Emploi. Auto École du Ciné Évreux — 02 32 39 26 98.",
  openGraph: {
    title: "Financement Permis — Auto École du Ciné Évreux",
    description: "CPF, Permis 1€, Pôle Emploi, paiement 4x. Votre permis peut vous coûter 0€.",
  },
};

const etapesCPF = [
  {
    num: "01",
    title: "Vérifier votre solde",
    desc: "Rendez-vous sur mon-compte-formation.gouv.fr et connectez-vous avec France Connect.",
  },
  {
    num: "02",
    title: "Choisir la formation",
    desc: "Recherchez \"Permis B\" et sélectionnez notre auto-école référencée.",
  },
  {
    num: "03",
    title: "Valider le dossier",
    desc: "Complétez votre inscription en ligne. 11 jours de délai de rétractation obligatoire.",
  },
  {
    num: "04",
    title: "Commencer à conduire",
    desc: "Après validation, votre formation débute chez nous. Aucun paiement de votre poche.",
  },
];

const modes = [
  {
    icon: "🎓",
    badge: "CPF",
    title: "Compte Personnel de Formation",
    desc: "Tout salarié ou demandeur d'emploi dispose d'un solde CPF. Selon votre situation, il peut couvrir l'intégralité du permis.",
    eligibilite: "Salariés, demandeurs d'emploi, indépendants",
    lien: { label: "Vérifier mon solde CPF", href: "https://www.moncompteformation.gouv.fr/" },
  },
  {
    icon: "🪙",
    badge: "15–25 ans",
    title: "Permis 1€ par Jour",
    desc: "L'État prend en charge les intérêts du prêt bancaire. Vous remboursez seulement le capital, sans avance de frais.",
    eligibilite: "Jeunes de 15 à 25 ans",
    lien: { label: "En savoir plus (officiel)", href: "https://www.securite-routiere.gouv.fr/permis-de-conduire/le-permis-1-euro-par-jour" },
  },
  {
    icon: "💳",
    badge: "Flexible",
    title: "Paiement en 4 fois",
    desc: "Étalez le coût de votre permis sur 4 mensualités sans frais supplémentaires. Renseignez-vous auprès de notre équipe.",
    eligibilite: "Tous les profils, selon conditions",
    lien: null,
  },
  {
    icon: "🏢",
    badge: "Demandeurs d'emploi",
    title: "Aide Pôle Emploi / France Travail",
    desc: "Si vous êtes inscrit à France Travail, des aides spécifiques au financement du permis existent pour favoriser votre retour à l'emploi.",
    eligibilite: "Inscrits à France Travail",
    lien: null,
  },
];

export default function FinancementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#E91E8C] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white/70 font-semibold text-sm uppercase tracking-widest mb-3">Financement</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Votre permis peut être gratuit<br className="hidden md:block" /> ou très abordable
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
            Plusieurs dispositifs existent pour financer votre permis de conduire. Nous vous accompagnons dans toutes les démarches.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {["CPF", "Permis 1€/jour", "Paiement 4x", "Pôle Emploi"].map((m) => (
              <span key={m} className="bg-white/20 backdrop-blur-sm text-white font-semibold px-4 py-2 rounded-full text-sm">
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Modes de financement */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Les aides disponibles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modes.map((m, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-7 hover:border-[#E91E8C] hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{m.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#F5F5F5] text-[#555555] px-3 py-1 rounded-full">
                    {m.badge}
                  </span>
                </div>
                <h3 className="font-bold text-[#2D2D2D] text-lg mb-2">{m.title}</h3>
                <p className="text-[#555555] text-sm leading-relaxed mb-3">{m.desc}</p>
                <p className="text-xs text-gray-400 mb-4">
                  <span className="font-semibold">Éligibilité :</span> {m.eligibilite}
                </p>
                {m.lien ? (
                  <a
                    href={m.lien.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#E91E8C] font-semibold text-sm hover:underline"
                  >
                    {m.lien.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                  </a>
                ) : (
                  <a href="tel:0232392698" className="text-[#E91E8C] font-semibold text-sm hover:underline">
                    Nous appeler pour en savoir plus →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes CPF */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Mode d'emploi</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Utiliser son CPF en 4 étapes</h2>
          </div>

          <div className="space-y-4">
            {etapesCPF.map((e, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm">
                <span className="text-[#E91E8C] font-bold text-2xl md:text-3xl flex-shrink-0 w-12">{e.num}</span>
                <div>
                  <h3 className="font-bold text-[#2D2D2D] mb-1">{e.title}</h3>
                  <p className="text-[#555555] text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.moncompteformation.gouv.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#c91578] transition-colors"
            >
              Vérifier mon solde CPF
            </a>
            <a
              href="tel:0232392698"
              className="inline-flex items-center justify-center border border-[#2D2D2D] text-[#2D2D2D] font-bold px-7 py-3.5 rounded-xl hover:bg-[#2D2D2D] hover:text-white transition-colors"
            >
              Appeler pour accompagnement
            </a>
          </div>
        </div>
      </section>

      <LiensUtiles />
      <ContactRapide />
    </>
  );
}
