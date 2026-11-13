export type Locale = "fr" | "en";

export type LocalizedString = Record<Locale, string>;

export type Project = {
  id: string;
  title: string;
  year: string;
  tagline: LocalizedString;
  objective: LocalizedString;
  description: LocalizedString;
  role: LocalizedString;
  url?: string;
  logo: string;
  logoMode?: "cover" | "contain-dark" | "contain-light";
  cover?: string;
  metric?: LocalizedString;
  tools: string[];
  features: LocalizedString[];
  status: "shipped" | "ongoing";
};

export type Cap = {
  id: string;
  kind: "education" | "work";
  year: LocalizedString;
  title: LocalizedString;
  company?: LocalizedString;
  detail: LocalizedString;
  url?: string;
  status: "shipped" | "ongoing" | "next";
};

export type SkillGroup = {
  id: string;
  label: LocalizedString;
  items: string[];
};

export const site = {
  name: "Ilias Kharbouch",
  monogram: "IK",
  firstName: "ILIAS",
  lastName: "KHARBOUCH",
  email: "iliaskharbouch17@gmail.com",
  phone: "+212 6 69 20 05 60",
  phoneHref: "tel:+212669200560",
  location: {
    fr: "Mohammedia, Maroc",
    en: "Mohammedia, Morocco",
  } satisfies LocalizedString,
  github: "https://github.com/iliaskh05",
  linkedin: "https://www.linkedin.com/in/ilias-kharbouch-8a3a4629a/",
  role: {
    fr: "Génie Digital & IA en santé · Full-Stack · Produits web",
    en: "Digital Engineering & Health AI · Full-Stack · Web products",
  } satisfies LocalizedString,
  portrait: "/images/ilias-portrait.jpg",
  avatarHero: "/images/ilias-hero-photo.jpg",
  avatarAbout: "/images/ilias-avatar-about.jpg",
  avatarWork: "/images/ilias-avatar-work.jpg",
};

export const services = [
  {
    id: "develop",
    title: { fr: "DEVELOP", en: "DEVELOP" },
    subtitle: { fr: "Full-Stack & CRM", en: "Full-Stack & CRM" },
    body: {
      fr: "Applications web, CRM et APIs — de la compréhension du besoin jusqu'à la mise en production.",
      en: "Web apps, CRMs and APIs — from understanding the need through to production.",
    },
  },
  {
    id: "ai",
    title: { fr: "IA APPLIQUÉE", en: "APPLIED AI" },
    subtitle: { fr: "ML · Automation · Santé", en: "ML · Automation · Health" },
    body: {
      fr: "Modèles ML, détection d'anomalies, automatisation n8n et IA d'imagerie dans des produits santé & métier.",
      en: "ML models, anomaly detection, n8n automation and imaging AI in health & business products.",
    },
  },
] as const;

export const techStack = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "n8n",
  "Zoom API",
] as const;

export type SkillKeyCategory = "code" | "ai" | "product";

export const skillKeyCategories: Record<
  SkillKeyCategory,
  { label: LocalizedString; color: string; glow: string }
> = {
  code: {
    label: { fr: "Ingénierie", en: "Engineering" },
    color: "#67e8f9",
    glow: "rgba(103,232,249,0.5)",
  },
  ai: {
    label: { fr: "IA & santé", en: "AI & health" },
    color: "#c084fc",
    glow: "rgba(192,132,252,0.55)",
  },
  product: {
    label: { fr: "Produit & delivery", en: "Product & delivery" },
    color: "#f0abfc",
    glow: "rgba(240,171,252,0.45)",
  },
};

/** Compétences ciblées — parcours Génie Digital / IA Santé / Full-Stack */
export type Competency = {
  id: string;
  label: LocalizedString;
  card: LocalizedString;
  description: LocalizedString;
  category: SkillKeyCategory;
  logo: string;
  brand: string;
  invertOnDark?: boolean;
  /** Position % dans le graphe */
  x: number;
  y: number;
  links: string[];
};

