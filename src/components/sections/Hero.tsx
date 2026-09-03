"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-100px)] items-center">
      <Container>
        <div className="max-w-4xl">
          {/* Business · Data · AI */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-teal"
          >
            Data & AI · Business Intelligence · Automatización
          </motion.p>

          {/* Nombre */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl font-bold tracking-tight text-oceanic md:text-7xl"
          >
            Elena Díaz
          </motion.h1>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed"
          >
            Más de 13 años de experiencia profesional, combinando una
            trayectoria en administración, finanzas y turismo con mi evolución
            hacia el análisis de datos y la inteligencia artificial.
          </motion.p>

          {/* Botones */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href="/#experience"
              className="w-full rounded border border-teal px-5 py-3 text-center font-medium text-white transition-colors hover:bg-teal sm:w-auto"
            >
              Ver mi evolución
            </Link>

            <Link
              href="/#projects"
              className="w-full rounded border border-teal px-5 py-3 text-center font-medium text-white transition-colors hover:bg-teal sm:w-auto"
            >
              Explorar proyectos
            </Link>

            <a
              href="/cv/Elena-Diaz-CV.pdf"
              download
              className="w-full rounded border border-teal px-5 py-3 text-center font-medium text-white transition-colors hover:bg-teal sm:w-auto"
            >
              Descargar CV
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
