import Container from "@/components/ui/Container";
import Timeline from "@/components/sections/Timeline";

export default function Evolution() {
  return (
    <section id="experience" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Mi evolución
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            De la experiencia al dato
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Mi trayectoria profesional recoge una amplia gama de habiliades relacionadas
            con el sector turístico, la gestión empresarial y las operaciones en entornos nacionales e internacionales, 
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Con más de 13 años de experiencia, he ido incorporando nuevas
            herramientas y conocimientos hasta evolucionar hacia el análisis de
            datos y la inteligencia artificial.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            Hoy combino experiencia de negocio, conocimiento financiero y nuevas
            competencias tecnológicas para analizar problemas desde diferentes
            perspectivas.
          </p>

          <Timeline />
        </div>
      </Container>
    </section>
  );
}
