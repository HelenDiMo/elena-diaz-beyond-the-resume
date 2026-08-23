"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectGalleryItem, ProjectTheme } from "@/types/project";

type ProjectGalleryProps = {
  images: ProjectGalleryItem[];
  theme: ProjectTheme;
};

export default function ProjectGallery({ images, theme }: ProjectGalleryProps) {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  if (images.length === 0) {
    return null;
  }

  const image = images[current];

  return (
    <div>
      <div className="flex items-center gap-4 md:gap-6">
        {/* Flecha anterior */}
        <button
          type="button"
          onClick={previous}
          aria-label="Imagen anterior"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.background,
            color: theme.accent,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition"
        >
          <span className="text-xl">←</span>
        </button>

        {/* Imagen */}
        <div
          className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.background,
          }}
        >
          <div className="relative aspect-video">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Flecha siguiente */}
        <button
          type="button"
          onClick={next}
          aria-label="Siguiente imagen"
          style={{
            borderColor: theme.border,
            backgroundColor: theme.background,
            color: theme.accent,
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition"
        >
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Información de la imagen */}
      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold" style={{ color: theme.accent }}>
            {image.title}
          </h3>

          <p className="mt-2 max-w-3xl leading-relaxed text-white/70">
            {image.description}
          </p>
        </div>

        {/* Indicadores */}
        <div className="flex shrink-0 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
              style={{
                backgroundColor:
                  index === current ? theme.accent : theme.border,
              }}
              className="h-2.5 w-2.5 rounded-full transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
