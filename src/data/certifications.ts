import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "ibm-python",
    title: "Python",
    issuer: "IBM",
    category: "Programming",
    date: "2026",
    description: "Certificación relacionada con programación en Python.",
    credentialUrl: null,
    logo: "/certifications/ibm.png",
  },
  {
    id: "power-bi",
    title: "Power BI",
    issuer: "Agencia Digital de Andalucía",
    category: "Data",
    date: "2026",
    description:
      "Formación especializada en análisis y visualización de datos con Power BI.",
    credentialUrl: null,
    logo: "/certifications/andalucia.png",
  },
  {
    id: "introduction-ai",
    title: "Introduction to Artificial Intelligence",
    issuer: "Formación IA",
    category: "AI",
    date: "2026",
    description: "Formación introductoria sobre inteligencia artificial.",
    credentialUrl: null,
    logo: "/certifications/ia.png",
  },
];
