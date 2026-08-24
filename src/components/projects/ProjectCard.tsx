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
      {/* Logo */}
      {project.image && (
        <div className="absolute right-3 top-3 flex h-16 w-16 items-center justify-center sm:right-5 sm:top-5 sm:h-20 sm:w-20">
          <Image
            src={project.image}
            alt={`Imagen representativa de ${project.title}`}
            width={100}
            height={100}
            className="h-full w-full object-contain"
          />
        </div>
      )}

      {/* Contenido */}
      <div className="p-5 pr-24 sm:p-6 sm:pr-28">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-relaxed text-white/70">
          {project.description}
        </p>

        {/* Tecnologías — actualmente desactivado */}
        {/*
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
            >
              {technology}
            </li>
          ))}
        </ul>
        */}

        {/* Enlaces */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
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

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/60 underline underline-offset-4 transition-colors hover:text-white"
            >
              Ver aplicación ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}