import type { Certification } from "@/types/certification";

export const certifications: Certification[] = [
  {
    id: "ibm-python",
    title: "Inciación a la programación con Python (70 h.)",
    issuer: "IBM & BeJob",
    category: "Programación & Data",
    date: "2026",
    description:
      "Introducción a la programación con Python, incluyendo GIT, GitHub, fundamentos de Desarrollo Web, POO y tests con Python",
    credentialUrl: "/certifications/diploma/ibm_iniciacion_python.pdf",
    logo: "/certifications/logos/ibm-bejob.svg",
  },
  {
    id: "ibm-python",
    title: " Python Avanzado Orientado al Desarrollo Backend (86 h.)",
    issuer: "IBM & BeJob",
    category: "Programación & Data",
    date: "2026",
    description:
      "Formación avanzada en Python y desarrollo backend, incluyendo POO, bases de datos, APIs con FastAPI, persistencia de datos, arquitectura backend y testing automatizado con pytest.",
    credentialUrl: "/certifications/diploma/ibm_python_avanzado.pdf",
    logo: "/certifications/logos/ibm-bejob.svg",
  },
  {
    id: "power-bi",
    title: "Crea paneles y visualizaciones con Power BI (10 h.)",
    issuer: "Agencia Digital de Andalucía",
    category: "Data",
    date: "2026",
    description:
      "Formación especializada en análisis y visualización de datos con Power BI.",
    credentialUrl: "/certifications/diploma/andalucia_vuela_power_bi.pdf",
    logo: "/certifications/logos/andalucia-vuela-blanco.svg",
  },
  {
    id: "ai-pymes-prompt",
    title: "Inteligencia Artificial para Pymes y Prompt (120 h.)",
    issuer: "Formación IA",
    category: "AI / Inteligencia Artificial",
    date: "2026",
    description:
      "Formación práctica en inteligencia artificial aplicada a Pymes, con especialización en IA generativa y Prompt Engineering. Incluye fundamentos de Machine Learning y Deep Learning, uso de herramientas como ChatGPT y Copilot y aplicación de técnicas de prompting a diferentes sectores profesionales.",
    credentialUrl: "certifications/diploma/laborus-ia-pymes-prompt.pdf",
    logo: "/certifications/logos/laborus.png",
  },
  {
    id: "scrum",
    title: "Certified SCRUM Developer - CSD (24 h.)",
    issuer: "SEPE & Global Knowledge Network Spain SLU",
    category: "Gestión y Metodologías",
    date: "2026",
    description: "Formación introductoria sobre inteligencia artificial.",
    credentialUrl: "/certifications/diploma/sepe-scrum-nodni.pdf",
    logo: "/certifications/logos/sepe-skillsoft.svg",
  },
];
