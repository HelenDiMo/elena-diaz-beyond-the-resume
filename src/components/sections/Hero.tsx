import Container from "@/components/ui/Container";
export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-100px)] flex items-center">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em]">
            Business · Data · AI
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Elena Díaz
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Más de 13 años de experiencia profesional evolucionando desde la
            administración, las finanzas y el turismo hacia el análisis de datos
            y la inteligencia artificial.
          </p>

          <div className="mt-8 flex gap-4">
            <button
              type="button"
              className="rounded border px-5 py-3 font-medium"
            >
              Ver mi evolución
            </button>

            <button
              type="button"
              className="rounded border px-5 py-3 font-medium"
            >
              Explorar proyectos
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
