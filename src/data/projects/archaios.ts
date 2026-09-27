import type { Project } from "@/types/project";

export const archaios: Project = {
  slug: "archaios-data-intelligence",
  category: "Data · Power BI · Base de Datos · EDA",
  context: "Bootcamp · Proyecto individual",
  title: "Archaios Data Intelligence",
  tagline: "Operación Normandía",

  /* DESCRIPCIÓN PARA LA TARJETA */

  description:
    "Análisis arqueológico‑militar basado en datos históricos de bombardeos aliados (THOR). Incluye un ETL completo en Python, análisis exploratorio, detección de sesgos y un dashboard geoespacial en Power BI para apoyar la interpretación arqueológica contemporánea.",

  /* DESCRIPCIÓN DE LA PAG. INDIVIDUAL */

  maintext: [
    "Proyecto individual de ingeniería y análisis de datos que procesa y modela registros históricos de operaciones aéreas de la Segunda Guerra Mundial (dataset THOR) en una herramienta de inteligencia geoespacial para la investigación arqueológica.",
    "A través de un pipeline en Python y un modelo analítico en Power BI, la solución estructura más de 170.000 registros y 60 variables, permitiendo identificar patrones de ataque, densidades de impacto y nodos logísticos clave en la fase previa y durante el Día D.",
  ],

  heroImage: "/projects/archaios/main_image.png",

  sections: [
    {
      title: "Inteligencia de datos aplicada a la arqueología",
      content: [
        "Archaios Data Intelligence transforma microdatos militares no estructurados en coordenadas y métricas operativas de alto valor para la arqueología contemporánea.",
        "El desafío principal radicó en depurar un volumen masivo de misiones aéreas dispersas entre 1943 y 1944, estandarizando coordenadas geográficas, tipologías de objetivos y toneladas de munición para construir una herramienta capaz de priorizar excavaciones y prospecciones de campo.",
      ],
    },
    {
      title: "Del dato bruto a la herramienta: Pipeline ETL y Modelado",
      content: [
        "Desarrollo integral del ciclo de vida del dato: desde la ingesta de fuentes brutas hasta la optimización del modelo tabular para visualización analítica.",
      ],
      items: [
        "Ingesta & Limpieza: Procesamiento en Python (Pandas/NumPy) de más de 170.000 filas y más de 60 variables originales, reduciendo el dataset a un modelo optimizado de variables clave.",
        "Normalización Geoespacial: Filtrado y corrección de latitud/longitud en coordenadas erróneas o faltantes, garantizando un 100% de georreferenciación en el teatro de operaciones europeo.",
        "Detección de Sesgos: Cuantificación de registros sin clasificar (etiquetados como 'Unknown') y tratamiento de discrepancias documentales entre 1943 y 1944.",
      ],
      steps: [
        { number: "01", title: "Ingesta & Profiling" },
        { number: "02", title: "Limpieza & ETL" },
        { number: "03", title: "Tratamiento Geoespacial" },
        { number: "04", title: "Modelado Tabular" },
        { number: "05", title: "Dashboard Power BI" },
        { number: "06", title: "Validación Arqueológica" },
      ],
    },
    {
      title: "Resultado y Métricas del Proyecto",
      content: [
        "El resultado es un cuadro de mando analítico en Power BI compuesto por 3 paneles estratégicos interactivos, conectado a un modelo de datos depurado con tiempos de respuesta instantáneos.",
        "Permite correlacionar toneladas de explosivos arrojados, tipo de aeronave (cazas/bombarderos) y objetivos atacados (líneas ferroviarias, puentes, baterías costeras) a lo largo de 18 meses críticos, con foco específico en las 72 horas del desembarco.",
      ],
    },
  ],

  governance: {
    title: "Gobernanza y Limitaciones Cuantitativas del Dato",

    content:
      "El análisis incorpora una auditoría de calidad del dato para contextualizar los márgenes de incertidumbre históricos antes de cualquier toma de decisión arqueológica:",

    limitations: [
      {
        title: "Sesgo de representatividad (Misiones documentadas)",
        description:
          "El dataset refleja exclusivamente las incursiones archivadas formalmente por las fuerzas aliadas; las operaciones secundarias o fallidas pueden no constar en los registros oficiales.",
      },
      {
        title: "Sesgo geográfico y precisión de coordenadas",
        description:
          "Se detectaron registros con coordenadas aproximadas al cuadrante de navegación militar; la densidad visual refleja probabilidad de impacto, no impacto milimétrico.",
      },
      {
        title: "Sesgo de etiquetado en objetivos (registros no catalogados)",
        description:
          "Parte de los objetivos históricos carecen de clasificación específica (registrados como “Unknown” o “Unidentified”), requiriendo agrupaciones analíticas conservadoras.",
      },
      {
        title: "Asimetría temporal 1943 vs. 1944",
        description:
          "La densidad de registros aumenta significativamente a partir del primer trimestre de 1944 debido a la intensificación de misiones preparatorias de la Operación Overlord.",
      },
    ],
  },

  insights: [
    {
      number: "01",
      title:
        "Dispersión interior frente a costa: Más del 60% de impactos en red logística",
      description:
        "El análisis espacial desmiente la intuición de que el bombardeo fue puramente litoral: la mayor densidad de tonelaje se concentró en nudos ferroviarios y puentes del interior para aislar los refuerzos.",
    },
    {
      number: "02",
      title: "Picos tácticos del 1 al 5 de junio de 1944",
      description:
        "En los 5 días inmediatamente previos al Día D se registró una aceleración drástica de salidas tácticas, focalizadas en neutralizar estaciones de radar y defensas antiaéreas.",
    },
    {
      number: "03",
      title: "La densidad histórica como criterio de priorización",
      description:
        "La concentración espacial de misiones y tonelaje acumulado permite delimitar sectores con alta probabilidad de restos materiales o proyectiles sin detonar, sirviendo de guía para orientar campañas de prospección sobre el terreno.",
    },
  ],

  video: "https://www.youtube.com/embed/48uPGrgYWwU",

  gallery: [
    {
      src: "/projects/archaios/dashboard-overview.png",
      alt: "Panorama global de las operaciones aéreas entre 1943 y 1944",
      title: "Panorama global · 1943–1944",
      description:
        "Vista general de la actividad aérea registrada durante el periodo analizado para identificar patrones y zonas de concentración.",
    },
    {
      src: "/projects/archaios/june-1-5.png",
      alt: "Análisis de las operaciones del 1 al 5 de junio de 1944",
      title: "1–5 de junio de 1944",
      description:
        "Análisis de los días previos al desembarco y de los objetivos e infraestructuras atacados durante esta fase.",
    },
    {
      src: "/projects/archaios/d-day.png",
      alt: "Análisis de las operaciones del Día D",
      title: "Día D · 6 de junio de 1944",
      description:
        "Exploración de la actividad registrada durante el Día D y de su distribución espacial.",
    },
  ],

  theme: {
    accent: "#C9A227" /* Título de la foto */,
    accentSoft: "#E7E0CC" /* Flechitas de los lados*/,
    background: "#556B2F" /* BG del circulito de la flecha */,
    border: "#B5651D" /* Color de los puntitos de "siguiente" */,
  },

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Power BI",
    "ETL Pipeline",
    "Modelado Tabular",
    "Análisis Geoespacial",
    "Limpieza de Datos",
    "EDA",
    "Data Storytelling",
  ],

  github: "https://github.com/HelenDiMo/archaios-data-Intelligence.git",
  image: "/projects/archaios/archaios-card.png",
};
