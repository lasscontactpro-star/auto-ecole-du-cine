const liens = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
    badge: "Vérifications permis",
    title: "Questions de vérifications",
    desc: "Les 100 questions de vérifications posées le jour de l'examen pratique. À connaître avant de passer.",
    cta: "Consulter les questions",
    href: "https://drive.google.com/file/d/1eUgJgIVi1AoXZNlsqYZsHv7zWcA5MiQT/view",
    note: "Document officiel — 100 questions d'examen",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    badge: "Résultats & convocations",
    title: "Mon espace candidat permis",
    desc: "Consultez vos résultats d'examen (code et conduite), vos convocations et l'état de votre dossier.",
    cta: "Accéder à mon espace",
    href: "https://candidat.permisdeconduire.gouv.fr",
    note: "Portail officiel de l'État",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    badge: "Code de la route",
    title: "Code en ligne",
    desc: "Entraînez-vous au code de la route avec des séries officielles et préparez votre examen sereinement.",
    cta: "S'entraîner au code",
    href: "https://www.securite-routiere.gouv.fr/je-suis/je-suis-candidat-au-permis-de-conduire/le-code-de-la-route",
    note: "Sécurité Routière — Ministère de l'Intérieur",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    badge: "Permis de conduire",
    title: "Demande de fabrication du permis",
    desc: "Une fois votre permis obtenu, faites votre demande de fabrication du titre sur le site officiel de l'ANTS.",
    cta: "Faire ma demande",
    href: "https://permisdeconduire.ants.gouv.fr",
    note: "Service ANTS — Agence Nationale des Titres Sécurisés",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    badge: "CPF",
    title: "Mon Compte Formation",
    desc: "Vérifiez votre solde CPF et financez votre permis de conduire avec votre compte personnel de formation.",
    cta: "Consulter mon solde",
    href: "https://www.moncompteformation.gouv.fr/",
    note: "Financement possible jusqu'à 100% du permis",
  },
];

export default function LiensUtiles() {
  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-[#E91E8C] font-semibold text-sm uppercase tracking-widest mb-3">Services officiels</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2D2D]">Liens utiles pour les candidats</h2>
          <p className="text-[#555555] mt-3 max-w-xl mx-auto">
            Accédez directement aux portails officiels pour suivre votre dossier, consulter vos résultats ou financer votre permis.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {liens.map((l, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col hover:border-[#E91E8C] hover:shadow-md transition-all duration-200"
            >
              <div className="text-[#E91E8C] mb-4">{l.icon}</div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E91E8C] mb-2 block">
                {l.badge}
              </span>
              <h3 className="font-bold text-[#2D2D2D] text-base mb-2">{l.title}</h3>
              <p className="text-[#555555] text-sm leading-relaxed mb-4 flex-1">{l.desc}</p>
              <p className="text-xs text-gray-400 mb-4">{l.note}</p>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#E91E8C] text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-[#c91578] transition-colors"
              >
                {l.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
