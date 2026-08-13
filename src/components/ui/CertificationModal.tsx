"use client";

import Image from "next/image";
import type { Certification } from "@/types/certification";

type CertificationModalProps = {
  certification: Certification;
  onClose: () => void;
};

export default function CertificationModal({
  certification,
  onClose,
}: CertificationModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-background p-8 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-xl"
          aria-label="Cerrar"
        >
          ×
        </button>

        {certification.logo && (
          <Image
            src={certification.logo}
            alt={`Logo de ${certification.issuer}`}
            width={120}
            height={64}
            className="mb-6 max-h-16 w-auto object-contain"
          />
        )}

        <p className="text-sm uppercase tracking-wide">
          {certification.category}
        </p>

        <h2 className="mt-2 text-2xl font-bold">
          {certification.title}
        </h2>

        <p className="mt-2">
          {certification.issuer}
        </p>

        <p className="mt-1 text-sm">
          {certification.date}
        </p>

        <p className="mt-6 leading-relaxed">
          {certification.description}
        </p>

        {certification.credentialUrl && (
          <a
            href={certification.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver certificación de ${certification.title}`}
            className="mt-6 inline-block font-medium underline underline-offset-4"
          >
            Ver certificación ↗
          </a>
        )}
      </div>
    </div>
  );
}