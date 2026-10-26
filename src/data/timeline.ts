export interface TimelineEvent {
  id: string;
  year: string;
  period: {
    fr: string;
    en: string;
  };
  type: "education" | "experience";
  title: {
    fr: string;
    en: string;
  };
  institution: string;
  location: string;
  description: {
    fr: string;
    en: string;
  };
  achievements: {
    fr: string[];
    en: string[];
  };
  tags: string[];
}

export const timelineData: TimelineEvent[] = [
  {
    id: "m1-data",
    year: "2026",
    period: {
      fr: "Depuis Septembre 2026",
      en: "Since September 2026",
    },
    type: "education",
    title: {
      fr: "Master 1 Ingénierie des Données",
      en: "Master 1 Data Engineering",
    },
    institution: "Groupe 3iL",
    location: "France / International",
    description: {
      fr: "Formation approfondie en ingénierie de données massives, pipelines de traitement de données (ETL/ELT), architectures distribuées et gouvernance des données.",
      en: "Advanced education in big data engineering, ETL/ELT processing pipelines, distributed architectures, and data governance.",
    },
    achievements: {
      fr: [
        "Étude et mise en œuvre des architectures de pipelines de données modernes",
        "Manipulation de flux de données avec Python et requêtes analytiques SQL",
        "Approfondissement des principes de modélisation orientée analyse et data warehousing",
      ],
      en: [
        "Study and implementation of modern data pipeline architectures",
        "Data stream manipulation using Python and advanced SQL analytical queries",
        "In-depth analysis of analytical data modeling and data warehousing principles",
      ],
    },
    tags: ["Data Engineering", "ETL/ELT", "Python", "SQL", "Big Data"],
  },
  {
    id: "hes-digital",
    year: "2025 - 2026",
    period: {
      fr: "2025 – 2026",
      en: "2025 – 2026",
    },
    type: "experience",
    title: {
      fr: "Développeuse Full Stack",
      en: "Full Stack Developer",
    },
    institution: "Hes Digital Services",
    location: "En entreprise",
    description: {
      fr: "Conception et déploiement de solutions logicielles complètes, modélisation de bases de données relationnelles et intégration d'APIs REST sécurisées.",
      en: "Design and deployment of complete software solutions, relational database modeling, and integration of secure REST APIs.",
    },
    achievements: {
      fr: [
        "Développement et mise en production de 15+ endpoints REST Node.js et Laravel",
        "Modélisation et optimisation avancée de schémas de bases de données relationnelles",
        "Connexion et synchronisation des APIs avec des interfaces réactives React",
        "Optimisation de la maintenabilité du code et respect des standards d'architecture",
      ],
      en: [
        "Development and production release of 15+ REST endpoints in Node.js and Laravel",
        "Advanced modeling and optimization of relational database schemas",
        "Integration and data synchronization between backend APIs and reactive React frontends",
        "Code maintainability improvements and adherence to software architecture standards",
      ],
    },
    tags: ["Node.js", "Laravel", "React", "15+ Endpoints REST", "Schémas Relationnels"],
  },
  {
    id: "bachelor-fullstack",
    year: "2025 - 2026",
    period: {
      fr: "2025 – 2026",
      en: "2025 – 2026",
    },
    type: "education",
    title: {
      fr: "Bachelor en Développement Full Stack",
      en: "Bachelor in Full Stack Development",
    },
    institution: "IUC / 3iL",
    location: "Cameroun / France",
    description: {
      fr: "Spécialisation avancée dans le cycle de vie logiciel moderne, le développement web full stack, les architectures microservices et les bonnes pratiques DevOps.",
      en: "Advanced specialization in modern software lifecycles, full stack web development, microservice architectures, and DevOps practices.",
    },
    achievements: {
      fr: [
        "Maîtrise approfondie des écosystèmes TypeScript (NestJS, Angular, React)",
        "Conception de backends robustes en Laravel et Node.js",
        "Pratiques de tests automatisés (PHPUnit) et conteneurisation Docker",
      ],
      en: [
        "Deep mastery of TypeScript ecosystems (NestJS, Angular, React)",
        "Engineering robust backends in Laravel and Node.js",
        "Automated testing practices (PHPUnit) and Docker containerization",
      ],
    },
    tags: ["NestJS", "Angular", "TypeScript", "Laravel", "Docker"],
  },
  {
    id: "dec-software",
    year: "2023 - 2025",
    period: {
      fr: "2023 – 2025",
      en: "2023 – 2025",
    },
    type: "education",
    title: {
      fr: "DEC en Informatique, Génie Logiciel",
      en: "Diploma of College Studies in Computer Science, Software Engineering",
    },
    institution: "IUC / CCNB (Collège Communautaire du Nouveau-Brunswick)",
    location: "Cameroun / Partenariat Canada",
    description: {
      fr: "Socle fondamental en génie logiciel, algorithmique, structures de données, programmation orientée objet et conception de systèmes d'information.",
      en: "Core software engineering foundation: algorithmic problem solving, data structures, object-oriented programming, and information system design.",
    },
    achievements: {
      fr: [
        "Bases solides en programmation C#, PHP, JavaScript et modélisation SQL",
        "Développement de projets académiques rigoureux avec méthodologies de test",
        "Double accréditation institutionnelle IUC / CCNB",
      ],
      en: [
        "Solid foundations in C#, PHP, JavaScript programming, and SQL schema modeling",
        "Development of rigorous academic projects with structured testing approaches",
        "Dual institutional accreditation IUC / CCNB",
      ],
    },
    tags: ["Génie Logiciel", "C#", "Algorithmique", "SQL", "CCNB"],
  },
  {
    id: "bac-scientifique",
    year: "2023",
    period: {
      fr: "2023",
      en: "2023",
    },
    type: "education",
    title: {
      fr: "Baccalauréat Scientifique",
      en: "Scientific Baccalaureate",
    },
    institution: "Enseignement Secondaire",
    location: "Cameroun",
    description: {
      fr: "Formation scientifique générale axée sur les mathématiques, les sciences physiques et la logique analytique.",
      en: "General scientific education focusing on mathematics, physics, and analytical logic.",
    },
    achievements: {
      fr: [
        "Obtention du diplôme scientifique avec bases solides en raisonnement analytique",
        "Orientation vers les sciences de l'informatique et l'ingénierie",
      ],
      en: [
        "Graduation with a strong foundation in analytical reasoning and mathematics",
        "Clear orientation toward computer science and software engineering",
      ],
    },
    tags: ["Sciences", "Mathématiques", "Logique"],
  },
];
