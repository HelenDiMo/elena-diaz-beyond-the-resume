import Container from "@/components/ui/Container";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className="text-xl font-bold">Elena Díaz</h1>
            <p className="text-sm">Beyond the Resume</p>
          </div>

          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/">Inicio</Link>
                </li>
                <li>
                  <Link href="/#experience">Experiencia</Link>
                </li>
                <li>
                  <Link href="/skills">Skills & Tools</Link>
                </li>
                <li>
                  <Link href="/projects">Proyectos</Link>
                </li>
                <li>
                  <Link href="/contact">Contacto</Link>
                </li>
              </ul>
            </nav>

            <LanguageToggle />
            
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}