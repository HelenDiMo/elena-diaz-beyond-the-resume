export default function Certifications() {
  return (
    <div className="mt-16 border-t pt-10">
      <h3 className="text-2xl font-bold text-teal">Formación Académica</h3>

      <ul className="mt-4 mb-8 max-w-2xl leading-relaxed list-disc list-inside">
        <li>Doble Diplomatura Turismo + Ciencias Empresariales - Universidad de Cádiz</li>
        <li>Máster Dirección y Gestión de Empresas Turisticas - Universidad de Cádiz</li>
      </ul>

      <h3 className="mt-5 text-2xl font-bold text-teal">
        Formación Complementaria y certificaciones
      </h3>

      <p className="mt-4 max-w-2xl leading-relaxed">
        Formación continua y certificaciones que respaldan mi evolución
        profesional en Business, Data, AI y tecnología.
      </p>

      <a
        href="/certifications"
        className="mt-6 inline-block font-medium underline underline-offset-4 transition-colors hover:text-oceanic"
      >
        Ver formación y certificaciones →
      </a>
    </div>
  );
}
