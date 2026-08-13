import Container from "@/components/ui/Container";
import CertificationList from "@/components/sections/CertificationList";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  return (
    <main>
      <section className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              Formación
            </p>

            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Certificaciones y aprendizaje
            </h1>

            <p className="mt-6 text-lg leading-relaxed">
              Una recopilación de certificaciones, cursos y formaciones que
              acompañan mi evolución profesional.
            </p>
          </div>

          <CertificationList certifications={certifications} />
        </Container>
      </section>
    </main>
  );
}