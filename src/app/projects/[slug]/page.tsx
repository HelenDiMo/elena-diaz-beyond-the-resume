import Link from "next/link";
import { notFound } from "next/navigation";
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

  return (
    <main className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          href="/#projects"
          className="text-sm font-medium underline underline-offset-4"
        >
          ← Volver a proyectos
        </Link>

        <div className="mt-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            {project.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            {project.description}
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Tecnologías</h2>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {technology}
                </li>
              ))}
            </ul>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block font-medium underline underline-offset-4"
              >
                Ver código en GitHub ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