export const competencies: Competency[] = [
  {
    id: "typescript",
    label: { fr: "TypeScript", en: "TypeScript" },
    card: { fr: "TypeScript", en: "TypeScript" },
    description: {
      fr: "Typage strict pour des apps web robustes et maintenables.",
      en: "Strict typing for robust, maintainable web apps.",
    },
    category: "code",
    logo: "/images/skills/typescript.svg",
    brand: "#3178C6",
    x: 10,
    y: 36,
    links: ["nextjs", "node", "sql"],
  },
  {
    id: "nextjs",
    label: { fr: "Next.js · React", en: "Next.js · React" },
    card: { fr: "Next.js", en: "Next.js" },
    description: {
      fr: "Interfaces produit, SSR et parcours utilisateur — German Academy, CRMs, sites métier.",
      en: "Product UIs, SSR and user flows — German Academy, CRMs, business sites.",
    },
    category: "product",
    logo: "/images/skills/nextdotjs.svg",
    brand: "#A3A3A3",
    invertOnDark: true,
    x: 28,
    y: 16,
    links: ["typescript", "crm", "node", "canva"],
  },
  {
    id: "python",
    label: { fr: "Python", en: "Python" },
    card: { fr: "Python", en: "Python" },
    description: {
      fr: "Scripting data et socle pour modèles ML en contexte santé.",
      en: "Data scripting and foundation for ML models in health contexts.",
    },
    category: "code",
    logo: "/images/skills/python.svg",
    brand: "#3776AB",
    x: 50,
    y: 10,
    links: ["ml", "sql"],
  },
  {
    id: "sql",
    label: { fr: "SQL · PostgreSQL", en: "SQL · PostgreSQL" },
    card: { fr: "SQL", en: "SQL" },
    description: {
      fr: "Modélisation et requêtes data pour CRM, dashboards et produits métier.",
      en: "Data modeling and queries for CRMs, dashboards and business products.",
    },
    category: "code",
    logo: "/images/skills/sql.svg",
    brand: "#4169E1",
    x: 72,
    y: 18,
    links: ["typescript", "python", "node", "crm"],
  },
  {
    id: "health-ai",
    label: { fr: "IA Santé", en: "Health AI" },
    card: { fr: "IA Santé", en: "Health AI" },
    description: {
      fr: "IA appliquée à la santé : imagerie, CRM radiologie, parcours métier cliniques.",
      en: "Applied health AI: imaging, radiology CRM, clinical business flows.",
    },
    category: "ai",
    logo: "/images/skills/health-ai.svg",
    brand: "#C084FC",
    x: 90,
    y: 36,
    links: ["ml", "crm"],
  },
  {
    id: "node",
    label: { fr: "Node.js · APIs", en: "Node.js · APIs" },
    card: { fr: "Node.js", en: "Node.js" },
    description: {
      fr: "APIs REST, intégrations Zoom/Jitsi et backends pour produits live.",
      en: "REST APIs, Zoom/Jitsi integrations and backends for live products.",
    },
    category: "code",
    logo: "/images/skills/nodedotjs.svg",
    brand: "#339933",
    x: 20,
    y: 64,
    links: ["typescript", "automation", "nextjs", "sql"],
  },
  {
    id: "ml",
    label: { fr: "Machine Learning", en: "Machine Learning" },
    card: { fr: "ML", en: "ML" },
    description: {
      fr: "Modèles prédictifs et détection d’anomalies — MedicarePro fraude & imagerie.",
      en: "Predictive models and anomaly detection — MedicarePro fraud & imaging.",
    },
    category: "ai",
    logo: "/images/skills/tensorflow.svg",
    brand: "#FF6F00",
    x: 48,
    y: 46,
    links: ["python", "health-ai"],
  },
  {
    id: "crm",
    label: { fr: "CRM & produit", en: "CRM & product" },
    card: { fr: "CRM", en: "CRM" },
    description: {
      fr: "Conception et livraison de CRM métier — VetoCRM, Salis, MedicarePro + GTM Maroc.",
      en: "Design and shipping of business CRMs — VetoCRM, Salis, MedicarePro + Morocco GTM.",
    },
    category: "product",
    logo: "/images/skills/crm.svg",
    brand: "#F0ABFC",
    x: 78,
    y: 58,
    links: ["nextjs", "health-ai", "automation", "sql", "canva"],
  },
  {
    id: "automation",
    label: { fr: "Automation · n8n", en: "Automation · n8n" },
    card: { fr: "n8n", en: "n8n" },
    description: {
      fr: "Workflows n8n et automatisation ops (LinkedIn, webhooks) pour scaler sans friction.",
      en: "n8n workflows and ops automation (LinkedIn, webhooks) to scale without friction.",
    },
    category: "product",
    logo: "/images/skills/n8n.svg",
    brand: "#EA4B71",
    x: 36,
    y: 84,
    links: ["node", "crm"],
  },
  {
    id: "canva",
    label: { fr: "Canva", en: "Canva" },
    card: { fr: "Canva", en: "Canva" },
    description: {
      fr: "Visuels produit, supports GTM et contenus sponsors / portfolio — rapide et propre.",
      en: "Product visuals, GTM assets and sponsor/portfolio content — fast and clean.",
    },
    category: "product",
    logo: "/images/skills/canva.svg",
    brand: "#00C4CC",
    x: 62,
    y: 82,
    links: ["crm", "nextjs"],
  },
];

