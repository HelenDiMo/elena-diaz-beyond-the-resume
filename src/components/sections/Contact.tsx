import Container from "@/components/ui/Container";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Contacto
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Hablemos
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Si quieres conocer más sobre mi perfil, hablar de un proyecto o
            simplemente conectar, puedes escribirme.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Formulario */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium"
              >
                Nombre
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-4 py-3"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium"
              >
                Asunto
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-4 py-3"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium"
              >
                Mensaje
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-4 py-3"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg border px-6 py-3 font-medium"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Contacto directo */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold">
              También puedes encontrarme aquí
            </h3>

            <div className="mt-8 space-y-6">
              <a
                href="mailto:elena.diazmoreno@gmail.com"
                className="block font-medium underline underline-offset-4"
              >
                Enviarme un email →
              </a>

              <a
                href="https://www.linkedin.com/in/elena-diazmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium underline underline-offset-4"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}