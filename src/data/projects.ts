export interface Project {
  id: string;
  title: string;
  category: "fullstack" | "data" | "devops";
  tags: string[];
  techStack: string[];
  summary: {
    fr: string;
    en: string;
  };
  context: {
    fr: string;
    en: string;
  };
  keyFeatures: {
    fr: string[];
    en: string[];
  };
  technicalHighlights: {
    fr: string[];
    en: string[];
  };
  verificationStatus: {
    verified: boolean;
    noteFr: string;
    noteEn: string;
  };
  metrics?: {
    fr: string;
    en: string;
  };
  githubUrl?: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "suivi-academic-backend",
    title: "suivi-academic-backend",
    category: "fullstack",
    tags: ["Full Stack", "DevOps", "REST API"],
    techStack: ["Laravel", "PHP", "MySQL", "Sanctum", "Cache DB", "PHPUnit"],
    summary: {
      fr: "API REST robuste pour la gestion centralisée du suivi académique universitaire, intégrant un système de cache à invalidation automatique et une suite complète de tests.",
      en: "Robust REST API for centralized academic monitoring, featuring automated cache invalidation and a comprehensive automated test suite.",
    },
    context: {
      fr: "Conception et implémentation de l'architecture backend pour administrer l'ensemble des entités pédagogiques d'un établissement d'enseignement supérieur.",
      en: "Design and implementation of the backend architecture to administer all pedagogical entities within a higher education institution.",
    },
    keyFeatures: {
      fr: [
        "Gestion complète des entités académiques : Filières, Niveaux, UE, EC, Personnel, Salles, Enseignements, Programmations",
        "Authentification sécurisée par tokens via Laravel Sanctum",
        "Système de cache basé sur base de données avec invalidation automatique lors des mutations (TTL 3600s)",
        "Suite de 35 tests automatisés validant l'ensemble des contrôleurs et endpoints",
      ],
      en: [
        "Full management of academic entities: Programs, Levels, Teaching Units (UE), Constituent Elements (EC), Staff, Rooms, Teaching, Schedules",
        "Secure token authentication using Laravel Sanctum",
        "Database-backed caching system with automatic invalidation on mutations (3600s TTL)",
        "Suite of 35 automated tests validating all controllers and endpoints",
      ],
    },
    technicalHighlights: {
      fr: [
        "Architecture MVC Laravel avec séparation stricte des responsabilités",
        "Documentation README mentionnant une réduction théorique de 70-90% du temps de réponse grâce au cache",
        "Gestion granulaire des transactions et intégrité référentielle relationnelle",
      ],
      en: [
        "Laravel MVC architecture with strict separation of concerns",
        "README documentation notes an estimated 70-90% reduction in response time via caching",
        "Granular transaction management and relational referential integrity",
      ],
    },
    verificationStatus: {
      verified: true,
      noteFr: "Code source public vérifié sur GitHub · 35 tests automatisés",
      noteEn: "Public source code verified on GitHub · 35 automated tests",
    },
    metrics: {
      fr: "35 tests contrôleurs · Invalidation cache 3600s",
      en: "35 controller tests · 3600s cache invalidation",
    },
    githubUrl: "https://github.com/NaelleNangmo/suivi-academic-backend",
  },
  {
    id: "camwaterapp",
    title: "CamwaterApp",
    category: "data",
    tags: ["Full Stack", "Data", "Monitoring"],
    techStack: ["Laravel 11", "PHP", "MySQL", "Sanctum", "Redis", "MongoDB", "PHPUnit"],
    summary: {
      fr: "API REST de gestion des abonnés et factures d'eau (CAMWATER Cameroun) combinant persistance relationnelle, journalisation NoSQL et double niveau de cache.",
      en: "REST API for water utility subscriber and billing management (CAMWATER Cameroon) combining relational storage, NoSQL audit logging, and multi-tier caching.",
    },
    context: {
      fr: "Architecture backend d'entreprise pour le suivi des abonnements, la génération de factures et l'audit continu des opérations dans un contexte d'utilité publique.",
      en: "Enterprise backend architecture for subscriber tracking, billing workflows, and continuous operations audit within a public utility context.",
    },
    keyFeatures: {
      fr: [
        "CRUD complet et sécurisé pour la gestion des abonnés et de leur facturation",
        "Authentification et contrôle d'accès avec Laravel Sanctum",
        "Cache mémoire Redis et cache fichier (durée 30 minutes) pour soulager la base principale",
        "Journalisation déportée des événements et logs d'accès sur base MongoDB",
        "Pagination standardisée et filtrage dynamique sur les gros volumes de factures",
      ],
      en: [
        "Comprehensive and secure CRUD operations for subscriber accounts and invoicing",
        "Authentication and access control with Laravel Sanctum",
        "Redis in-memory caching and file cache (30-minute TTL) to relieve primary storage",
        "Decoupled audit and access event logging on MongoDB",
        "Standardized pagination and dynamic filtering over large invoice volumes",
      ],
    },
    technicalHighlights: {
      fr: [
        "Version 1.0.0 publiée en Mars 2026",
        "61 tests automatisés assurant la robustesse du cycle de facturation et des accès",
        "Architecture hybride SQL (MySQL) pour les transactions et NoSQL (MongoDB) pour la traçabilité",
      ],
      en: [
        "Version 1.0.0 released in March 2026",
        "61 automated tests verifying billing cycles, authentication, and endpoints",
        "Hybrid architecture: SQL (MySQL) for core transactions and NoSQL (MongoDB) for traceability",
      ],
    },
    verificationStatus: {
      verified: true,
      noteFr: "Code source public vérifié sur GitHub · v1.0.0 (Mars 2026) · 61 tests automatisés",
      noteEn: "Public source code verified on GitHub · v1.0.0 (March 2026) · 61 automated tests",
    },
    metrics: {
      fr: "61 tests automatisés · Cache 30min · Dual SQL/NoSQL",
      en: "61 automated tests · 30min cache · Dual SQL/NoSQL",
    },
    githubUrl: "https://github.com/NaelleNangmo/CamwaterApp",
  },
  {
    id: "zommaapp",
    title: "ZommaApp",
    category: "fullstack",
    tags: ["Full Stack", "Repository Public"],
    techStack: ["TypeScript", "Full Stack Stack"],
    summary: {
      fr: "Projet applicatif Full Stack hébergé sur le dépôt public de Naelle Nangmo. Projet en évolution continue.",
      en: "Full Stack application project hosted on Naelle Nangmo's public repository. Project under ongoing development.",
    },
    context: {
      fr: "Dépôt public actif explorant le développement de modules applicatifs web.",
      en: "Active public repository exploring web application component architecture.",
    },
    keyFeatures: {
      fr: [
        "Structure applicative modulaire Full Stack",
        "Développement orienté services et composants réutilisables",
        "Dépôt public vérifié sur GitHub",
      ],
      en: [
        "Modular Full Stack application structure",
        "Service-oriented architecture and reusable components",
        "Public repository verified on GitHub",
      ],
    },
    technicalHighlights: {
      fr: [
        "Présence confirmée sur le profil GitHub NaelleNangmo",
        "Description technique soumise à documentation ultérieure dans la branche principale",
      ],
      en: [
        "Verified existence on GitHub profile NaelleNangmo",
        "Technical documentation subject to future updates on the main branch",
      ],
    },
    verificationStatus: {
      verified: true,
      noteFr: "Dépôt GitHub public vérifié (Documentation détaillée en cours)",
      noteEn: "Verified public GitHub repository (Detailed documentation pending)",
    },
    githubUrl: "https://github.com/NaelleNangmo/ZommaApp",
  },
  {
    id: "dora",
    title: "DORA",
    category: "fullstack",
    tags: ["Full Stack", "Système d'Information"],
    techStack: ["TypeScript", "Node.js", "Modélisation Relationnelle"],
    summary: {
      fr: "Projet de conception de système de gestion mentionné dans le parcours académique et professionnel.",
      en: "Management system design project highlighted in academic and professional experience.",
    },
    context: {
      fr: "Initiative de développement orientée vers la structuration de données de gestion et la mise en œuvre de règles métiers cohérentes.",
      en: "Development initiative focused on structuring business data and implementing coherent domain rules.",
    },
    keyFeatures: {
      fr: [
        "Modélisation des données métiers et schémas relationnels",
        "Conception de flux logiques pour la gestion applicative",
        "Approche modulaire axée sur la maintenabilité",
      ],
      en: [
        "Business data modeling and relational schema design",
        "Logical flow design for application management",
        "Modular approach focused on maintainability",
      ],
    },
    technicalHighlights: {
      fr: [
        "Mentionné dans le portfolio d'expériences académiques/professionnelles",
        "Démarche axée sur les bonnes pratiques de génie logiciel",
      ],
      en: [
        "Referenced in academic/professional curriculum records",
        "Approach based on software engineering best practices",
      ],
    },
    verificationStatus: {
      verified: false,
      noteFr: "Mentionné dans le CV / Parcours (Description prudente basée sur les compétences clés)",
      noteEn: "Mentioned in CV / Curriculum (Cautious description based on core skills)",
    },
  },
  {
    id: "edusmart-cm",
    title: "EDUSMART-CM",
    category: "data",
    tags: ["Full Stack", "Data", "Education"],
    techStack: ["Bases de Données", "Full Stack", "Architecture Logicielle"],
    summary: {
      fr: "Projet d'écosystème numérique pour l'éducation mentionné dans le parcours, axé sur la gestion des indicateurs et processus scolaires.",
      en: "Educational digital ecosystem project highlighted in curriculum, geared toward schooling workflows and indicator tracking.",
    },
    context: {
      fr: "Réflexion et développement autour de la transformation numérique des processus scolaires et de l'administration pédagogique au Cameroun.",
      en: "Conception and development around digital transformation for schooling workflows and pedagogical administration in Cameroon.",
    },
    keyFeatures: {
      fr: [
        "Structuration des données apprenants, enseignants et évaluations",
        "Centralisation des indicateurs de progression académique",
        "Conception orientée accessibilité et robustesse",
      ],
      en: [
        "Structuring learner, teacher, and assessment records",
        "Centralizing academic progress indicators",
        "Design focused on accessibility and operational robustness",
      ],
    },
    technicalHighlights: {
      fr: [
        "Mentionné dans le parcours académique / professionnel",
        "Aligné avec les enjeux de gestion de données éducatives",
      ],
      en: [
        "Referenced in academic and professional records",
        "Aligned with educational data management and integrity goals",
      ],
    },
    verificationStatus: {
      verified: false,
      noteFr: "Mentionné dans le CV / Parcours (Description prudente basée sur les compétences académiques)",
      noteEn: "Mentioned in CV / Curriculum (Cautious description based on academic curriculum)",
    },
  },
];
