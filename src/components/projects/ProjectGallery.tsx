"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectGalleryProps = {
  images: {
    src: string;
    alt: string;
    title: string;
    description: string;
  }[];
};

export default function ProjectGallery({ images }: ProjectGalleryProps) {
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6D6C2] bg-[#E7E0CC] text-[#556B2F] transition hover:border-[#556B2F] hover:bg-[#556B2F] hover:text-[#E7E0CC]"
        >
          <span className="text-xl">←</span>
        </button>

        {/* Imagen */}
        <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-[#D6D6C2] bg-[#E7E0CC]">
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#D6D6C2] bg-[#E7E0CC] text-[#556B2F] transition hover:border-[#556B2F] hover:bg-[#556B2F] hover:text-[#E7E0CC]"
        >
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Información de la imagen */}
      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-[#d9d97e]">
            {image.title}
          </h3>

          <p className="mt-2 max-w-3xl leading-relaxed text-[#c3c3b0]">
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
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === current ? "bg-[#B5651D]" : "bg-[#C2B280]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
