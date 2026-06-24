import type { Metadata } from "next";
import Image from "next/image";
import {
  tarifPermisB,
  tarifAAC,
  tarifSpeciaux,
  inclus,
  inclusPlusAAC,
  optionsSupp,
} from "@/lib/tarifs";

export const metadata: Metadata = {
  title: "Formules & Tarifs Permis de Conduire Évreux",
  description:
    "Tous nos tarifs : Permis B dès 1 050€, conduite accompagnée (AAC) dès 1 250€, boîte manuelle et automatique. Financement CPF disponible. Auto École du Ciné Évreux.",
  openGraph: {
    title: "Formules & Tarifs Permis de Conduire — Auto École du Ciné Évreux",
    description: "Tarifs clairs et transparents. Permis B, AAC, boîte auto. CPF accepté.",
  },
};

export default function FormulesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2D2D2D] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Tarifs 2025</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos formules de conduite à Évreux
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Des tarifs clairs, sans surprise. Permis B, conduite accompagnée, boîte automatique — tout est inclus.
          </p>
          <a
            href="tel:0232392698"
            className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#c91578] transition-colors"
          >
            Appeler pour un devis personnalisé
          </a>
        </div>
      </section>

      {/* Permis B */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Permis B</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Boîte manuelle & automatique
              </h2>
              <p className="text-[#555555] mb-8 leading-relaxed">
                Même tarif boîte manuelle et automatique. Notre flotte de 7 véhicules (4 manuelles, 3 automatiques) vous permet de choisir. La leçon à l'heure est disponible à 55€.
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left px-5 py-3.5 font-semibold">Heures</th>
                      <th className="text-right px-5 py-3.5 font-semibold">Prix total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarifPermisB.map((t, i) => (
                      <tr
                        key={i}
                        className={`border-t border-gray-100 hover:bg-[#F5F5F5] transition-colors ${i === 0 ? "bg-[#FCE4F3]" : ""}`}
                      >
                        <td className="px-5 py-3.5 font-semibold text-[#2D2D2D]">{t.heures}</td>
                        <td className="px-5 py-3.5 text-right font-bold text-[#E91E8C] text-base">
                          {t.prix.toLocaleString("fr-FR")}€
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-2">
                {optionsSupp.map((o, i) => (
                  <p key={i} className="text-sm text-[#555555]">
                    <span className="font-semibold text-[#2D2D2D]">{o.label} :</span> {o.montant}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-[#F5F5F5] rounded-2xl p-7 mb-6">
                <p className="font-bold text-[#2D2D2D] mb-4 text-base">Inclus dans toutes les formules</p>
                <ul className="space-y-2.5">
                  {inclus.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#555555]">
                      <span className="w-4 h-4 rounded-full bg-[#E91E8C] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-[#E91E8C] font-semibold">Aucune leçon sur simulateur — vrais véhicules uniquement</p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left px-5 py-3.5 font-semibold" colSpan={2}>Forfaits spéciaux</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarifSpeciaux.map((t, i) => (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="px-5 py-3.5">
                          <p className="font-semibold text-[#2D2D2D]">{t.label}</p>
                          <p className="text-xs text-gray-400">{t.heures}</p>
                        </td>
                        <td className="px-5 py-3.5 text-right font-bold text-[#E91E8C]">{t.prix}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conduite Accompagnée */}
      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/photos/cartoon-equipe.webp"
                alt="Apprenez à conduire en toute confiance — Auto École du Ciné Évreux"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">AAC</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4">
                Conduite accompagnée dès 15 ans
              </h2>
              <p className="text-[#555555] leading-relaxed mb-6">
                L'apprentissage anticipé de la conduite (AAC) vous permet de commencer dès 15 ans avec l'accord de vos parents. Vous accumulez de l'expérience et obtenez souvent votre permis plus rapidement — et moins cher.
              </p>

              <div className="overflow-hidden rounded-2xl border border-gray-200 mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#2D2D2D] text-white">
                      <th className="text-left px-5 py-3.5 font-semibold">Heures</th>
                      <th className="text-right px-5 py-3.5 font-semibold">Prix total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tarifAAC.map((t, i) => (
                      <tr key={i} className={`border-t border-gray-100 hover:bg-white transition-colors ${i === 0 ? "bg-[#FCE4F3]" : "bg-white"}`}>
                        <td className="px-5 py-3.5 font-semibold text-[#2D2D2D]">{t.heures}</td>
                        <td className="px-5 py-3.5 text-right font-bold text-[#E91E8C]">{t.prix.toLocaleString("fr-FR")}€</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-white rounded-xl p-5 mb-6">
                <p className="font-bold text-[#2D2D2D] mb-3 text-sm">En plus de ce qui est inclus dans toutes les formules :</p>
                <ul className="space-y-2">
                  {inclusPlusAAC.slice(inclus.length).map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#555555]">
                      <span className="text-[#E91E8C]">+</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:0232392698"
                className="inline-flex items-center gap-2 bg-[#E91E8C] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#c91578] transition-colors"
              >
                Inscrire mon enfant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-[#2D2D2D] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à démarrer ?</h2>
          <p className="text-gray-400 mb-8">Appelez Emma pour démarrer votre formation ou poser vos questions. Réponse rapide garantie.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0232392698"
              className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#c91578] transition-colors"
            >
              02 32 39 26 98
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Nous écrire
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
