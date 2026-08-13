"use client";

import { useState } from "react";
import CertificationModal from "@/components/ui/CertificationModal";
import type { Certification } from "@/types/certification";

type CertificationListProps = {
  certifications: Certification[];
};

export default function CertificationList({
  certifications,
}: CertificationListProps) {
  const [selectedCertification, setSelectedCertification] =
    useState<Certification | null>(null);

  const categories = Array.from(
    new Set(certifications.map((certification) => certification.category)),
  );

  return (
    <>
      <div className="mt-16 space-y-16">
        {categories.map((category) => {
          const categoryCertifications = certifications.filter(
            (certification) => certification.category === category,
          );

          return (
            <section key={category}>
              <h2 className="text-2xl font-bold">{category}</h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {categoryCertifications.map((certification) => (
                  <button
                    key={certification.id}
                    type="button"
                    onClick={() => setSelectedCertification(certification)}
                    className="rounded-xl border p-6 text-left transition hover:-translate-y-1"
                  >
                    {certification.logo && (
                      <img
                        src={certification.logo}
                        alt={`Logo de ${certification.issuer}`}
                        className="mb-6 max-h-16 w-auto object-contain"
                      />
                    )}

                    <h3 className="text-xl font-semibold">
                      {certification.title}
                    </h3>

                    <p className="mt-2">{certification.issuer}</p>

                    <p className="mt-1 text-sm">
                      {certification.date}
                    </p>

                    <p className="mt-4 text-sm font-medium underline underline-offset-4">
                      Ver detalles →
                    </p>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </>
  );
}