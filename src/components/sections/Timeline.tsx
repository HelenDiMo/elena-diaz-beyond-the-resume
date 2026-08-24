"use client";

import { useRef, useState } from "react";
import { timeline } from "@/data/timeline";
import { motion, AnimatePresence } from "framer-motion";

export default function Timeline() {
  const displayedTimeline = [...timeline].reverse();

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const activeItem = displayedTimeline[activeIndex];

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const nextIndex =
      direction === "right"
        ? Math.min(activeIndex + 1, displayedTimeline.length - 1)
        : Math.max(activeIndex - 1, 0);

    handleSelect(nextIndex);
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);

    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className="mt-16 w-full min-w-0">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-teal">
          Trayectoria profesional
        </h3>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            aria-label="Ver etapas anteriores"
            className="rounded border border-teal/30 px-3 py-1 text-teal transition-colors hover:border-oceanic hover:text-oceanic disabled:cursor-not-allowed disabled:opacity-30"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={activeIndex === displayedTimeline.length - 1}
            aria-label="Ver etapas siguientes"
            className="rounded border border-teal/30 px-3 py-1 text-teal transition-colors hover:border-oceanic hover:text-oceanic disabled:cursor-not-allowed disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      {/* Riel horizontal */}
      <div
        ref={containerRef}
        className="hide-scrollbar mt-10 w-full min-w-0 overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        <div className="relative flex w-max min-w-full items-start">
          {/* Línea horizontal */}
          <div className="absolute left-0 right-0 top-8 h-px bg-teal" />

          {displayedTimeline.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={item.year + item.company}
                type="button"
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => handleSelect(index)}
                aria-label={`Ver ${item.company}`}
                aria-pressed={isActive}
                className="flex w-48 shrink-0 flex-col items-center gap-2 px-2 text-center sm:w-52"
              >
                {/* Año */}
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive ? "text-oceanic" : "text-teal"
                  }`}
                >
                  {item.year}
                </span>

                {/* Punto */}
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ scale: isActive ? 1.3 : 1 }}
                  transition={{ duration: 0.2 }}
                  className={`z-10 h-4 w-4 shrink-0 rounded-full border-2 ${
                    isActive
                      ? "border-oceanic bg-oceanic"
                      : "border-teal bg-graphite"
                  }`}
                />

                {/* Empresa */}
                <span
                  className={`text-sm font-semibold leading-snug transition-colors ${
                    isActive ? "text-white" : "text-white/50"
                  }`}
                >
                  {item.company}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel de detalle */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeItem.year + activeItem.company}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mx-auto mt-8 w-full max-w-2xl rounded-xl border border-teal/40 bg-graphite p-6 md:p-8"
        >
          <p className="text-sm font-medium text-oceanic">
            {activeItem.year}
          </p>

          <h4 className="mt-1 text-xl font-semibold text-white">
            {activeItem.company}
          </h4>

          <p className="mt-1 text-sm text-teal">
            {activeItem.location}
          </p>

          <div className="mt-4 space-y-2">
            {activeItem.roles.map((role) => (
              <div key={role.period + role.title}>
                {activeItem.roles.length > 1 && (
                  <p className="text-sm text-teal">{role.period}</p>
                )}

                <p className="font-medium text-oceanic">
                  {role.title}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-4 leading-relaxed text-white/80">
            {activeItem.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}