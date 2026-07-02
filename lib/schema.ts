const DOMAIN = "https://autoecoleducine-evreux.com";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "@id": `${DOMAIN}/#driving-school`,
  name: "Auto École du Ciné Évreux",
  description:
    "Auto école au centre d'Évreux (27000). Permis B, conduite accompagnée (AAC) dès 15 ans, boîte manuelle et automatique. Financement CPF, Permis 1€/jour, paiement 4x sans frais. 7 véhicules récents, leçons 100% individuelles.",
  url: `${DOMAIN}/`,
  telephone: "+33232392698",
  email: "autoecoleducine@orange.fr",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Espèces, Carte bancaire, CPF, Permis 1€/jour, Virement",
  image: `${DOMAIN}/photos/auto-ecole-du-cine-evreux.jpg`,
  logo: `${DOMAIN}/photos/logo-detoure.png`,
  hasMap: "https://maps.google.com/?q=28+Rue+de+l'Horloge,+27000+Évreux",
  address: {
    "@type": "PostalAddress",
    streetAddress: "28 rue de l'Horloge",
    addressLocality: "Évreux",
    postalCode: "27000",
    addressRegion: "Normandie",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.0196,
    longitude: 1.1503,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "14:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Évreux" },
    { "@type": "City", name: "Gravigny" },
    { "@type": "City", name: "Aviron" },
    { "@type": "City", name: "Arnières-sur-Iton" },
    { "@type": "City", name: "Angerville-la-Campagne" },
    { "@type": "City", name: "Parville" },
    { "@type": "City", name: "Gauville-la-Campagne" },
    { "@type": "City", name: "Saint-Sébastien-de-Morsent" },
  ],
  sameAs: [
    "https://www.facebook.com/autoecoleducine",
    "https://www.instagram.com/autoecole_du_cine_evreux",
    "https://www.tiktok.com/@autoecoleducine",
  ],
};

export const faqs = [
  {
    question: "Combien coûte le permis de conduire à Évreux ?",
    answer:
      "Nos formules débutent à 1 050€ pour 13h de conduite, code inclus. Nous proposons également des forfaits de 20h à 40h pour s'adapter à chaque profil. Le financement CPF peut couvrir tout ou partie de cette somme.",
  },
  {
    question: "Puis-je financer mon permis avec le CPF ?",
    answer:
      "Oui, notre auto-école est référencée pour le financement CPF. Rendez-vous sur mon-compte-formation.gouv.fr pour vérifier votre solde. Appelez-nous au 02 32 39 26 98 pour vous accompagner dans la démarche.",
  },
  {
    question: "La conduite accompagnée est-elle disponible dès 15 ans ?",
    answer:
      "Oui, nous proposons la conduite accompagnée (AAC) dès 15 ans, avec accord parental. L'apprenti est formé avec nous et conduit ensuite avec l'accompagnateur de son choix. Les formules AAC débutent à 1 250€ pour 17h de conduite.",
  },
  {
    question: "Proposez-vous des cours en boîte automatique ?",
    answer:
      "Oui, nous proposons le Permis B en boîte manuelle et automatique, sur les mêmes tarifs. Nous disposons de 3 véhicules boîte automatique. Une passerelle boîte auto → manuelle est également disponible (7h = 500€).",
  },
  {
    question: "Combien de temps dure le permis en moyenne ?",
    answer:
      "Comptez 2 semaines à 8 mois selon votre rythme d'apprentissage et la fréquence de vos leçons. La conduite accompagnée permet souvent d'obtenir le permis plus rapidement grâce aux heures accumulées avant 17 ans.",
  },
  {
    question: "Quels documents apporter pour l'inscription ?",
    answer:
      "CNI recto-verso, attestation de recensement (pour les 16-17 ans), JDC (pour les 17-25 ans), e-photos conformes (fond blanc), justificatif de domicile de moins de 3 mois, permis de conduire si vous en possédez déjà un. Pour la conduite accompagnée, une autorisation parentale est également requise.",
  },
  {
    question: "Comment accéder à l'auto-école en transports en commun ?",
    answer:
      "Arrêt de bus Cathédrale - Hôtel de ville, à quelques minutes à pied. Un parking gratuit est disponible en face du bâtiment, au 28 rue de l'Horloge, 27000 Évreux.",
  },
];

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