/** @deprecated — prefer competencies */
export const skillKeys = competencies.map((c) => ({
  id: c.id,
  label: c.card.en,
  category: c.category,
}));

export const bio: LocalizedString = {
  fr: "Étudiant ingénieur en Génie Digital & IA en Santé (Suptech Santé). Je construis des produits web et des CRM, j'automatise les opérations, et j'intègre de l'IA là où elle crée un vrai levier — santé, commercial, apprentissage.",
  en: "Engineering student in Digital Engineering & Health AI (Suptech Santé). I build web products and CRMs, automate operations, and integrate AI where it creates real leverage — health, sales, learning.",
};

/** Projets — ordre : en cours / récents d'abord */
export const projects: Project[] = [
  {
    id: "langplatform",
    title: "German Academy",
    year: "2026",
    tagline: {
      fr: "Plateforme d'apprentissage de l'allemand",
      en: "German language-learning platform",
    },
    objective: {
      fr: "Construire une plateforme scalable d'apprentissage de langues — focus allemand — avec sessions live Zoom & Jitsi.",
      en: "Build a scalable language-learning platform — German-first — with live Zoom & Jitsi sessions.",
    },
    description: {
      fr: "Plateforme multi-langues en cours de développement : parcours d'apprentissage, intégration Zoom API et webhooks Jitsi pour les cours en direct.",
      en: "Multi-language platform in progress: learning paths, Zoom API integration and Jitsi webhooks for live classes.",
    },
    role: {
      fr: "Full-Stack — architecture & développement produit",
      en: "Full-Stack — architecture & product development",
    },
    logo: "/images/projects/langlearn.svg",
    logoMode: "contain-dark",
    cover: "/images/projects/langlearn-cover.jpg",
    metric: {
      fr: "En cours · DE first",
      en: "Ongoing · DE first",
    },
    tools: ["Next.js", "TypeScript", "Zoom API", "Jitsi", "Webhooks", "Node.js"],
    features: [
      { fr: "Parcours multi-langues scalable", en: "Scalable multi-language paths" },
      { fr: "Sessions live Zoom API", en: "Live sessions via Zoom API" },
      { fr: "Webhooks Jitsi intégrés", en: "Integrated Jitsi webhooks" },
    ],
    status: "ongoing",
  },
  {
    id: "vetocrm",
    title: "VetoCRM",
    year: "2025 —",
    tagline: {
      fr: "CRM vétérinaire + commercialisation Maroc",
      en: "Veterinary CRM + Morocco GTM",
    },
    objective: {
      fr: "Développer la solution CRM française et la commercialiser auprès des cliniques vétérinaires au Maroc.",
      en: "Build the French CRM solution and commercialize it with veterinary clinics in Morocco.",
    },
    description: {
      fr: "Développement produit sur vetocrm.com et charge de commercialisation au Maroc — du produit jusqu'au terrain.",
      en: "Product development on vetocrm.com plus Morocco commercialization — from product to market.",
    },
    role: {
      fr: "Full-Stack · Commercialisation Maroc",
      en: "Full-Stack · Morocco GTM",
    },
    url: "https://www.vetocrm.com",
    logo: "/images/projects/vetocrm-real.png",
    logoMode: "contain-light",
    cover: "/images/projects/vetocrm-shot.jpeg",
    metric: {
      fr: "Dev + GTM Maroc",
      en: "Dev + Morocco GTM",
    },
    tools: ["CRM", "Next.js", "n8n", "Sales", "GTM"],
    features: [
      { fr: "Modules CRM vétérinaire", en: "Veterinary CRM modules" },
      { fr: "Développement produit continu", en: "Ongoing product development" },
      { fr: "Go-to-market Maroc", en: "Morocco go-to-market" },
    ],
    status: "ongoing",
  },
  {
    id: "medicarepro",
    title: "MedicarePro",
    year: "2026",
    tagline: {
      fr: "CRM radiologie · fraude · imagerie IA",
      en: "Radiology CRM · fraud · imaging AI",
    },
    objective: {
      fr: "Équiper un centre de radiologie d'un CRM métier, d'un modèle ML anti-fraude et d'une IA d'imagerie médicale.",
      en: "Equip a radiology center with a business CRM, fraud-detection ML and medical imaging AI.",
    },
    description: {
      fr: "Stage 3 mois chez TisaConsulting — CRM MedicarePro, détection de fraude/anomalies (ML) et module d'IA d'imagerie médicale.",
      en: "3-month internship at TisaConsulting — MedicarePro CRM, fraud/anomaly ML and medical imaging AI module.",
    },
    role: {
      fr: "Full-Stack · ML · IA santé — TisaConsulting",
      en: "Full-Stack · ML · Health AI — TisaConsulting",
    },
    logo: "/images/projects/radiology.jpg",
    logoMode: "cover",
    cover: "/images/projects/radiology.jpg",
    metric: {
      fr: "Stage 3 mois · 2026",
      en: "3-mo internship · 2026",
    },
    tools: ["Python", "ML", "Clustering", "CRM", "Medical imaging AI"],
    features: [
      { fr: "CRM centre de radiologie", en: "Radiology center CRM" },
      { fr: "Détection fraude & anomalies", en: "Fraud & anomaly detection" },
      { fr: "IA d'imagerie médicale", en: "Medical imaging AI" },
    ],
    status: "shipped",
  },
  {
    id: "salis",
    title: "Salis 3 Hottes",
    year: "2026",
    tagline: {
      fr: "Site vitrine + CRM métier",
      en: "Marketing site + business CRM",
    },
    objective: {
      fr: "Donner à une PME française une présence web crédible et un CRM interne pour piloter l'activité.",
      en: "Give a French SME a credible web presence and an internal CRM to run operations.",
    },
    description: {
      fr: "Conception et développement de salis3hottes.fr et du CRM associé : parcours commercial, suivi et back-office.",
      en: "Designed and built salis3hottes.fr and its CRM: sales flows, tracking and back-office.",
    },
    role: {
      fr: "Full-Stack — conception, développement, livraison",
      en: "Full-Stack — design, build, ship",
    },
    url: "https://salis3hottes.fr",
    logo: "/images/projects/salis-logo.png",
    logoMode: "contain-dark",
    cover: "/images/projects/salis-shot.jpeg",
    metric: {
      fr: "Site + CRM livrés",
      en: "Site + CRM shipped",
    },
    tools: ["Next.js", "TypeScript", "Node.js", "CRM", "UI/UX"],
    features: [
      { fr: "Site vitrine responsive", en: "Responsive marketing site" },
      { fr: "CRM de suivi commercial", en: "Sales tracking CRM" },
      { fr: "Parcours lead → client", en: "Lead → client pipeline" },
    ],
    status: "shipped",
  },
  {
    id: "commohedge",
    title: "CommoHedge",
    year: "2025",
    tagline: {
      fr: "Aide à la décision · data & dashboards",
      en: "Decision support · data & dashboards",
    },
    objective: {
      fr: "Développer une application web d'aide à la décision basée sur l'analyse de données en temps réel.",
      en: "Build a decision-support web app driven by real-time data analysis.",
    },
    description: {
      fr: "Stage 2 mois chez TisaConsulting — APIs temps réel, dashboards interactifs et workflows n8n pour automatiser la publication LinkedIn liée à l'app.",
      en: "2-month internship at TisaConsulting — real-time APIs, interactive dashboards and n8n workflows to automate LinkedIn posts about the app.",
    },
    role: {
      fr: "Développement Full-Stack — TisaConsulting",
      en: "Full-Stack development — TisaConsulting",
    },
    url: "https://www.commohedge.com",
    logo: "/images/projects/commohedge-logo.png",
    logoMode: "contain-light",
    cover: "/images/projects/commohedge-shot.png",
    metric: {
      fr: "Stage 2 mois · 2025",
      en: "2-mo internship · 2025",
    },
    tools: ["Next.js", "React", "APIs", "Dashboards", "n8n", "LinkedIn"],
    features: [
      { fr: "Données temps réel via APIs", en: "Real-time data via APIs" },
      { fr: "Dashboards interactifs", en: "Interactive dashboards" },
      { fr: "Automation LinkedIn (n8n)", en: "LinkedIn automation (n8n)" },
    ],
    status: "shipped",
  },
];

