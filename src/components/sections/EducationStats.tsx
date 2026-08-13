import Link from "next/link";

export default function EducationStats() {
  return (
    <article className="rounded-xl border p-6">
      <p className="text-sm font-medium uppercase tracking-wide">
        Formación
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Aprendizaje continuo
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-2xl font-bold">1000+</p>
          <p className="text-sm">Horas de formación</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Certificaciones</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Áreas de conocimiento</p>
        </div>
      </div>

      <Link
        href="/certifications"
        className="mt-6 inline-block font-medium underline underline-offset-4"
      >
        Ver formación y certificaciones →
      </Link>
    </article>
  );
}