"use client";

import { useRef } from "react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types/certification";

function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article className="group flex min-w-75 max-w-75 shrink-0 flex-col rounded-xl border border-teal/40 bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-oceanic">
      <div className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
        {certification.logo ? (
          <img
            src={certification.logo}
            alt={`Logo de ${certification.issuer}`}
            className="max-h-14 max-w-40 object-contain transition-transform duration-300 group-hover:scale-105"
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

      <div className="mt-auto pt-6">
        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver credencial de ${certification.title}`}
            className="inline-flex items-center font-medium text-oceanic transition-colors hover:text-white"
          >
            Ver credencial
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        )}
      </div>
    </article>
  );
}

function CertificationCarousel({
  title,
  category,
}: {
  title: string;
  category: string;
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
        className="mt-8 flex gap-6 overflow-x-auto scroll-smooth px-1 py-2"
      >
        {filteredCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
          />
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <div className="mt-16 border-t pt-10">
      <CertificationCarousel
        title="AI / Inteligencia Artificial"
        category="AI / Inteligencia Artificial"
      />

      <CertificationCarousel
        title="Programación & Data"
        category="Programación & Data"
      />

      <CertificationCarousel
        title="Gestión y Operaciones"
        category="Gestión y Operaciones"
      />
    </div>
  );
}
