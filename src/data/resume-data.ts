import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Théo Durr",
  initials: "TD",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg",
  about: "Ingénieur Full Stack",
  summary:
    "Ingénieur Full Stack. 5 années d'expérience dans le secteur bancaire. Conception et développement d'applications robustes, sécurisées et performantes. Formation continue sur les pratiques et technologies du Cloud.",
  avatarUrl: "https://avatars.githubusercontent.com/u/47631598?v=4",
  personalWebsiteUrl: "https://theodurr.fr",
  contact: {
    email: "contact@theodurr.fr",
    tel: "+33665697530",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/theoraim",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/theodurr/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Université de Technologie de Belfort-Montbéliard (UTBM)",
      degree:
        "Diplôme d'ingénieur en informatique spécialité Sécurité et Virtualisation des infrastructures",
      start: "2019",
      end: "2025",
    },
  ],
  work: [
    {
      company: "Euro Information",
      link: "https://e-i.com",
      badges: ["Kubernetes", "DevOps", "C#", "DotNet", "TypeScript"],
      title: "Analyste Développeur / Architecte Cloud",
      start: "2025",
      end: null,
      description:
        "Accompagnement des équipes de développement pour la migrations des 16 000 applications du groupe vers le cloud privé Euro Information",
      highlights: [
        "Implication dans les décisions d'architecture en vigueur dans l'entreprise",
        "Sensibilisation des développeurs sur les problématiques liées au Cloud",
        "Rigueur et organisation pour le suivi d'une centaine de projets de migration en parralèle",
        "Développement d'une Web App permettant le suivi et la planification des projets de migration à destination de tout le groupe"
      ],
    },
    {
      company: "Euro Information",
      link: "https://e-i.com",
      badges: ["C#", "DotNet", "REST"],
      title: "Analyste Développeur (Alternance)",
      start: "2022",
      end: "2025",
      description:
        "Développement des parcours d'ouverture de compte bancaire à destination des prospects",
      highlights: [
        "Intégration d'une API de validation de l'identité par Selfie avec un partenaire externe",
        "Monitoring des performances et du taux de conversion des parcours avec stratégie Canary Deployment",
        "Utilisation des pratiques de Clean Code dans un projet avec plusieurs développeurs"
      ],
    },
    {
      company: "Banque du Luxembourg",
      link: "https://www.banquedeluxembourg.com",
      badges: ["Angular", "Spring Boot", "OpenShift"],
      title: "Software Developer (Internship)",
      start: "2023",
      end: "2023",
      description:
        "Développement d'une application permettant la signature électronique qualifée",
      highlights: [
        "Intégration de l'API LuxTrust permettant la génération de signatures",
        "Création d'un frontend et d'une API permettant la signature par tous les employés",
        "Application des normes de sécurité en vigueur sur la signature électronique",
      ],
    },
  ],
  skills: [
    "C#",
    "Go",
    "APIs REST",
    "Kubernetes",
    "Architecture des SI",
    "Cloud Native Apps",
  ],
  projects: [],
} as const;
