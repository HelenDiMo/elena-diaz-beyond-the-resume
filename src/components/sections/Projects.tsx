import Link from "next/link";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Proyectos
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Lo que estoy construyendo
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Proyectos en los que aplico programación, análisis de datos e
            inteligencia artificial para convertir conocimientos en soluciones
            reales.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="flex flex-col rounded-xl border p-6"
            >
              <p className="text-sm font-medium uppercase tracking-wide">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

              <p className="mt-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border px-3 py-1 text-sm"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-6 font-medium underline underline-offset-4"
              >
                Ver proyecto →
              </Link>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm font-medium underline underline-offset-4"
                >
                  Ver en GitHub ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
