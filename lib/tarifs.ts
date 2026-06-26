export interface TarifItem {
  heures: string;
  prix: number;
  label?: string;
  note?: string;
}

export const tarifPermisB: TarifItem[] = [
  { heures: "13h", prix: 1050, note: "Code en salle & en ligne inclus" },
  { heures: "20h", prix: 1250 },
  { heures: "25h", prix: 1450 },
  { heures: "30h", prix: 1650 },
  { heures: "35h", prix: 1850 },
  { heures: "40h", prix: 2050 },
];

export const tarifAAC: TarifItem[] = [
  { heures: "17h", prix: 1250 },
  { heures: "22h", prix: 1450 },
  { heures: "24h", prix: 1500 },
  { heures: "29h", prix: 1650 },
];

export const tarifSpeciaux: TarifItem[] = [
  { heures: "7h", prix: 500, label: "Passerelle boîte auto → manuelle" },
  { heures: "5h", prix: 500, label: "Forfait annulation", note: "Selon les disponibilités de l'auto-école" },
];

export const inclus = [
  "Frais administratifs et pédagogiques",
  "Disque A et plaque AAC fournis",
  "Questions de vérifications intégrées",
  "Code en salle 6 mois inclus",
  "Code en ligne 6 mois inclus",
  "1 accompagnement à l'examen pratique",
  "Leçons de conduite individuelles (jamais en doublette)",
];

export const inclusPlusAAC = [
  ...inclus,
  "1 RDV préalable",
  "2 RDV pédagogiques",
];

export const optionsSupp = [
  { label: "Avec code inclus (formules 20h+)", montant: "+100€" },
  { label: "Formule accélérée", montant: "+300€" },
  { label: "Leçon à l'heure", montant: "55€/h" },
];
