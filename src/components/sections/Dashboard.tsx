import Container from "@/components/ui/Container";

export default function Dashboard() {
  return (
    <section id="dashboard" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Dashboard
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Mi evolución en datos
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Una visión general de mi trayectoria, formación, experiencia y
            actividad en tecnología.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              Estadísticas
            </h3>
            <p className="mt-3">
              Métricas sobre mi evolución profesional.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              GitHub
            </h3>
            <p className="mt-3">
              Actividad y proyectos desarrollados.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              Formación
            </h3>
            <p className="mt-3">
              Cursos, certificaciones y formación.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              Experiencia
            </h3>
            <p className="mt-3">
              Evolución de mi trayectoria profesional.
            </p>
          </article>

          <article className="rounded-xl border p-6">
            <h3 className="text-xl font-semibold">
              Aprendizaje
            </h3>
            <p className="mt-3">
              Tecnologías y conocimientos adquiridos.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}