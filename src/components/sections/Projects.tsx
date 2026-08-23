import Container from "@/components/ui/Container";
import ProjectFolder from "@/components/projects/ProjectFolder";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">
            Proyectos
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl text-oceanic">
            Mis proyectos favoritos
          </h2>

          {/* <p className="mt-6 text-lg leading-relaxed">
            Proyectos en los que aplico programación, análisis de datos e
            inteligencia artificial para convertir conocimientos en soluciones
            reales.
          </p>*/}
        </div>

        <ProjectFolder projects={projects} />
      </Container>
    </section>
  );
}
