import type { Project } from "@/types/project";

export const exoplanetprofiler: Project = {
  slug: "exoplanet-profiler",
  title: "Exoplanet Profiler",
  category: "Machine Learning · Python · Clustering · Scikit-Learn",
  context: "Bootcamp · Proyecto en equipo",
  tagline: "Taxonomía y Clustering No Supervisado de Cuerpos Celestes",

  /* DESCRIPCIÓN PARA LA TARJETA DEL PORTFOLIO */
  description:
    "Pipeline de Machine Learning no supervisado para la taxonomía de exoplanetas confirmados (NASA Exoplanet Archive). Evaluación comparativa entre K-Means, DBSCAN y Clustering Jerárquico, optimizados mediante Método del Codo, Silhouette Score y pruebas de estabilidad.",

  /*DESCRIPCIÓN DE LA PAG. INDIVIDUAL*/

  maintext: [
    "Exoplanet Profiler es un proyecto de Machine Learning no supervisado desarrollado en equipo para descubrir patrones intrínsecos, taxonomías astronómicas y agrupaciones físicas en los catálogos de exoplanetas confirmados de la NASA.",
    "A través de un riguroso pipeline científico en Python, el proyecto aborda el reto de analizar distribuciones astrofísicas multivariantes con alta presencia de asimetrías y escalas dispares, contrastando algoritmos particionales, basados en densidad y jerárquicos para identificar familias planetarias coherentes (Júpiteres calientes, Tierras cálidas, Supertierras y Gigantes helados).",
  ],

  heroImage: "/projects/exoplanet-profiler/hero.png",

  /* MI ROL EN EL PROYECTO */
  role: {
    title: "Lead Clustering & Model Evaluation · Equipo de ML",
    description:
      "Liderazgo en el entrenamiento, optimización y benchmarking de modelos de clustering (K-Means, DBSCAN y Jerárquico), cálculo y visualización de métricas de rendimiento (Método del Codo, WCSS y Silhouette Score), y ejecución de pruebas de robustez y estabilidad con distintas semillas aleatorias y remuestreos.",
  },

  /*SECCIONES DEL PROYECTO*/

  sections: [
    {
      title: "El Reto Astrofísico y la Necesidad de Modelado No Supervisado",
      content: [
        "El catálogo de la NASA contiene miles de exoplanetas caracterizados por relaciones físicas multivariantes y no lineales (período orbital, masa planetaria, radio, temperatura de equilibrio y densidad estelar).",
        "El objetivo del equipo consistió en prescindir de clasificaciones taxonómicas previas y permitir que algoritmos no supervisados agruparan de forma natural los cuerpos celestes en función de su firma física, aislando arquetipos planetarios y anomalías orbitales.",
      ],
    },
    {
      title: "Entrenamiento, Benchmarking y Métricas de Evaluación",
      content: [
        "Como responsable del modelado, implementé un protocolo de experimentación cuantitativo para determinar la partición óptima y contrastar diferentes paradigmas algorítmicos en Scikit-Learn.",
      ],
      items: [
        "Benchmarking de algoritmos: Entrenamiento y contraste sistemático entre K-Means (particional), DBSCAN (basado en densidad para captura de formas complejas) y Clustering Jerárquico Aglomerativo.",
        "Optimización de hiperparámetros y K óptimo: Análisis de convergencia mediante el Método del Codo (WCSS / Inercia) y cálculo riguroso del Coeficiente de Silhouette para cada partición.",
        "Pruebas de estabilidad y robustez: Validación de la consistencia de los clústeres mediante iteraciones con múltiples semillas aleatorias (random_state) y remuestreo sobre subconjuntos de datos.",
        "Tratamiento y detección de outliers: Ajuste de parámetros de vecindad (eps y min_samples) en DBSCAN para discriminar planetas en configuraciones extremas frente al ruido de fondo.",
      ],
      steps: [
        { number: "01", title: "Ingesta & Preprocesado" },
        { number: "02", title: "Escalado Robusto" },
        { number: "03", title: "Método del Codo / WCSS" },
        { number: "04", title: "Silhouette Score" },
        { number: "05", title: "Pruebas de Estabilidad" },
        { number: "06", title: "Validación Física" },
      ],
    },
    {
      title: "Detección de Arquetipos y Clasificación de Familias Planetarias",
      content: [
        "La segmentación algorítmica aisló con claridad las fronteras físicas de las poblaciones planetarias más representativas observadas en la astrofísica moderna.",
      ],
      items: [
        "Júpiteres Calientes (Hot Jupiters): Cúmulos densos caracterizados por masa muy elevada, radios expandidos y órbitas ultracortas de pocos días terrestres.",
        "Subneptunos y Supertierras: Población dominante en el catálogo que refleja el valle de radio de exoplanetas (Fulton gap) entre mundos rocosos y gaseosos.",
        "Tierras habitables potenciales: Agrupamiento minoritario situado en rangos de temperatura de equilibrio y flujo estelar compatibles con la zona de habitabilidad.",
      ],
    },
    {
      title: "Conclusiones y Validación Científica",
      content: [
        "El proyecto demostró cómo el aprendizaje no supervisado valida de manera empírica las teorías de migración planetaria y formación estelar sin requerir etiquetas previas, garantizando clústeres reproducibles y matemáticamente estables.",
      ],
    },
  ],

  /* GOVERNANCE DEL DATO */
  governance: {
    title: "Gobernanza del Dato y Limitaciones Instrumentales",
    content:
      "Los datos astronómicos recopilados por telescopios espaciales y terrestres presentan sesgos de detección inherentes al método observacional:",
    limitations: [
      {
        title: "Sesgo observacional (Método de tránsito y velocidad radial)",
        description:
          "Los planetas de gran tamaño y períodos orbitales cortos son desproporcionadamente más fáciles de detectar que los planetas similares a la Tierra con órbitas largas.",
      },
      {
        title: "Disparidad en la completitud de variables",
        description:
          "No todos los exoplanetas confirmados cuentan con mediciones directas simultáneas de masa y radio; algunos parámetros son derivados o presentan márgenes de error astronómico.",
      },
      {
        title: "Sensibilidad de DBSCAN a la densidad variable",
        description:
          "Debido a la dispersión no uniforme de los datos en el espacio multidimensional, los hiperparámetros de distancia (eps) y densidad mínima (min_samples) requieren calibración cuidadosa.",
      },
    ],
  },

  insights: [
    {
      number: "01",
      title: "Separación nítida de clústeres mediante Silhouette Score",
      description:
        "La evaluación cuantitativa confirmó que una partición de clusters bien calibrada optimiza la cohesión intra-cluster y maximiza la distancia inter-cluster frente a ruido de fondo.",
    },
    {
      number: "02",
      title: "Validación del 'Valle de Radios' en la distribución",
      description:
        "Los modelos reflejan de forma natural la marcada escasez de planetas con radios intermedios entre 1.5 y 2.0 radios terrestres predicha por los modelos teóricos de fotoevaporación.",
    },
    {
      number: "03",
      title: "Estabilidad algorítmica probada ante remuestreo",
      description:
        "Las pruebas con distintas semillas y remuestreos confirmaron que los centroides y las fronteras de los clústeres son estructurales del dataset y no artefactos del algoritmo.",
    },
  ],

  video: "",

  /*gallery: [
    {
      src: "/projects/exoplanet/clustering-scatter.png",
      alt: "Gráfico de dispersión multivariante mostrando los clusters de exoplanetas",
      title: "Segmentación de familias planetarias",
      description:
        "Representación de los clústeres generados según período orbital, radio y masa planetaria tras transformación logarítmica.",
    },
    {
      src: "/projects/exoplanet/silhouette-analysis.png",
      alt: "Análisis del coeficiente Silhouette para selección de k óptimo",
      title: "Evaluación de Silhouette Score",
      description:
        "Evaluación de la cohesión y separación de clusters para determinar la partición algorítmica óptima.",
    },
  ],*/

  theme: {
    accent: "#6366F1",
    accentSoft: "#A5B4FC",
    background: "#0F172A",
    border: "#4F46E5",
  },

  technologies: [
    "Python",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "K-Means",
    "DBSCAN",
    "Hierarchical Clustering",
    "Silhouette Score",
    "Matplotlib / Seaborn",
    "Robustness Testing",
  ],

  github: "https://github.com/HelenDiMo/exoplanet-profiler.git",
  image: "/projects/exoplanet-profiler/exoplanet-card.png",
};
