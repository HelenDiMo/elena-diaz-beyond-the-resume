import type { Project } from "@/types/project";

export const tinderjob: Project = {
  slug: "tinderjob",
  title: "TinderJob",
  category: "Data · Python · Automatización",
  context: "Bootcamp · Proyecto de equipo",
  tagline: "El Match Perfecto del Talento Tech",

  /* DESCRIPCIÓN PARA LA TARJETA */

  description:
    "Proyecto de analítica avanzada y automatización para analizar el mercado laboral tecnológico en España. A partir de múltiples fuentes de datos, el proyecto combina web scraping, procesamiento y análisis estadístico para identificar las competencias más demandadas, tendencias salariales y patrones del mercado, incorporando además un sistema de matching que conecta las habilidades de un candidato con las ofertas disponibles.",

  /* DESCRIPCIÓN DE LA PAG. INDIVIDUAL */

  maintext: [
    "TinderJob nace como una solución de analítica avanzada para analizar el mercado laboral tecnológico en España y transformar datos dispersos de empleo en información útil para la toma de decisiones.",
    "El proyecto combina extracción automatizada de ofertas, análisis estadístico, detección de sesgos y un sistema de matching capaz de comparar las habilidades de un candidato con las demandas reales del mercado.",
  ],

  heroImage: "/projects/tinderjob/hero.png",

  role: {
    title: "Scrum Master · Team Support · QA & Presentation Lead",
    description:
      "Coordinación y seguimiento del equipo, apoyo durante el desarrollo, revisión de calidad y preparación de la presentación final.",
  },

  sections: [
    {
      title: "Del problema de negocio a una solución basada en datos",
      content: [
        "El proyecto fue desarrollado para DataTalent Solutions S.L. (empresa ficticia), con el objetivo de obtener evidencia empírica sobre las habilidades más demandadas, la distribución salarial, los perfiles tecnológicos con mayor presencia y las relaciones entre experiencia, competencias y salario.",
        "El reto no consistía únicamente en analizar ofertas de empleo, sino en construir un sistema reproducible que permitiera transformar diferentes fuentes de datos en información útil para orientar programas de formación y reskilling tecnológico.",
      ],
    },
    {
      title: "Extracción, limpieza y preparación de datos",
      content: [
        "El equipo construyó un pipeline de datos que combina diferentes fuentes para analizar el mercado tecnológico desde perspectivas complementarias.",
        "El proceso incluye extracción automatizada mediante web scraping sobre Tecnoempleo, limpieza y normalización con Pandas, tratamiento de valores nulos y duplicados, transformación de variables salariales y detección de valores atípicos mediante el método del rango intercuartílico.",
      ],
      steps: [
        { number: "01", title: "Extracción" },
        { number: "02", title: "Limpieza" },
        { number: "03", title: "Normalización" },
        { number: "04", title: "Análisis" },
        { number: "05", title: "Modelado" },
        { number: "06", title: "Visualización" },
      ],
    },
    {
      title: "Una decisión basada en datos",
      content: [
        "Durante las primeras fases del proyecto detectamos que el dataset inicialmente previsto, basado en ofertas de LinkedIn, presentaba un fuerte sesgo de geolocalización: los registros disponibles pertenecían a Estados Unidos y no representaban adecuadamente el mercado español que necesitábamos estudiar.",
        "En lugar de continuar trabajando con una fuente que no respondía al objetivo de negocio, el equipo decidió pivotar y combinar fuentes complementarias: Stack Overflow Developer Survey, Data Science Job Salaries y datos extraídos directamente de Tecnoempleo.",
        "Esta decisión permitió construir un análisis más alineado con el contexto español y, al mismo tiempo, incorporar una dimensión específica de calidad y sesgo de los datos.",
      ],
    },

    {
      title: "Análisis del mercado tecnológico",
      content: [
        "Los notebooks desarrollados permiten estudiar la demanda de perfiles y competencias técnicas, la distribución salarial, las modalidades de trabajo y las relaciones entre diferentes variables del mercado laboral.",
        "El análisis incluye estadística descriptiva, correlaciones, agrupaciones, tablas dinámicas y modelos de probabilidad condicional para explorar escenarios como la probabilidad de alcanzar salarios elevados según el nivel de experiencia o el acceso al trabajo remoto según el tamaño de la empresa.",
      ],
    },

    {
      title: "TinderMatch",

      content: [
        "El proyecto incorpora un motor de matching que transforma el análisis del mercado en una herramienta orientada directamente al candidato.",

        "A partir de un CV en PDF o texto plano, el sistema identifica tecnologías y competencias técnicas y las compara con las habilidades demandadas en las ofertas recopiladas.",

        "El resultado muestra las vacantes ordenadas según porcentaje de compatibilidad, las habilidades que ya posee el candidato, las competencias que podría desarrollar y un enlace directo a la oferta original.",
      ],

      image: {
        src: "/projects/tinderjob/tindermatch.png",
        alt: "Interfaz de TinderMatch mostrando ofertas de empleo ordenadas por compatibilidad",
        caption:
          "TinderMatch convierte el análisis del mercado laboral en una herramienta de recomendación personalizada.",
      },
    },
    {
      title: "Resultado",
      content: [
        "El resultado es una aplicación desarrollada con Streamlit que integra análisis estadístico, visualizaciones interactivas y un sistema de recomendación de ofertas en una única interfaz.",
        "La herramienta permite explorar el mercado tecnológico español, analizar salarios y modalidades de trabajo, estudiar sesgos y utilizar TinderMatch para identificar oportunidades laborales en función del perfil de cada candidato.",
      ],
    },
  ],

  /* GOVERNANCE DEL DATO */

  governance: {
    title: "Tomar decisiones también implica cuestionar los datos",

    content:
      "El proyecto incorpora un análisis específico de calidad y sesgos para evitar interpretar los resultados como una representación completa del mercado laboral. Las diferentes fuentes presentan limitaciones de cobertura, selección y disponibilidad de información que pueden afectar a las conclusiones.",

    limitations: [
      {
        title: "Sesgo de fuente",
        description:
          "Las diferentes fuentes utilizadas no representan de la misma manera el mercado laboral tecnológico y responden a poblaciones y contextos distintos.",
      },
      {
        title: "Sesgo geográfico",
        description:
          "El dataset de Data Science Job Salaries presenta una representación limitada de España frente al conjunto global de registros.",
      },
      {
        title: "Datos salariales incompletos",
        description:
          "Una parte significativa de las ofertas de Tecnoempleo no publica información salarial, lo que introduce un patrón de datos ausentes que no puede considerarse completamente aleatorio.",
      },
      {
        title: "Sesgo de selección",
        description:
          "El scraper utiliza un conjunto predefinido de 24 perfiles profesionales, por lo que los resultados dependen de los términos de búsqueda seleccionados.",
      },
      {
        title: "Interpretación de los resultados",
        description:
          "Las correlaciones y patrones observados permiten identificar relaciones y tendencias, pero no deben interpretarse automáticamente como relaciones causales.",
      },
    ],
  },

  insights: [
    {
      number: "01",
      title: "Python lidera la demanda tecnológica analizada",
      description:
        "Python aparece en 168 de las 1.148 ofertas analizadas, seguido de Java con 159 y SQL con 96, situándose entre las competencias técnicas con mayor presencia en la muestra.",
    },
    {
      number: "02",
      title:
        "El salario publicado representa solo una parte del mercado observable",
      description:
        "Solo 221 de las 1.148 ofertas analizadas incluyen información salarial, lo que supone el 19,3 % de la muestra y obliga a interpretar cualquier análisis salarial teniendo en cuenta este patrón de ausencia.",
    },
    {
      number: "03",
      title: "Los datos ausentes también contienen información",
      description:
        "El análisis MNAR muestra que la ausencia de información salarial no se distribuye de forma completamente aleatoria, por lo que ignorar los valores ocultos puede introducir sesgos en las conclusiones sobre el mercado.",
    },
  ],

  video: "/projects/tinderjob/demo_tinderjob.mp4",

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
    "GitHub Actions",
  ],
  github: "https://github.com/HelenDiMo/TinderJob.git",
  image: "/projects/tinderjob/logo.png",
  demoUrl: "https://tinderjob-bootcamp.streamlit.app/",
};
