import Container from "@/components/ui/Container";
import Timeline from "@/components/sections/Timeline";

export default function Evolution() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">
            Mi evolución
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl text-oceanic">
            De la Experiencia al Dato
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Mi trayectoria profesional reúne experiencia en el sector turístico,
            la administración, la gestión empresarial y las operaciones en
            entornos nacionales e internacionales.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Con más de 13 años de experiencia, he ido incorporando nuevas
            herramientas y conocimientos hasta evolucionar hacia el análisis de
            datos y la inteligencia artificial.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Hoy combino experiencia de negocio, conocimiento financiero y
            competencias tecnológicas para analizar problemas desde diferentes
            perspectivas y construir soluciones con una visión global.
          </p>

          <Timeline />
        </div>
      </Container>
    </section>
  );
}