export const education: Cap[] = [
  {
    id: "bac",
    kind: "education",
    year: { fr: "2022 — 2023", en: "2022 — 2023" },
    title: {
      fr: "Baccalauréat Sciences Mathématiques A",
      en: "Baccalaureate — Mathematical Sciences A",
    },
    company: { fr: "Parcours académique", en: "Academic path" },
    detail: {
      fr: "Obtention du Bac Sciences Mathématiques A — socle scientifique avant la prépa.",
      en: "Earned the Mathematical Sciences A baccalaureate — scientific foundation before prep school.",
    },
    status: "shipped",
  },
  {
    id: "prepa",
    kind: "education",
    year: { fr: "2023 — 2025", en: "2023 — 2025" },
    title: {
      fr: "Prépa intégrée — Suptech Santé",
      en: "Integrated prep — Suptech Santé",
    },
    company: { fr: "Suptech Santé", en: "Suptech Santé" },
    detail: {
      fr: "Deux années de prépa intégrée à Suptech Santé — sciences, méthode et préparation au cycle ingénieur.",
      en: "Two years of integrated prep at Suptech Santé — science, rigor and prep for the engineering cycle.",
    },
    url: "https://www.suptech-sante.ma/",
    status: "shipped",
  },
  {
    id: "ingenieur",
    kind: "education",
    year: { fr: "2025 — 2028", en: "2025 — 2028" },
    title: {
      fr: "Cycle ingénieur · Génie Digital & IA en Santé",
      en: "Engineering cycle · Digital Eng. & Health AI",
    },
    company: { fr: "Suptech Santé", en: "Suptech Santé" },
    detail: {
      fr: "Cycle ingénieur en cours — software engineering, data et intelligence artificielle appliquée à la santé.",
      en: "Engineering cycle in progress — software engineering, data and AI applied to health.",
    },
    url: "https://www.suptech-sante.ma/",
    status: "ongoing",
  },
];

