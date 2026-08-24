import Container from "@/components/ui/Container";
import Link from "next/link";
import LanguageToggle from "@/components/ui/LanguageToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-teal/20 bg-graphite/90 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-center py-4 md:py-5">
          <div className="flex w-full items-center justify-center gap-6 md:gap-10">
            {/* Navegación */}
            <nav>
              <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:gap-x-8">
                <li>
                  <Link
                    href="/"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-oceanic md:text-base"
                  >
                    Inicio
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#experience"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-oceanic md:text-base"
                  >
                    Experiencia
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#skills"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-oceanic md:text-base"
                  >
                    Habilidades
                  </Link>
                </li>

                <li>
                  <Link
                    href="/#projects"
                    className="text-sm font-medium text-white/70 transition-colors hover:text-oceanic md:text-base"
                  >
                    Proyectos
                  </Link>
                </li>

                {/* CTA */}
                <li>
                  <Link
                    href="/#contact"
                    className="rounded-full border border-teal/50 bg-teal/10 px-4 py-2 text-sm font-medium text-teal transition-all hover:-translate-y-0.5 hover:border-oceanic hover:bg-oceanic hover:text-graphite md:px-5 md:text-base"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Idioma 
            <div className="shrink-0">
              <LanguageToggle />
            </div> */}
          </div>
        </div>
      </Container>
    </header>
  );
}