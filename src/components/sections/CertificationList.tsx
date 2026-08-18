"use client";

import { useRef, useState } from "react";
import type { Certification } from "@/types/certification";

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group min-w-75 max-w-75 shrink-0 cursor-pointer"
      style={{ perspective: "1800px" }}
      onClick={() => setIsFlipped((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsFlipped((current) => !current);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={
        isFlipped
          ? `Ocultar información de ${certification.title}`
          : `Ver información de ${certification.title}`
      }
    >
      <div
        className="relative h-96 w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* CARA FRONTAL */}
        <article
          className="absolute inset-0 flex flex-col rounded-xl border border-teal/40 bg-graphite p-6 transition-colors duration-300 group-hover:border-oceanic"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            {certification.logo ? (
              <img
                src={certification.logo}
                alt={`Logo de ${certification.issuer}`}
                className="max-h-14 max-w-40 object-contain transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <span className="text-sm text-white/50">Sin logo</span>
            )}
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-teal">
              {certification.category}
            </p>

            <p className="mt-2 text-sm text-white/60">{certification.date}</p>

            <h4 className="mt-3 min-h-14 text-lg font-semibold leading-snug text-white">
              {certification.title}
            </h4>

            <p className="mt-3 text-sm text-teal">{certification.issuer}</p>
          </div>

          <div className="mt-auto pt-6 text-sm text-white/40">
            Haz clic para ver más
          </div>
        </article>

        {/* CARA TRASERA */}
        <article
          className="absolute inset-0 flex flex-col rounded-xl border border-oceanic/50 bg-graphite p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-teal">
            {certification.category}
          </p>

          <h4 className="mt-4 text-xl font-semibold leading-snug text-white">
            {certification.title}
          </h4>

          <p className="mt-2 text-sm text-teal">{certification.issuer}</p>

          <p className="mt-6 flex-1 text-sm leading-relaxed text-white/80">
            {certification.description}
          </p>

          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              aria-label={`Ver certificación de ${certification.title}`}
              className="mt-6 inline-flex items-center font-medium text-oceanic transition-colors hover:text-white"
            >
              Ver certificación
              <span className="ml-2">↗</span>
            </a>
          )}

          <span className="mt-4 text-xs text-white/40">
            Haz clic para volver
          </span>
        </article>
      </div>
    </div>
  );
}

function CertificationCarousel({
  title,
  category,
  certifications,
}: {
  title: string;
  category: string;
  certifications: Certification[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredCertifications = certifications.filter(
    (certification) => certification.category === category
  );

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const amount = 320;

    containerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  if (filteredCertifications.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-xl font-semibold text-teal">{title}</h4>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label={`Ver certificaciones anteriores de ${title}`}
            className="rounded border px-3 py-1 transition-colors hover:border-oceanic hover:text-oceanic"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label={`Ver siguientes certificaciones de ${title}`}
            className="rounded border px-3 py-1 transition-colors hover:border-oceanic hover:text-oceanic"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="hide-scrollbar mt-8 flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth px-2 py-4"
      >
        {filteredCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
        <div className="min-w-2 shrink-0" aria-hidden="true" />
      </div>
    </div>
  );
}

export default function CertificationList({
  certifications,
}: {
  certifications: Certification[];
}) {
  return (
    <div className="mt-16 border-t border-white/10 pt-10">
      <CertificationCarousel
        title="AI / Inteligencia Artificial"
        category="AI / Inteligencia Artificial"
        certifications={certifications}
      />

      <CertificationCarousel
        title="Programación & Data"
        category="Programación & Data"
        certifications={certifications}
      />

      <CertificationCarousel
        title="Gestión y Operaciones"
        category="Gestión y Operaciones"
        certifications={certifications}
      />
    </div>
  );
}