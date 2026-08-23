import Container from "@/components/ui/Container";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";
/* import ThemeToggle from "./ThemeToggle"; -> PORQUE DE MOMENTO NO LO VAMOS A UTILIZAR*/

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        {/*<div className="flex flex-col items-center gap-4 py-6 md:flex-row md:justify-center">
        YA NO NOS HACE FALTA TODO ESTO PORQUE NO TENEMOS UN BLOQUE DE MARCA */}

        <div className="flex items-center justify-center py-6">
          {/*<div>
            <h1 className="text-oceanic">Elena Díaz</h1> 
            <p className="text-teal">Beyond the Resume</p>
          </div>     -> QUITAMOS EL TITULITO */}

          <div className="flex items-center gap-6">
            <nav>
              <ul className="flex flex-wrap justify-left gap-4 md:gap-6">
                <li>
                  <Link
                    href="/"
                    className="transition-colors hover:text-oceanic"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#experience"
                    className="transition-colors hover:text-oceanic"
                  >
                    Experiencia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#skills"
                    className="transition-colors hover:text-oceanic"
                  >
                    Habilidades & Herramientas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#projects"
                    className="transition-colors hover:text-oceanic"
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="transition-colors hover:text-oceanic"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-right gap-2">
              <LanguageToggle />

              {/* <ThemeToggle /> -> PORQUE DE MOMENTO NO LO VAMOS A UTILIZAR */}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
