import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "ibm-python",
    title: " Python Avanzado Orientado al Desarrollo Backend (86 h)",
    issuer: "IBM & BeJob",
    category: "Programación & Data",
    date: "2026",
    description: "Formación avanzada en Python y desarrollo backend, incluyendo POO, bases de datos, APIs con FastAPI, persistencia de datos, arquitectura backend y testing automatizado con pytest.",
    credentialUrl: "/certifications/diploma/ibm_python_avanzado.pdf",
    logo: "/certifications/logos/ibm-bejob.svg",
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
