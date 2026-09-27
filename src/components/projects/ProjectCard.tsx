"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-graphite/40 backdrop-blur-md transition-all duration-300 hover:border-teal/30 hover:shadow-2xl hover:shadow-teal/5">
      {/* 1. Marco / Preview del Dashboard */}
      <div className="relative w-full border-b border-white/10 bg-black/40">
        {/* Barra superior tipo ventana */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500/60" />
            <span className="h-2 w-2 rounded-full bg-yellow-500/60" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/60" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
            {project.category}
          </span>
        </div>

        {/* Contenedor compacto con zoom */}
        <div className="relative h-44 w-full cursor-zoom-in overflow-hidden bg-black/30 sm:h-52">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Vista previa de ${project.title}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-115"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-white/30">
              Preview no disponible
            </div>
          )}

          <div className="absolute inset-0 bg-linear-to-t from-graphite/90 via-transparent to-transparent pointer-events-none opacity-60" />
        </div>
      </div>

      {/* 2. Cuerpo y Metadatos */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
          {project.category}
        </p>

        <h3 className="mt-1.5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-teal sm:text-xl">
          {project.title}
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-white/70 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-medium text-teal transition-colors hover:text-oceanic"
          >
            Ver proyecto
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-white/60 transition-colors hover:text-white"
            >
              Ver en GitHub
              <span className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-white/60 transition-colors hover:text-white"
            >
              Ver aplicación
              <span className="text-xs transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}