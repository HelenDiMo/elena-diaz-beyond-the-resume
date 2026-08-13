import { dashboardStats } from "@/data/dashboard";

export default function DashboardStats() {
  return (
    <div>
      <h3 className="text-2xl font-bold">
        Estadísticas
      </h3>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardStats.map((stat) => (
          <article
            key={stat.id}
            className="rounded-xl border p-6"
          >
            <p className="text-3xl font-bold">
              {stat.value}
            </p>

            <p className="mt-2 text-sm">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}