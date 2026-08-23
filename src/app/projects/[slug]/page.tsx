import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import ProjectGallery from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";

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

  const heroImage = project.heroImage ?? project.image;

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

          {project.context && (
            <p className="mt-3 italic text-neutral-500 dark:text-neutral-400">
              {project.context}
            </p>
          )}

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {project.title}
          </h1>

          {project.tagline && (
            <p className="mt-3 text-xl font-medium text-neutral-500 dark:text-neutral-400">
              {project.tagline}
            </p>
          )}

          {/* Main text */}
          {project.maintext && project.maintext.length > 0 && (
            <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed">
              {project.maintext.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {heroImage && (
            <Image
              src={heroImage}
              alt={project.title}
              width={1200}
              height={675}
              className="mt-8 aspect-video w-full rounded-xl object-cover"
            />
          )}
        </section>

        {/* Role */}
        {project.role && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Mi rol
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {project.role.title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed">
              {project.role.description}
            </p>
          </section>
        )}

        {/* Project Sections */}
        {project.sections && project.sections.length > 0 && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              El proyecto
            </p>

            <div className="mt-10 space-y-16">
              {project.sections.map((section, index) => (
                <article key={`${section.title}-${index}`}>
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    {section.title}
                  </h2>

                  {/* Section content */}
                  {section.content && section.content.length > 0 && (
                    <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed">
                      {section.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {/* Section steps */}
                  {section.steps && section.steps.length > 0 && (
                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {section.steps.map((step) => (
                        <div
                          key={step.number}
                          className="rounded-2xl border border-teal/30 bg-graphite/40 p-5"
                        >
                          <span className="text-sm font-medium text-white/40">
                            {step.number}
                          </span>

                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section items */}
                  {section.items && section.items.length > 0 && (
                    <ul className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed">
                      {section.items.map((item, itemIndex) => (
                        <li key={`${item}-${itemIndex}`}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Video */}
        {project.video && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Demo
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Explora el proyecto
            </h2>

            <div className="mt-10 overflow-hidden rounded-2xl border">
              <video
                className="h-auto w-full"
                controls
                playsInline
                preload="metadata"
              >
                <source src={project.video} type="video/mp4" />
                Tu navegador no soporta la reproducción de vídeo.
              </video>
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Galería
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Vistas del proyecto
            </h2>

            <div className="mt-10">
              <ProjectGallery images={project.gallery} theme={project.theme} />
            </div>
          </section>
        )}

        {/* Insights */}
        {project.insights && project.insights.length > 0 && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Principales conclusiones
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Lo que revelan los datos
            </h2>

            <div className="mt-10 space-y-6">
              {project.insights.map((insight) => (
                <article
                  key={insight.number}
                  className="rounded-2xl border p-6 md:p-8"
                >
                  <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                    {insight.number}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    {insight.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {insight.description}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Governance */}
        {project.governance && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Gobernanza del dato
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {project.governance.title}
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-relaxed">
              {project.governance.content}
            </p>

            {/* Limitations */}
            {project.governance.limitations &&
              project.governance.limitations.length > 0 && (
                <details className="mt-8 max-w-3xl rounded-2xl border p-6">
                  <summary className="cursor-pointer font-semibold">
                    Ver limitaciones del análisis
                  </summary>

                  <div className="mt-6 space-y-5 leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {project.governance.limitations.map((limitation) => (
                      <p key={limitation.title}>
                        <strong className="text-foreground">
                          {limitation.title}:
                        </strong>{" "}
                        {limitation.description}
                      </p>
                    ))}
                  </div>
                </details>
              )}
          </section>
        )}

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <section className="mt-24 border-t pt-16">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Tecnologías
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* GitHub */}
        {project.github && (
          <section className="mt-24 border-t pt-16">
            <div className="flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em]">
                  Explora el proyecto
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Código y documentación
                </h2>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 font-medium underline underline-offset-4"
              >
                Ver repositorio en GitHub ↗
              </a>
            </div>
          </section>
        )}

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