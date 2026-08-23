"use client";

import Container from "@/components/ui/Container";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mvkpndlq");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-bold text-oceanic md:text-5xl">
              Hablemos
            </h2>

            <div className="mt-10 rounded-2xl border border-teal/20 bg-white/[0.02] p-8">
              <p className="text-xl font-medium text-white">
                Mensaje enviado correctamente.
              </p>

              <p className="mt-3 text-white/60">
                Gracias por escribirme. Me pondré en contacto contigo lo antes
                posible.
              </p>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        {/* Intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-teal">
            Contacto
          </p>

          <h2 className="mt-4 text-4xl font-bold text-oceanic md:text-5xl">
            Hablemos
          </h2>

          <p className="mt-6 max-w-2xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
            El CV cuenta una parte.
            <br />
            <span className="text-teal text-xl md:text-2xl">
              El resto podemos hablarlo.
            </span>
          </p>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Si quieres conocer más sobre mi perfil, hablar de un proyecto o
            explorar una posible colaboración, puedes escribirme.
          </p>
        </div>

        {/* Contact content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* Formulario */}
          <div className="rounded-2xl border border-teal/20 bg-white/[0.02] p-6 md:p-7">
            <h3 className="text-2xl font-bold text-white">
              Cuéntame qué tienes en mente
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/80"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-white outline-none transition placeholder:text-white/30 focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/80"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-white outline-none transition placeholder:text-white/30 focus:border-teal focus:ring-2 focus:ring-teal/20"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Asunto */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-white/80"
                >
                  Asunto
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="mt-1.5 w-full rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-white outline-none transition placeholder:text-white/30 focus:border-teal focus:ring-2 focus:ring-teal/20"
                />

                <ValidationError
                  prefix="Asunto"
                  field="subject"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/80"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full resize-none rounded-lg border border-white/15 bg-transparent px-4 py-2.5 text-white outline-none transition placeholder:text-white/30 focus:border-teal focus:ring-2 focus:ring-teal/20"
                />

                <ValidationError
                  prefix="Mensaje"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>

              {/* Error general */}
              {state.errors && (
                <p className="text-sm text-red-400">
                  No se ha podido enviar el mensaje. Revisa los campos e
                  inténtalo de nuevo.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-lg bg-teal px-5 py-2.5 font-medium text-white transition hover:-translate-y-0.5 hover:bg-oceanic disabled:cursor-not-allowed disabled:opacity-50"
              >
                {state.submitting ? "Enviando..." : "Enviar mensaje →"}
              </button>
            </form>
          </div>

          {/* Contacto directo + CV */}
          <div className="lg:pl-12">
            <h3 className="text-2xl font-bold text-white">
              También puedes encontrarme aquí
            </h3>

            {/* Links */}
            <div className="mt-8 space-y-5">
              <a
                href="mailto:elena.diazmoreno@gmail.com"
                className="block font-medium text-teal underline underline-offset-4 transition hover:text-oceanic"
              >
                Enviarme un email →
              </a>

              <a
                href="https://www.linkedin.com/in/elena-diazmo/"
                target="_blank"
                rel="noopener noreferrer"
                className="block font-medium text-teal underline underline-offset-4 transition hover:text-oceanic"
              >
                LinkedIn →
              </a>
            </div>

            {/* CV */}
            <div className="mt-12 border-t border-teal/20 pt-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
                Currículum
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                ¿Quieres conocer mi recorrido profesional?
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-white/60">
                Puedes consultar o descargar mi CV para conocer mi experiencia,
                formación y perfil técnico.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {/* Ver CV */}
                <a
                  href="/cv/CV-Elena-Diaz.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-oceanic px-5 py-2.5 font-medium text-graphite transition hover:-translate-y-0.5 hover:bg-teal hover:text-white"
                >
                  Ver CV ↗
                </a>

                {/* Descargar CV */}
                <a
                  href="/cv/CV-Elena-Diaz.pdf"
                  download="CV-Elena-Diaz.pdf"
                  className="rounded-lg border border-teal px-5 py-2.5 font-medium text-teal transition hover:-translate-y-0.5 hover:bg-teal hover:text-white"
                >
                  Descargar CV ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}