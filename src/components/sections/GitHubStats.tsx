export default function GitHubStats() {
  return (
    <article className="rounded-xl border p-6">
      <p className="text-sm font-medium uppercase tracking-wide">
        GitHub
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Actividad y proyectos
      </h3>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Repositorios</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Contribuciones</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Proyectos</p>
        </div>

        <div>
          <p className="text-2xl font-bold">--</p>
          <p className="text-sm">Lenguajes</p>
        </div>
      </div>

      <a
        href="https://github.com/HelenDiMo"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block font-medium underline underline-offset-4"
      >
        Ver GitHub ↗
      </a>
    </article>
  );
}