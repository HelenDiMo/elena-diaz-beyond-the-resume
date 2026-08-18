"use client";

import { useRef } from "react";
import { useState } from "react";
import { certifications } from "@/data/certifications";
import type { Certification } from "@/types/certification";
import CertificationModal from "@/components/ui/CertificationModal";

function CertificationCard({
  certification,
  onSelect,
}: {
  certification: Certification;
  onSelect: (certification: Certification) => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onSelect(certification)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          onSelect(certification);
        }
      }}
      className="group flex min-w-75 max-w-75 shrink-0 cursor-pointer flex-col rounded-xl border border-teal/40 bg-graphite p-6 transition-all duration-300 hover:-translate-y-1 hover:border-oceanic"
    >
      <div className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
        {certification.logo ? (
          <img
            src={certification.logo}
            alt={`Logo de ${certification.issuer}`}
            className="max-h-14 max-w-40 object-contain transition-transform duration-300 group-hover:scale-140"
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
    </article>
  );
}

function CertificationCarousel({
  title,
  category,
  onSelect,
}: {
  title: string;
  category: string;
  onSelect: (certification: Certification) => void;
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
        className="hide-scrollbar mt-8 flex gap-6 overflow-x-auto scroll-smooth px-1 py-2"
      >
        {filteredCertifications.map((certification) => (
          <CertificationCard
            key={certification.id}
            certification={certification}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);
  return (
    <div className="mt-16 border-t pt-10">
      <CertificationCarousel
        title="AI / Inteligencia Artificial"
        category="AI / Inteligencia Artificial"
        onSelect={setSelectedCertification}
      />

      <CertificationCarousel
        title="Programación & Data"
        category="Programación & Data"
        onSelect={setSelectedCertification}
      />

      <CertificationCarousel
        title="Gestión y Operaciones"
        category="Gestión y Operaciones"
        onSelect={setSelectedCertification}
      />
      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </div>
  );
}
