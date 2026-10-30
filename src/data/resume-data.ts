import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Théo Durr",
  initials: "TD",
  location: "Strasbourg, France",
  locationLink: "https://www.google.com/maps/place/Strasbourg",
  about: "Ingénieur Full Stack",
  summary:
    "Ingénieur informatique spécialisé dans la sécurité et la virtualisation des infrastructures. HomeLab and Cloud Technologies Enthusiast 🏠.",
  avatarUrl: "https://avatars.githubusercontent.com/u/47631598?v=4",
  personalWebsiteUrl: "https://theodurr.fr",
  contact: {
    email: "contact@theodurr.fr",
    tel: "+33665697530",
    social: [
      {
        name: "GitHub",
        url: "https://git.theoraime.com/theoraime",
        icon: "git",
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
      badges: ["C#", "OpenShift", "Helm", "Jaeger", "Grafana"],
      title: "Analyste Développeur / Architecte Cloud",
      start: "2025",
      end: null,
      description:
        "Accompagnement des développeurs du groupe dans la transformation de leur application vers une architecture Cloud Native",
      highlights: [
        "Implication dans les décisions d'architecture en vigueur dans l'entreprise",
        "Sensibilisation des développeurs sur les aspects et divergences d'un passage sur le Cloud",
        "Suivi d'une vingtaine de projets de migration en parralèle",
      ],
    },
    {
      company: "Euro Information",
      link: "https://e-i.com",
      badges: ["C#", ".NET", "REST"],
      title: "Analyste Développeur (Alternance)",
      start: "2022",
      end: "2025",
      description:
        "Amélioration du taux de conversion des parcours d'ouverture de compte bancaire digitalisés",
      highlights: [
        "Développement d'un microservice à destination du groupe permettant de faire la passerelle avec un prestataire externe pour la validation de l'identité par Selfie",
        "Monitoring des performances et du taux de conversion des parcours en utilisant la stratégie Canary Deployment",
        "Promotion et adoption des pratiques de Clean Code dans un projet avec plusieurs développeurs",
      ],
    },
    {
      company: "Banque du Luxembourg",
      link: "https://www.banquedeluxembourg.com",
      badges: ["Angular", "Spring Boot", "TailwindCSS", "Openshift"],
      title: "Software Developer (Stage)",
      start: "2023",
      end: "2023",
      description:
        "Développement d'une solution permettant la signature électronique qualifiée pour tous les collaborateurs de la banque",
      highlights: [
        "Intégration de l'API Nationale LuxTrust pour la signature qualifiée",
        "Déploiement de l'application et intégration d'autres microservices internes",
        "Respect des normes de sécurité luxembourgeoise sur la protection des données",
      ],
    },
  ],
  skills: [
    "C#",
    "Go",
    "Linux",
    "Docker",
    "Kubernetes",
    "Observabilité",
    "Architecture des systèmes",
    "DevSecOps",
    "Terraform/Opentofu",
    "Ansible",
    "Collaboration en équipe"
  ],
  projects: [],
} as const;
