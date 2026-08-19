"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{ opacity: 0, y: 40, rotate: 2 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-xl bg-graphite/40"
    >
      {project.image && (
        <div className="absolute up-3 right-3 flex h-30 w-30 items-center justify-center rounded-lg ">
          {/* si añadimos bg-black/40 p-2 backdrop-blur-sm sale un cuadradito */}
          <Image
            src={project.image}
            alt={`Imagen representativa de ${project.title}`}
            width={100} /*40*/
            height={100} /*40*/
            className="h-full w-full object-contain"
          />
        </div>
      )}
      <div className="p-6">
        {" "}
        {/* Padding del contenido */}
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
          {project.category}
        </p>
        <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>{" "}
        {/* Título */}
        <p className="mt-4 leading-relaxed text-white/70">
          {" "}
          {/* mt- Espacios verticales */}
          {project.description}
        </p>
        {/*<ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
            >
              {technology}
            </li>
          ))}
        </ul>    --> SI QUIERO AÑADIR LOS CIRCULITOS CON LAS TECNOLOGÍAS UTILIZADAS*/}
        <div className="mt-6 flex flex-wrap gap-5">
          <Link
            href={`/projects/${project.slug}`}
            className="font-medium text-teal underline underline-offset-4 transition-colors hover:text-oceanic"
          >
            Ver proyecto →
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              Ver en GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
