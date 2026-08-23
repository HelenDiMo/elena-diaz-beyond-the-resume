import type { Project } from "@/types/project";

export const projects: Project[] = [
  /* PROYECTO - ARCHAIOS */

  {
    theme: {
      accent: "#C9A227" /* Título de la foto */,
      accentSoft: "#E7E0CC" /* Flechitas de los lados*/,
      background: "#556B2F" /* BG del circulito de la flecha */,
      border: "#B5651D" /* Color de los puntitos de "siguiente" */,
    },
    slug: "archaios-data-intelligence",
    category: "Data · Power BI · Base de Datos · EDA",
    context: "Bootcamp · Proycto individual",
    title: "Archaios Data Intelligence",
    tagline: "Operación Normandía",

    /* DESCRIPCIÓN PARA LA TARJETA */

    description:
      "Análisis arqueológico‑militar basado en datos históricos de bombardeos aliados (THOR). Incluye un ETL completo en Python, análisis exploratorio, detección de sesgos y un dashboard geoespacial en Power BI para apoyar la interpretación arqueológica contemporánea.",

    /* DESCRIPCIÓN DE LA PAG. INDIVIDUAL */

    maintext: [
      "Proyecto individual de inteligencia de datos que transforma registros históricos de operaciones aéreas de la Segunda Guerra Mundial en una herramienta de análisis geoespacial aplicada a la investigación arqueológica.",
      "El dashboard permite explorar patrones de bombardeo, localizar zonas de alta concentración de actividad y analizar la evolución de las operaciones antes y durante el Día D.",
    ],

    heroImage: "/projects/archaios/main_image.png",

    sections: [
      {
        title: "Inteligencia de datos aplicada a la arqueología",
        content: [
          "Archaios Data Intelligence nace como un proyecto individual centrado en transformar datos históricos de operaciones aéreas durante la Segunda Guerra Mundial en información útil para la investigación arqueológica.",
          "El reto consistía en convertir estos registros históricos en una herramienta interactiva capaz de revelar patrones y ayudar a plantear una posible priorización de zonas de interés arqueológico.",
        ],
      },
      {
        title: "Del dato bruto a una herramienta de análisis",
        content: [
          "Trabajé en todo el proceso, desde la exploración y preparación de los datos hasta el modelado, análisis y desarrollo del dashboard interactivo.",
        ],
        steps: [
          { number: "01", title: "Exploración" },
          { number: "02", title: "Limpieza" },
          { number: "03", title: "Análisis" },
          { number: "04", title: "Modelado" },
          { number: "05", title: "Visualización" },
          { number: "06", title: "Insights" },
        ],
      },
      {
        title: "Resultado",
        content: [
          "El resultado es un dashboard interactivo desarrollado en Power BI que permite explorar la distribución temporal y geográfica de las operaciones aéreas.",
          "El dashboard combina indicadores, filtros interactivos y visualizaciones geográficas para analizar la actividad aérea desde diferentes perspectivas temporales y estratégicas, facilitando la identificación de patrones y zonas de interés.",
        ],
      },
    ],

    governance: {
      title: "Entender también las limitaciones del dato",

      content:
        "Los registros históricos utilizados presentan limitaciones de representatividad, cobertura geográfica, etiquetado y calidad temporal. Por ello, los resultados deben interpretarse como una herramienta de exploración y priorización, no como una representación completa de la actividad histórica.",

      limitations: [
        {
          title: "Sesgo de representatividad",
          description:
            "Solo se incluyen misiones documentadas, por lo que algunas operaciones pueden no estar reflejadas.",
        },
        {
          title: "Sesgo geográfico",
          description:
            "La ausencia de registros en una zona no implica necesariamente ausencia de actividad.",
        },
        {
          title: "Sesgo de etiquetado",
          description:
            "Algunos objetivos aparecen como “Unknown” o “Unidentified”.",
        },
        {
          title: "Sesgo temporal",
          description:
            "La documentación de 1944 puede ser más exhaustiva que la de periodos anteriores.",
        },
      ],
    },

    video: "/projects/archaios/demo_dashboard.mp4",

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

    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Power BI",
      "Excel",
      "Jupyter Notebook",
      "Data Cleaning",
      "EDA",
      "Visualización de Datos",
      "Análisis Geospacial",
      "Data Storytelling",
    ],
    github: "https://github.com/HelenDiMo/archaios-data-Intelligence.git",
    image: "/projects/archaios/adi_logo.png",
  },
  /* PROYECTO - TINDERJOB */

  /*{
    slug: "tinderjob",
    title: "TinderJob",
    category: "Data · Python · Automatización",
    context: "Bootcamp · Proyecto Grupal",
    description:
      "Proyecto de analítica avanzada y automatización orientado al análisis del mercado laboral tecnológico en España.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "Web Scraping",
      "BeautifulSoup",
      "GitHub Actions",
    ],
    github: "https://github.com/HelenDiMo/TinderJob.git",
    image: "/projects/tinderjobs/logo.png",
    heroImage: "/projects/tinderjobs/hero.png",
    context: "Bootcamp · Proyecto de equipo",

    role: {
      title: "Scrum Master · Team Support · QA & Presentation Lead",
      description:
        "Coordinación y seguimiento del equipo, apoyo durante el desarrollo, revisión de calidad y preparación de la presentación final.",
    },

    gallery: [
      {
        src: "/projects/tinderjob/dashboard.png",
        alt: "Dashboard principal de TinderJob",
        title: "Dashboard de análisis",
        description:
          "Vista general de los principales análisis realizados sobre el mercado laboral tecnológico.",
      },
      {
        src: "/projects/tinderjob/mercado-espana.png",
        alt: "Análisis del mercado tecnológico en España",
        title: "Mercado tecnológico en España",
        description:
          "Análisis de la demanda de perfiles y competencias técnicas en el mercado español.",
      },
      {
        src: "/projects/tinderjob/analisis-salarial.png",
        alt: "Análisis salarial",
        title: "Análisis salarial",
        description:
          "Exploración de la distribución salarial y su relación con distintas variables del mercado laboral.",
      },
    ],
    video: "/projects/tinderjob/demo.mp4",

    sections: [
      {
        title: "El proyecto",
        content:
          "TinderJob analiza el mercado laboral tecnológico en España mediante extracción, procesamiento y análisis de datos.",
      },
      {
        title: "Una decisión basada en datos",
        content:
          "Durante el proyecto detectamos que la fuente inicialmente prevista presentaba un fuerte sesgo geográfico. El equipo decidió pivotar hacia una estrategia basada en múltiples fuentes de datos.",
      },
      {
        title: "TinderMatch",
        content:
          "El proyecto incorpora un sistema de matching que compara las habilidades extraídas de un CV con las ofertas disponibles y muestra el porcentaje de compatibilidad.",
      },
    ],
  },

  /*{
    slug: "p-a-w-l-e",
    title: "P.A.W.L-E",
    category: "Python · AI",
    description:
      "Proyecto experimental de inteligencia artificial y programación aplicado al desarrollo de un asistente robótico.",
    technologies: ["Python", "AI"],
    github:
      "https://github.com/HelenDiMo/P.A.W.L-e---Robot-Paseador-de-Perros.git",
  },*/
];
