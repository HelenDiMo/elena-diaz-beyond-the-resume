import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <Container>
        <div>
          <p>
            <span className="text-white font-bold">©</span>{" "}
            <span className="text-oceanic font-bold">2026 Elena Díaz</span>
          </p>
          <p className="text-teal font-bold">Beyond the Resume</p>
        </div>
      </Container>
      <a
        href="#top"
        aria-label="Volver arriba"
        className="fixed bottom-25 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-teal/30 bg-graphite/80 text-teal backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:bg-teal hover:text-white"
      >
        ↑
      </a>
    </footer>
  );
}
