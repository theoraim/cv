import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Théo Durr",
  initials: "TD",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg",
  about: "Ingénieur Full Stack",
  summary:
    "Ingénieur Full Stack. 5 années d'expérience dans le secteur bancaire. Conception et développement d'applications performantes. Formation continue sur les technologies du Cloud.",
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
        "Accompagnement des équipes de développement dans la transformation de leurs application vers le cloud privé Euro Information",
      highlights: [
        "Application des décisions d'architecture d'entreprise",
        "Approche DevSecOps sur le développement, l'intégration et le déploiement",
        "Exploitation et monitoring des microservices sous OpenShift",
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
        "Développement des parcours d'entrée en relation en ligne permettant l'ouverture de compte bancaire",
      highlights: [
        "Intégration d'une API de validation de l'identité par Selfie avec des partenaires externes",
        "Monitoring des performances et du taux de conversion des parcours avec stratégie Canary",
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
        "Création d'un frontend permettant la signature par tous les employés",
        "Développement de l'API et du schéma de données permettant le stockage des données",
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
