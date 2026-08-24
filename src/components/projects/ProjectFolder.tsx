"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import type { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type ProjectFolderProps = {
  projects: Project[];
};

export default function ProjectFolder({ projects }: ProjectFolderProps) {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const tabsRef = useRef<HTMLDivElement>(null);

  const handleSelect = (project: Project) => {
    setSelectedProject(project);

    const tab = document.getElementById(`project-tab-${project.slug}`);

    tab?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  if (!projects.length) {
    return null;
  }

  return (
    <div className="relative mt-20">
      <div className="relative mx-auto max-w-3xl">
        {/* CARPETA */}
        <div className="relative rounded-2xl border border-teal/30 bg-graphite px-4 pb-6 pt-4 shadow-2xl sm:px-6 sm:pb-8">
          {/* PESTAÑAS */}
          <div
            ref={tabsRef}
            className="hide-scrollbar absolute -top-10 left-0 right-0 flex items-end gap-2 overflow-x-auto px-4 sm:left-6 sm:right-auto sm:px-0"
          >
            {projects.map((project) => {
              const isSelected = selectedProject.slug === project.slug;

              return (
                <button
                  key={project.slug}
                  id={`project-tab-${project.slug}`}
                  type="button"
                  onClick={() => handleSelect(project)}
                  aria-pressed={isSelected}
                  className={`relative shrink-0 rounded-t-lg border border-b-0 px-3 py-2 text-sm font-medium whitespace-nowrap transition-all sm:px-4 ${
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
