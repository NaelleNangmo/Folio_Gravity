export interface Certification {
  id: string;
  title: string;
  issuer: string;
  status: {
    fr: string;
    en: string;
  };
  isOngoing: boolean;
  category: "infrastructure" | "ai" | "data" | "cloud";
  description: {
    fr: string;
    en: string;
  };
}

export const certificationsData: Certification[] = [
  {
    id: "diplome-ingenieur-infra",
    title: "Diplôme d'Ingénieur en Infrastructure (INCP Niveau 7)",
    issuer: "INCP / Formation Spécialisée",
    status: {
      fr: "En cours de préparation",
      en: "In progress",
    },
    isOngoing: true,
    category: "infrastructure",
    description: {
      fr: "Parcours d'excellence niveau 7 axé sur la conception, la sécurisation et le pilotage d'infrastructures informatiques critiques.",
      en: "Level 7 qualification track focused on designing, securing, and operating mission-critical IT infrastructure.",
    },
  },
  {
    id: "ai-fundamentals",
    title: "AI Fundamentals & Responsible AI Practices",
    issuer: "Coursera",
    status: {
      fr: "Certification suivie",
      en: "Completed track",
    },
    isOngoing: false,
    category: "ai",
    description: {
      fr: "Principes fondamentaux de l'intelligence artificielle, éthique algorithmique, transparence et pratiques responsables.",
      en: "Foundations of artificial intelligence, algorithmic ethics, model transparency, and responsible AI practices.",
    },
  },
  {
    id: "dp-900",
    title: "DP-900:TD-A · Microsoft Azure Data Fundamentals",
    issuer: "Microsoft Learn",
    status: {
      fr: "Parcours Microsoft Learn validé",
      en: "Microsoft Learn track completed",
    },
    isOngoing: false,
    category: "data",
    description: {
      fr: "Concepts de base des données relationnelles et non relationnelles, charges de travail analytiques et services de données Azure.",
      en: "Core concepts of relational and non-relational data, analytical workloads, and Azure cloud data services.",
    },
  },
  {
    id: "power-bi",
    title: "Power BI Data Analysis & Visualization",
    issuer: "Microsoft Learn",
    status: {
      fr: "Parcours Microsoft Learn validé",
      en: "Microsoft Learn track completed",
    },
    isOngoing: false,
    category: "data",
    description: {
      fr: "Transformation de données, modélisation de schémas en étoile, création de rapports interactifs et tableaux de bord décisionnels.",
      en: "Data preparation, star schema modeling, interactive reporting, and analytical dashboard visualization.",
    },
  },
];
