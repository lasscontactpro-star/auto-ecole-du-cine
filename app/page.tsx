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

export const metadata: Metadata = {
  title: "Auto École du Ciné Évreux | Permis B, AAC, CPF — 02 32 39 26 98",
  description:
    "Auto école à Évreux. Permis B, conduite accompagnée dès 15 ans, financement CPF et Permis 1€. Appelez le 02 32 39 26 98.",
  openGraph: {
    title: "Auto École du Ciné Évreux | Permis B, AAC, CPF",
    description:
      "Auto école à Évreux. Permis B, conduite accompagnée dès 15 ans, financement CPF et Permis 1€.",
    url: "https://www.auto-ecole-cine-evreux.fr/",
    images: [
      {
        url: "/photos/20250417_135707.jpg",
        width: 1200,
        height: 630,
        alt: "Auto École du Ciné Évreux — Équipe et véhicules",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
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
