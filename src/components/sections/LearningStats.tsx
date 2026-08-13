import Link from "next/link";

export default function LearningStats() {
  return (
    <article className="rounded-xl border p-6">
      <p className="text-sm font-medium uppercase tracking-wide">
        Ahora mismo
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Currently learning
      </h3>

      <p className="mt-4 leading-relaxed">
        Actualmente estoy ampliando mi perfil hacia Data, AI y desarrollo
        tecnológico.
      </p>

      <div className="mt-6 space-y-5">
        <div>
          <p className="font-semibold">Data</p>
          <p className="mt-1 text-sm">
            Python · SQL · Power BI · Análisis de datos
          </p>
        </div>

        <div>
          <p className="font-semibold">AI</p>
          <p className="mt-1 text-sm">
            Machine Learning · IA aplicada · Automatización
          </p>
        </div>

        <div>
          <p className="font-semibold">Development</p>
          <p className="mt-1 text-sm">
            Next.js · React · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>

      <Link
        href="/skills"
        className="mt-6 inline-block font-medium underline underline-offset-4"
      >
        Ver Skills & Tools →
      </Link>
    </article>
  );
}