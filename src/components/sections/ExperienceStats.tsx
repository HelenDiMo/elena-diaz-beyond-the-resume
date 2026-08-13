import Link from "next/link";

export default function ExperienceStats() {
  return (
    <article className="rounded-xl border p-6">
      <p className="text-sm font-medium uppercase tracking-wide">
        Experiencia
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Trayectoria profesional
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-2xl font-bold">10+</p>
          <p className="text-sm">Años de experiencia profesional</p>
        </div>

        <div>
          <p className="text-2xl font-bold">3</p>
          <p className="text-sm">Áreas profesionales</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Empresas</p>
        </div>
      </div>

      <Link
        href="/#experience"
        className="mt-6 inline-block font-medium underline underline-offset-4"
      >
        Ver mi evolución →
      </Link>
    </article>
  );
}