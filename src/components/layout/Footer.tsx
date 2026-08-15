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
    </footer>
  );
}
