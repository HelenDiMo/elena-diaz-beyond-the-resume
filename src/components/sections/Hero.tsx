import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="min-h[calc(100vh-100px)] flex items-center">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em]">
            Data · AI · Business
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Elena Díaz
            <span className="block"> Beyond the Resume </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">
            Transformando experiencia en negocio, datos e inteligencia
            artificial.
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
