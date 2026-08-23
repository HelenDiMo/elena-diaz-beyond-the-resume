"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type ProjectFolderProps = {
  projects: Project[];
};

export default function ProjectFolder({ projects }: ProjectFolderProps) {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  return (
    <div className="relative mt-20">
      <div className="relative mx-auto max-w-3xl">
        {" "}
        {/*Anchura de la carpeta*/}
        {/* CARPETA */}
        <div className="relative rounded-2xl border border-teal/30 bg-graphite px-6 pb-8 pt-4 shadow-2xl">
          {/* pt-4 es para tocar el espacio entre la tarjetita perqueña y el folder (parte de arriba)*/}
          {/* PESTAÑAS */}
          <div className="absolute -top-10 left-6 flex items-end gap-2">
            {projects.map((project) => {
              const isSelected = selectedProject.slug === project.slug;

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className={`relative rounded-t-lg border border-b-0 px-3 py-2 text-sm font-medium transition-all ${
                    isSelected
                      ? "z-20 border-teal/40 bg-graphite text-teal"
                      : "z-10 border-white/10 bg-white/5 text-white/50 hover:text-white"
                  }`}
                >
                  {project.title}
                </button>
              );
            })}
          </div>

          {/* CONTENIDO */}
          <div className="relative min-h-80">
            {" "}
            {/* Altura de la Carpeta*/}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.slug}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 30,
                  rotate: 2,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
              >
                <ProjectCard project={selectedProject} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