export const experience: Cap[] = [
  {
    id: "commo-stage",
    kind: "work",
    year: { fr: "Été 2025", en: "Summer 2025" },
    title: {
      fr: "Stage Full-Stack — CommoHedge",
      en: "Full-Stack internship — CommoHedge",
    },
    company: { fr: "TisaConsulting · 2 mois", en: "TisaConsulting · 2 months" },
    detail: {
      fr: "App d'aide à la décision : APIs temps réel, dashboards interactifs et workflows n8n pour l'automation LinkedIn.",
      en: "Decision-support app: real-time APIs, interactive dashboards and n8n workflows for LinkedIn automation.",
    },
    url: "https://www.commohedge.com",
    status: "shipped",
  },
  {
    id: "veto-work",
    kind: "work",
    year: { fr: "2025 —", en: "2025 —" },
    title: {
      fr: "Développement & GTM Maroc — VetoCRM",
      en: "Development & Morocco GTM — VetoCRM",
    },
    company: { fr: "VetoCRM", en: "VetoCRM" },
    detail: {
      fr: "Développement de la solution CRM vétérinaire française et commercialisation auprès des cliniques au Maroc — en cours.",
      en: "Building the French veterinary CRM and commercializing it with clinics in Morocco — ongoing.",
    },
    url: "https://www.vetocrm.com",
    status: "ongoing",
  },
  {
    id: "medicare-stage",
    kind: "work",
    year: { fr: "Été 2026", en: "Summer 2026" },
    title: {
      fr: "Stage — MedicarePro CRM & IA",
      en: "Internship — MedicarePro CRM & AI",
    },
    company: { fr: "TisaConsulting · 3 mois", en: "TisaConsulting · 3 months" },
    detail: {
      fr: "CRM radiologie, modèle ML de détection fraude/anomalies et IA d'imagerie médicale.",
      en: "Radiology CRM, fraud/anomaly ML detection and medical imaging AI.",
    },
    status: "shipped",
  },
  {
    id: "salis-work",
    kind: "work",
    year: { fr: "2026", en: "2026" },
    title: {
      fr: "Site & CRM — Salis 3 Hottes",
      en: "Site & CRM — Salis 3 Hottes",
    },
    company: { fr: "Salis 3 Hottes", en: "Salis 3 Hottes" },
    detail: {
      fr: "Livraison du site public et du CRM métier pour piloter l'activité de la boîte.",
      en: "Shipped the public site and business CRM to run the company's operations.",
    },
    url: "https://salis3hottes.fr",
    status: "shipped",
  },
  {
    id: "lang-work",
    kind: "work",
    year: { fr: "Maintenant", en: "Now" },
    title: {
      fr: "German Academy — apprentissage de langues",
      en: "German Academy — language learning",
    },
    company: { fr: "Produit en cours", en: "Product in progress" },
    detail: {
      fr: "German Academy : plateforme scalable (focus allemand) avec Zoom API et webhooks Jitsi — en développement.",
      en: "German Academy: scalable platform (German-first) with Zoom API and Jitsi webhooks — in development.",
    },
    status: "ongoing",
  },
];

