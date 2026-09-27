import type { Project } from "@/types/project";

export const tinderjob: Project = {
  slug: "tinderjob",
  title: "TinderJob",
  category: "Data · Python · Automatización · Web Scraping · Streamlit",
  context: "Bootcamp · Proyecto de equipo",
  tagline: "El Match Perfecto del Talento Tech",

  /* DESCRIPCIÓN PARA LA TARJETA */

  description:
    "Plataforma analítica y motor de recomendación sobre el mercado tech en España. Integra web scraping sobre Tecnoempleo (+1.100 ofertas), análisis estadístico de salarios (sesgo MNAR) y un algoritmo de matching perfil-vacante.",

  /* DESCRIPCIÓN DE LA PAG. INDIVIDUAL */

  maintext: [
    "Plataforma analítica integral diseñada para monitorizar la demanda real de empleo tecnológico en España, procesando y homogeneizando más de 1.100 ofertas de trabajo extraídas mediante web scraping junto a fuentes internacionales de referencia.",
    "El proyecto resuelve la brecha de información entre talento y vacantes: combina pipelines automatizados de datos, auditoría estadística de sesgos salariales (Missing Not At Random) y un motor de recomendación interactivo en Streamlit que calcula la afinidad técnica entre el CV del candidato y las ofertas activas.",
  ],

  heroImage: "/projects/tinderjob/hero.png",

  role: {
    title: "Scrum Master · QA Lead & Data Pipeline Support",
    description:
      "Liderazgo ágil del equipo mediante ceremonias Scrum, supervisión del control de calidad del dato (validación de esquemas y consistencia de pipelines) y preparación de la presentación ejecutiva final.",
  },

  sections: [
    {
      title: "Del problema de negocio a una solución basada en datos",
      content: [
        "Desarrollado para el caso de uso corporativo de DataTalent Solutions S.L., con la misión de sustentar con evidencia cuantitativa el diseño de programas de formación y reskilling profesional.",
        "El objetivo principal fue responder empíricamente a tres preguntas clave: qué tecnologías concentran la demanda real, cómo impacta la experiencia en la retribución y qué porcentaje de vacantes ofrece trabajo remoto según el tamaño corporativo.",
      ],
    },
    {
      title: "Pipeline de Ingesta, Calidad y Depuración Estadística",
      content: [
        "Construcción de un pipeline modular y reproducible en Python enfocado en la extracción directa de portales locales y la homogeneización de variables heterogéneas.",
      ],
      items: [
        "Web Scraping automatizado: Extracción sistemática con BeautifulSoup y Requests sobre Tecnoempleo, recopilando 1.148 ofertas activas distribuidas en 24 perfiles profesionales tech.",
        "Tratamiento de outliers e IQR: Normalización de bandas salariales anuales y eliminación de valores atípicos extremos mediante el método del rango intercuartílico (IQR 1.5).",
        "Auditoría de datos ausentes (MNAR): Identificación de que solo el 19,3% de las ofertas publican salario, modelando el patrón de omisión no aleatoria (Missing Not At Random) para no falsear los estadísticos.",
        "Extracción de entidades técnicas: Procesamiento y búsqueda por patrones en descripciones no estructuradas para aislar menciones a más de 30 lenguajes, frameworks y bases de datos.",
      ],
      steps: [
        { number: "01", title: "Scraping & Ingesta" },
        { number: "02", title: "Limpieza & IQR" },
        { number: "03", title: "Auditoría MNAR" },
        { number: "04", title: "EDA & Correlación" },
        { number: "05", title: "Motor de Matching" },
        { number: "06", title: "App en Streamlit" },
      ],
    },
    {
      title: "Pivote estratégico: Decisión guiada por la calidad del dato",
      content: [
        "Durante la fase exploratoria detectamos que el dataset inicial previsto (ofertas de LinkedIn) presentaba un sesgo territorial crítico: la totalidad de los registros correspondían al mercado estadounidense, invalidando cualquier conclusión sobre España.",
        "En lugar de forzar conclusiones espurias, el equipo pivotó la arquitectura: se integró el scraping directo de Tecnoempleo con el Stack Overflow Developer Survey y el repositorio Data Science Job Salaries.",
        "Este cambio garantizó rigor metodológico, permitiendo contrastar la realidad del tejido productivo español frente a los estándares de la industria global.",
      ],
    },

    {
      title: "Modelado Estadístico y Probabilidad Condicional",
      content: [
        "La exploración analítica no se limitó a frecuencias descriptivas: se implementaron modelos de probabilidad condicional para extraer patrones sobre el mercado laboral.",
      ],
      items: [
        "Probabilidad de salario alto según seniority: Cálculo empírico de la probabilidad acumulada P(Salario > 45K | Nivel de experiencia).",
        "Acceso a teletrabajo según estructura: Análisis condicional P(Remoto 100% | Tamaño de empresa), identificando mayor flexibilidad en scale-ups frente a corporaciones tradicionales.",
        "Matrices de coocurrencia tecnológica: Identificación de sinergias habituales en las ofertas (ej. demanda combinada Python-SQL-Cloud frente al ecosistema Java-Spring).",
      ],
    },

    {
      title: "TinderMatch: Motor de Recomendación Candidato-Vacante",
      content: [
        "Módulo interactivo que transforma los insights del mercado en una herramienta de recomendación personalizada para el candidato.",
      ],
      items: [
        "Parsing y lectura de CV: Extracción y escaneo de texto desde archivos PDF o texto plano para identificar competencias coincidentes con el diccionario tecnológico.",
        "Algoritmo de scoring de compatibilidad: Cálculo de coincidencia porcentual entre las habilidades identificadas en el perfil y los requisitos técnicos de cada vacante.",
        "Análisis de brecha (Gap Analysis): Generación de vacantes recomendadas ordenadas por afinidad, mostrando competencias cubiertas y tecnologías sugeridas para alcanzar el perfil óptimo.",
      ],

      image: {
        src: "/projects/tinderjob/tindermatch.png",
        alt: "Interfaz de TinderMatch mostrando ofertas de empleo ordenadas por compatibilidad",
        caption:
          "TinderMatch convierte el análisis del mercado laboral en una herramienta de recomendación personalizada.",
      },
    },
    {
      title: "Despliegue y Producto Final",
      content: [
        "El producto se consolidó en una aplicación web interactiva desarrollada en Streamlit y desplegada en la nube, con visualizaciones dinámicas en Plotly y filtros multidimensionales por provincia, modalidad, salario y rol.",
      ],
    },
  ],

  /* GOVERNANCE DEL DATO */

  governance: {
    title: "Gobernanza y Auditoría de Calidad del Dato",
    content:
      "Toda decisión analítica responsable exige explicitar los márgenes de representatividad y las asimetrías detectadas en las fuentes utilizadas:",
    limitations: [
      {
        title: "Sesgo de fuente y selección (Tecnoempleo)",
        description:
          "El scraper monitorizó 24 perfiles específicos; las ofertas de perfiles técnicos no catalogados o procedentes de consultoría cerrada no están representadas.",
      },
      {
        title: "Asimetría en transparencia salarial (Patrón MNAR)",
        description:
          "El 80,7% de las ofertas omite la remuneración. Al no ser una omisión aleatoria, los salarios analizados tienden a reflejar puestos con mayor urgencia de contratación o mejores condiciones.",
      },
      {
        title: "Sesgo geográfico en datasets secundarios",
        description:
          "El dataset Data Science Job Salaries cuenta con una submuestra reducida en el territorio español, utilizándose únicamente como contraste comparativo global.",
      },
      {
        title: "Correlación frente a Causalidad",
        description:
          "Las relaciones identificadas entre competencias y bandas retributivas son correlacionales y responden a la coyuntura del mercado en la fecha de extracción.",
      },
    ],
  },

  insights: [
    {
      number: "01",
      title: "Python lidera la demanda tecnológica (14,6% de cuota)",
      description:
        "Python encabeza las menciones técnicas figurando en 168 de las 1.148 ofertas analizadas, seguido de cerca por Java (159) y SQL (96), conformando el núcleo de mayor empleabilidad.",
    },
    {
      number: "02",
      title: "Opacidad retributiva: Solo el 19,3% publica rango salarial",
      description:
        "Únicamente 221 vacantes de 1.148 transparentan la retribución bruta. Las empresas medianas de producto muestran una propensión un 35% mayor a publicar bandas que las consultoras.",
    },
    {
      number: "03",
      title: "Impacto del sesgo MNAR en la toma de decisiones",
      description:
        "El análisis estadístico demuestra que ignorar los salarios no reportados distorsionaría las expectativas del profesional al alza, validando la importancia de auditar la calidad del dato antes de emitir recomendaciones.",
    },
  ],

  video: "https://www.youtube.com/embed/Mosb8xkMNVI",

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
    {
      src: "/projects/tinderjob/probabilidad-condicional.png",
      alt: "Análisis de probabilidad condicional del mercado laboral tecnológico",
      title: "Probabilidad condicional",
      description:
        "Análisis de diferentes escenarios del mercado laboral mediante probabilidades condicionales, incluyendo salario alto según nivel, acceso al trabajo remoto según tamaño de empresa y flexibilidad según localización.",
    },
    {
      src: "/projects/tinderjob/sesgos.png",
      alt: "Análisis de sesgos en los datos del mercado laboral tecnológico",
      title: "Sesgos y calidad del dato",
      description:
        "Visualización de los principales sesgos identificados durante el análisis, incluyendo datos salariales MNAR, sesgo de selección y limitaciones de cobertura de las fuentes.",
    },
  ],

  theme: {
    accent: "#CB2f43" /* Título de la foto + FLECHITAS*/,
    accentSoft: "#007880" /* NO SE QUE ES*/,
    background: "#CA92A8" /* BG del circulito de la flecha */,
    border: "#EB5324" /* Color de los puntitos de "siguiente" */,
  },

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Plotly",
    "Web Scraping",
    "BeautifulSoup",
    "Text Parsing / Regex",
    "GitHub Actions",
  ],

  github: "https://github.com/HelenDiMo/TinderJob.git",

  image: "/projects/tinderjob/tinderjob-card.png",

  demoUrl: "https://tinderjob-bootcamp.streamlit.app/",
};
