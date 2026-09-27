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
            className="hide-scrollbar absolute -top-10 left-0 right-0 flex items-end gap-1.5 overflow-x-auto px-4 sm:left-6 sm:right-auto sm:px-0"
          >
            {projects.map((project) => {
              const isSelected = selectedProject.slug === project.slug;

              return (
                <button
                  key={project.slug}
                  id={`project-tab-${project.slug}`}
                  type="button"
                  onClick={() => handleSelect(project)}
                  className="relative shrink-0 rounded-t-lg px-3.5 py-2 text-sm font-medium whitespace-nowrap transition-colors sm:px-4"
                >
                  {isSelected ? (
                    <motion.div
                      layoutId="activeFolderTab"
                      className="absolute inset-0 z-10 rounded-t-lg border border-b-0 border-teal/40 bg-graphite"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 28,
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 z-0 rounded-t-lg border border-b-0 border-white/5 bg-white/[0.03]" />
                  )}

                  <span
                    className={`relative z-20 transition-colors duration-200 ${
                      isSelected
                        ? "font-semibold text-teal"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {project.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* CONTENIDO CON DISOLUCIÓN PURA (SIN DESPLAZAMIENTO VERTICAL) */}
          <div className="relative min-h-[440px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
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