/** @deprecated use education + experience — kept for any legacy imports */
export const caps: Cap[] = [...education, ...experience];

export const skillGroups: SkillGroup[] = [
  {
    id: "fullstack",
    label: { fr: "Full-Stack", en: "Full-Stack" },
    items: ["TypeScript", "React", "Next.js", "Node.js", "APIs REST", "PostgreSQL", "CRM"],
  },
  {
    id: "ai",
    label: { fr: "IA & Data", en: "AI & Data" },
    items: ["Python", "Clustering", "ML", "Imagerie médicale", "Dashboards"],
  },
  {
    id: "automation",
    label: { fr: "Automation", en: "Automation" },
    items: ["n8n", "LinkedIn automation", "Zoom API", "Jitsi webhooks"],
  },
  {
    id: "craft",
    label: { fr: "Craft", en: "Craft" },
    items: ["UX produit", "Go-to-market", "Commercialisation", "Livraison"],
  },
];

export const languages = [
  { id: "fr", label: { fr: "Français", en: "French" }, level: { fr: "Natif", en: "Native" } },
  { id: "en", label: { fr: "Anglais", en: "English" }, level: { fr: "B1", en: "B1" } },
  { id: "de", label: { fr: "Allemand", en: "German" }, level: { fr: "En apprentissage", en: "Learning" } },
];

/**
 * Voile — angle carrière (pas dossier sponsoring).
 * Preuves fortes + transfert soft skills utiles pour recruteurs / partenaires tech.
 */
export const sailing = {
  label: {
    fr: "Haute performance",
    en: "High performance",
  },
  title: {
    fr: "La discipline d’un champion, appliquée au produit.",
    en: "A champion’s discipline, applied to product.",
  },
  body: {
    fr: "Athlète ILCA 7 et représentant voile auprès du CNOM. Onze ans de voile m’ont appris à lire un contexte flou, trancher vite et tenir un cap long — exactement le mode d’emploi pour livrer des produits digitaux et de l’IA en santé sous contrainte.",
    en: "ILCA 7 athlete and sailing representative with the CNOM. Eleven years on the water taught me to read ambiguity, decide fast and hold a long heading — the same operating system I use to ship digital products and health AI under constraint.",
  },
  proofs: [
    {
      title: { fr: "Champion du Maroc", en: "Morocco Champion" },
      detail: { fr: "ILCA 7 — titre national", en: "ILCA 7 — national title" },
    },
    {
      title: { fr: "Représentant CNOM", en: "CNOM representative" },
      detail: { fr: "Voile olympique · crédibilité institutionnelle", en: "Olympic sailing · institutional trust" },
    },
    {
      title: { fr: "Champion d’Afrique U12", en: "Africa U12 Champion" },
      detail: { fr: "Optimist — première preuve internationale", en: "Optimist — first international proof" },
    },
    {
      title: { fr: "Circuit international", en: "International circuit" },
      detail: { fr: "Mondial U21 · SNIM · Libye · FNIR", en: "U21 Worlds · SNIM · Libya · FNIR" },
    },
  ],
  transfers: [
    {
      title: { fr: "Décision sous pression", en: "Decisions under pressure" },
      detail: {
        fr: "En régate comme en livraison produit : prioriser, arbitrer, exécuter.",
        en: "On the race course and in product delivery: prioritize, decide, execute.",
      },
    },
    {
      title: { fr: "Autonomie & endurance", en: "Autonomy & endurance" },
      detail: {
        fr: "Progression construite sans staff permanent — discipline et ownership.",
        en: "Progress built without permanent coaching staff — discipline and ownership.",
      },
    },
    {
      title: { fr: "Ambition longue", en: "Long-cycle ambition" },
      detail: {
        fr: "Projet olympique ILCA 7 : même culture de cycles longs que l’ingénierie.",
        en: "ILCA 7 Olympic project: the same long-cycle culture as engineering.",
      },
    },
  ],
};
