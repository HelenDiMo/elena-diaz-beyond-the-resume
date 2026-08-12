import Container from "@/components/ui/Container";
import { certifications } from "@/data/certifications";

export default function CertificationsPage() {
  const categories = Array.from(
    new Set(certifications.map((certification) => certification.category))
  );
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

          <div className="mt-16 space-y-16">
            {categories.map((category) => {
              const categoryCertifications = certifications.filter(
                (certification) => certification.category === category
              );

              return (
                <section key={category}>
                  <h2 className="text-2xl font-bold">{category}</h2>

                  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoryCertifications.map((certification) => (
                      <article
                        key={certification.id}
                        className="rounded-xl border p-6"
                      >
                        <h3 className="text-xl font-semibold">
                          {certification.title}
                        </h3>

                        <p className="mt-2">{certification.issuer}</p>

                        <p className="mt-1 text-sm">{certification.date}</p>

                        <p className="mt-4 leading-relaxed">
                          {certification.description}
                        </p>

                        {certification.credentialUrl && (
                          <a
                            href={certification.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                          >
                            Ver certificación ↗
                          </a>
                        )}
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
