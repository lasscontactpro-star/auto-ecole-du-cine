import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ChiffresKeys from "@/components/sections/ChiffresKeys";
import PourquoiNous from "@/components/sections/PourquoiNous";
import FormulesCTA from "@/components/sections/FormulesCTA";
import FinancementSpot from "@/components/sections/FinancementSpot";
import AvisGoogle from "@/components/sections/AvisGoogle";
import Equipe from "@/components/sections/Equipe";
import Galerie from "@/components/sections/Galerie";
import FAQ from "@/components/sections/FAQ";
import ZonesDesservies from "@/components/sections/ZonesDesservies";
import LiensUtiles from "@/components/sections/LiensUtiles";
import ContactRapide from "@/components/sections/ContactRapide";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Auto École du Ciné Évreux | Permis B, AAC, CPF — 02 32 39 26 98",
  description:
    "Auto école au centre d'Évreux (27000). Permis B dès 1 050€, conduite accompagnée dès 15 ans, financement CPF et Permis 1€/jour. 7 véhicules récents. ☎ 02 32 39 26 98.",
  alternates: {
    canonical: "https://autoecoleducine-evreux.com",
  },
  openGraph: {
    title: "Auto École du Ciné Évreux | Permis B, AAC, CPF",
    description:
      "Auto école au centre d'Évreux. Permis B dès 1 050€, conduite accompagnée dès 15 ans, financement CPF et Permis 1€/jour.",
    url: "https://autoecoleducine-evreux.com/",
    images: [
      {
        url: "/photos/20250417_135707.jpg",
        width: 1200,
        height: 630,
        alt: "Auto École du Ciné Évreux — Véhicules et équipe",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <ChiffresKeys />
      <PourquoiNous />
      <FormulesCTA />
      <FinancementSpot />
      <AvisGoogle />
      <Equipe />
      <Galerie />
      <FAQ />
      <LiensUtiles />
      <ZonesDesservies />
      <ContactRapide />
    </>
  );
}
