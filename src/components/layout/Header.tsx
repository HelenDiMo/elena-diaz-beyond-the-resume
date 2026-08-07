import Container from "@/components/ui/Container";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-xl font-bold">Elena Díaz</h1>
            <p className="text-sm">Beyond the Resume</p>
          </div>

          <nav>
            <ul className="flex gap-6">
              <li>Inicio</li>
              <li>Timeline</li>
              <li>Skills</li>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}