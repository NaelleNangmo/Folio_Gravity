export type SkillStatus = "acquired" | "in-progress";

export interface SkillItem {
  name: string;
  status: SkillStatus;
  level?: string;
  category: "backend" | "frontend" | "database" | "data" | "devops" | "tools";
  descriptionFr?: string;
  descriptionEn?: string;
}

export interface SkillCategoryGroup {
  id: string;
  titleFr: string;
  titleEn: string;
  descriptionFr: string;
  descriptionEn: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategoryGroup[] = [
  {
    id: "backend",
    titleFr: "Backend & Architectures API",
    titleEn: "Backend & API Architectures",
    descriptionFr: "Conception d'APIs REST modulaires, injection de dépendances, sécurité et persistance transactionnelle.",
    descriptionEn: "Modular REST API architecture, dependency injection, security, and transactional persistence.",
    iconName: "Server",
    skills: [
      { name: "NestJS", status: "acquired", category: "backend" },
      { name: "Laravel", status: "acquired", category: "backend" },
      { name: "Node.js", status: "acquired", category: "backend" },
      { name: "PHP", status: "acquired", category: "backend" },
      { name: "TypeScript", status: "acquired", category: "backend" },
      { name: "C#", status: "acquired", category: "backend" },
      { name: "APIs REST", status: "acquired", category: "backend" },
      { name: "Laravel Sanctum", status: "acquired", category: "backend" },
    ],
  },
  {
    id: "frontend",
    titleFr: "Frontend & Interfaces Web",
    titleEn: "Frontend & Web Interfaces",
    descriptionFr: "Création d'interfaces web réactives, structurées et typées avec composants modulaires.",
    descriptionEn: "Crafting reactive, strongly typed web interfaces with reusable modular components.",
    iconName: "Layout",
    skills: [
      { name: "Angular", status: "acquired", category: "frontend" },
      { name: "React", status: "acquired", category: "frontend" },
      { name: "TypeScript", status: "acquired", category: "frontend" },
      { name: "Tailwind CSS", status: "acquired", category: "frontend" },
      { name: "HTML5 / CSS3", status: "acquired", category: "frontend" },
    ],
  },
  {
    id: "database",
    titleFr: "Bases de Données & Modélisation",
    titleEn: "Databases & Data Modeling",
    descriptionFr: "Modélisation relationnelle, schémas normalisés, requêtes complexes et stockage documentaire.",
    descriptionEn: "Relational schema modeling, normalized architectures, complex queries, and document storage.",
    iconName: "Database",
    skills: [
      { name: "MySQL", status: "acquired", category: "database" },
      { name: "PostgreSQL", status: "acquired", category: "database" },
      { name: "MongoDB", status: "acquired", category: "database" },
      { name: "Modélisation Relationnelle", status: "acquired", category: "database" },
      { name: "Redis (Cache)", status: "acquired", category: "database" },
    ],
  },
  {
    id: "data",
    titleFr: "Ingénierie des Données (En cours)",
    titleEn: "Data Engineering (In Progress)",
    descriptionFr: "Apprentissage actif dans le cadre du Master 1 3iL : flux ETL/ELT, manipulation de données et business intelligence.",
    descriptionEn: "Active learning within Master 1 3iL: ETL/ELT pipelines, data transformations, and business intelligence.",
    iconName: "Workflow",
    skills: [
      { name: "Python", status: "in-progress", category: "data", descriptionFr: "En cours d'apprentissage", descriptionEn: "Currently learning" },
      { name: "Concepts ETL / ELT", status: "in-progress", category: "data", descriptionFr: "En cours d'assimilation", descriptionEn: "In active training" },
      { name: "SQL Avancé", status: "in-progress", category: "data", descriptionFr: "Requêtes analytiques et agrégations", descriptionEn: "Analytical queries and aggregations" },
      { name: "Power BI", status: "in-progress", category: "data", descriptionFr: "Certification Microsoft Learn", descriptionEn: "Microsoft Learn training" },
    ],
  },
  {
    id: "devops",
    titleFr: "DevOps & Infrastructure",
    titleEn: "DevOps & Infrastructure",
    descriptionFr: "Conteneurisation, gestion de versions distribuée, pipelines CI/CD et déploiement applicatif.",
    descriptionEn: "Containerization, distributed version control, CI/CD pipelines, and application deployment.",
    iconName: "Cpu",
    skills: [
      { name: "Docker", status: "acquired", category: "devops" },
      { name: "Git & GitHub", status: "acquired", category: "devops" },
      { name: "CI / CD", status: "acquired", category: "devops", descriptionFr: "Pratiques intégrées", descriptionEn: "Integrated practices" },
      { name: "Stratégies de Cache", status: "acquired", category: "devops" },
      { name: "Linux / Bash", status: "acquired", category: "devops" },
    ],
  },
  {
    id: "tools",
    titleFr: "Qualité Logicielle & Outils",
    titleEn: "Software Quality & Tools",
    descriptionFr: "Tests unitaires et d'intégration, outillage de développement et méthodologies agiles.",
    descriptionEn: "Unit and integration testing, developer toolchains, and agile methodologies.",
    iconName: "CheckCircle",
    skills: [
      { name: "PHPUnit", status: "acquired", category: "tools", descriptionFr: "35+ et 61 tests automatisés écrits", descriptionEn: "35+ and 61 automated tests written" },
      { name: "Postman", status: "acquired", category: "tools" },
      { name: "Architecture MVC", status: "acquired", category: "tools" },
      { name: "Méthodes Agiles / Scrum", status: "acquired", category: "tools" },
    ],
  },
];

export interface LanguageItem {
  nameFr: string;
  nameEn: string;
  levelFr: string;
  levelEn: string;
  badge: string;
}

export const spokenLanguages: LanguageItem[] = [
  {
    nameFr: "Français",
    nameEn: "French",
    levelFr: "Langue maternelle",
    levelEn: "Native speaker",
    badge: "Native",
  },
  {
    nameFr: "Anglais",
    nameEn: "English",
    levelFr: "Courant / Professionnel",
    levelEn: "Fluent / Professional",
    badge: "Fluent",
  },
  {
    nameFr: "Thaï",
    nameEn: "Thai",
    levelFr: "Intermédiaire",
    levelEn: "Intermediate",
    badge: "Intermediate",
  },
  {
    nameFr: "Allemand",
    nameEn: "German",
    levelFr: "Débutant",
    levelEn: "Beginner",
    badge: "Beginner",
  },
];
