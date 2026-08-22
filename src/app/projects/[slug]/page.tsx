import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
import ProjectGallery from "@/components/projects/ProjectGallery";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const galleryImages = [
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
  ];

  return (
    <main className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Navigation */}
        <Link
          href="/#projects"
          className="text-sm font-medium underline underline-offset-4"
        >
          ← Volver a proyectos
        </Link>

        {/* Hero */}
        <section className="mt-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            {project.category}
          </p>
          <p className="mt-3 text-1 font-italic text-neutral-500 dark:text-neutral-400">
            Proyecto individual · Bootcamp IA
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-3 text-xl font-medium text-neutral-500 dark:text-neutral-400">
            Operación Normandía
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            Proyecto individual de inteligencia de datos que transforma
            registros históricos de operaciones aéreas de la Segunda Guerra
            Mundial en una herramienta de análisis geoespacial aplicada a la
            investigación arqueológica.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed">
            El dashboard permite explorar patrones de bombardeo, localizar zonas
            de alta concentración de actividad y analizar la evolución de las
            operaciones antes y durante el Día D.
          </p>

          <Image
            src={project.heroImage || project.image}
            alt={`${project.title} — dashboard`}
            width={1200}
            height={675}
            className="mt-10 aspect-video w-full rounded-2xl object-cover"
            priority
          />
        </section>

        {/* The Project */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            El proyecto
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Inteligencia de datos aplicada a la arqueología
          </h2>

          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed">
            <p>
              Archaios Data Intelligence nace como un proyecto individual
              centrado en transformar datos históricos de operaciones aéreas
              durante la Segunda Guerra Mundial en información útil para la
              investigación arqueológica.
            </p>

            <p>
              El análisis utiliza registros del repositorio THOR (Theater
              History of Operations Reports) para estudiar la distribución
              temporal y geográfica de las operaciones aliadas entre 1943 y el 6
              de junio de 1944.
            </p>

            <p>
              El reto consistía en convertir estos registros históricos en una
              herramienta interactiva capaz de revelar patrones y ayudar a
              plantear una posible priorización de zonas de interés
              arqueológico.
            </p>
          </div>
        </section>

        {/* From Data to Insight */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Del dato al análisis
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Del dato bruto a una herramienta de análisis
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed">
            Trabajé en todo el proceso, desde la exploración y preparación de
            los datos hasta el modelado, análisis y desarrollo del dashboard
            interactivo.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "Exploración"],
              ["02", "Limpieza"],
              ["03", "Análisis"],
              ["04", "Modelado"],
              ["05", "Visualización"],
              ["06", "Insights"],
            ].map(([number, title]) => (
              <div key={number} className="rounded-2xl border p-5">
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {number}
                </span>

                <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* The Dashboard */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            El dashboard
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Una visión interactiva de las operaciones
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed">
            El dashboard combina indicadores, filtros interactivos y
            visualizaciones geográficas para explorar la actividad aérea desde
            diferentes perspectivas temporales y estratégicas.
          </p>

          {/* Demo */}
          <div className="mt-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Demo interactiva
            </p>

            <div className="mt-4 overflow-hidden rounded-2xl border">
              <video
                className="h-auto w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source
                  src="/projects/archaios/demo_dashboard.mp4"
                  type="video/mp4"
                />
                Tu navegador no soporta la reproducción de vídeo.
              </video>
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              Vistas del dashboard
            </p>

            <div className="mt-6">
              <ProjectGallery images={galleryImages} />
            </div>
          </div>
        </section>

        {/* Key Insights */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Principales conclusiones
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Lo que revelan los datos
          </h2>

          <div className="mt-10 space-y-6">
            <article className="rounded-2xl border p-6 md:p-8">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                01
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                La actividad no se concentra únicamente en la línea de costa
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                El análisis pone de manifiesto la importancia de objetivos
                interiores vinculados a infraestructuras y redes de transporte.
              </p>
            </article>

            <article className="rounded-2xl border p-6 md:p-8">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                02
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                Los nodos logísticos adquieren especial relevancia antes del Día
                D
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                La concentración de operaciones durante los días previos ayuda a
                identificar infraestructuras estratégicas dentro del teatro de
                operaciones.
              </p>
            </article>

            <article className="rounded-2xl border p-6 md:p-8">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                03
              </span>

              <h3 className="mt-3 text-xl font-semibold">
                La densidad histórica puede orientar la priorización
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                Los patrones espaciales obtenidos pueden utilizarse como punto
                de partida para plantear zonas de interés y orientar futuras
                investigaciones arqueológicas.
              </p>
            </article>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Tecnologías
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
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
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border px-4 py-2 text-sm"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Data Governance */}
        <section className="mt-24 border-t pt-16">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Gobernanza del dato
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Entender también las limitaciones del dato
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-relaxed">
            Los registros históricos utilizados presentan limitaciones de
            representatividad, cobertura geográfica, etiquetado y calidad
            temporal. Por ello, los resultados deben interpretarse como una
            herramienta de exploración y priorización, no como una
            representación completa de la actividad histórica.
          </p>

          <details className="mt-8 max-w-3xl rounded-2xl border p-6">
            <summary className="cursor-pointer font-semibold">
              Ver limitaciones del análisis
            </summary>

            <div className="mt-6 space-y-5 leading-relaxed text-neutral-600 dark:text-neutral-400">
              <p>
                <strong className="text-foreground">
                  Sesgo de representatividad:
                </strong>{" "}
                solo se incluyen misiones documentadas, por lo que algunas
                operaciones pueden no estar reflejadas.
              </p>

              <p>
                <strong className="text-foreground">Sesgo geográfico:</strong>{" "}
                la ausencia de registros en una zona no implica necesariamente
                ausencia de actividad.
              </p>

              <p>
                <strong className="text-foreground">
                  Sesgo de etiquetado:
                </strong>{" "}
                algunos objetivos aparecen como “Unknown” o “Unidentified”.
              </p>

              <p>
                <strong className="text-foreground">Sesgo temporal:</strong> la
                documentación de 1944 puede ser más exhaustiva que la de
                periodos anteriores.
              </p>
            </div>
          </details>
        </section>

        {/* GitHub */}
        <section className="mt-24 border-t pt-16">
          <div className="flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em]">
                Explora el proyecto
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Datos, EDA, documentación y Power BI
              </h2>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-medium underline underline-offset-4"
              >
                Ver repositorio en GitHub ↗
              </a>
            )}
          </div>
        </section>

        {/* Back */}
        <div className="mt-16 border-t pt-8">
          <Link
            href="/#projects"
            className="text-sm font-medium underline underline-offset-4"
          >
            ← Volver a proyectos
          </Link>
        </div>
      </div>
    </main>
  );
}
