export type ProjectGalleryItem = {
  /*GALERIA DE IMAGENES */
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type ProjectTheme = {
  accent: string;
  accentSoft: string;
  background: string;
  border: string;
};

export type ProjectSection = {
  title: string;
  content?: string[];
  items?: string[];
  steps?: {
    number: string;
    title: string;
  }[];
}[];

export type ProjectStep = {
  number: string;
  title: string;
};

export type ProjectInsight = {
  number: string;
  title: string;
  description: string;
};

export type ProjectGovernance = {
  title: string;
  content: string;
  limitations: {
    title: string;
    description: string;
  }[];
};

export type ProjectRole = {
  /* PROY. GRUPAL - ROL ASUMIDO EN EL PROYECTO */
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  theme?: ProjectTheme;

  technologies: string[];
  tagline?: string;
  maintext?: string[];

  image?: string;
  heroImage?: string;
  gallery?: ProjectGalleryItem[];
  video?: string;

  github?: string;

  context?: string;

  role?: ProjectRole;

  sections?: ProjectSection[];

  steps?: ProjectStep[];

  insights?: ProjectInsight[];

  governance?: ProjectGovernance;
};
