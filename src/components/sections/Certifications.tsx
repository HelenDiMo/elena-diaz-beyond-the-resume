import Link from "next/link";

function EducationCard({
  logo,
  title,
  institution,
  year,
}: {
  logo?: string;
  title: string;
  institution: string;
  year: string;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-teal/40 bg-graphite p-6">
      <div className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-white/5">
        {logo ? (
          <img
            src={logo}
            alt={`Logo de ${institution}`}
            className="max-h-14 max-w-40 object-contain"
          />
        ) : (
          <span className="text-sm text-white/50">Sin logo</span>
        )}
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-teal">
          {year}
        </p>

        <h4 className="mt-3 min-h-14 text-lg font-semibold leading-snug text-white">
          {title}
        </h4>

        <p className="mt-3 text-sm text-teal">{institution}</p>
      </div>
    </div>
  );
}
export default function Certifications() {
  return (
    <section id="certificationbutton" className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold text-teal">Formación Principal</h3>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        <EducationCard
          logo="public/certifications/logos/somos-f5.png"
          title="Bootcamp IA & Data (1250 h)"
          institution="Somos F5 · Fundación Tomillo"
          year="Cursando"
        />

        <EducationCard
          logo="/certifications/logos/edyn.png"
          title="Curso Universitario de Especialización en Asesoría de Empresas: Fiscal, Laboral y Contable (6 meses)"
          institution="Escuela de Negocios y Dirección - ENyD"
          year="2021"
        />

        <EducationCard
          logo="/certifications/logos/uca.png"
          title="Doble Diplomatura en Turismo y Ciencias Empresariales"
          institution="Universidad de Cádiz"
          year="2012"
        />

        <EducationCard
          logo="/certifications/logos/uca.png"
          title="Máster en Dirección y Gestión de Empresas Turísticas"
          institution="Universidad de Cádiz"
          year="2013"
        />
      </div>

      <h3 className="mt-12 text-2xl font-bold text-teal">
        Formación Complementaria y certificaciones
      </h3>

      <p className="mt-4 max-w-2xl leading-relaxed">
        Formación continua y certificaciones que respaldan mi evolución
        profesional en Business, Data, AI y tecnología.
      </p>

      <Link
        href="/certifications"
        className="mt-6 inline-block font-medium underline underline-offset-4 transition-colors hover:text-oceanic"
      >
        Ver formación y certificaciones →
      </Link>
    </section>
  );
}
