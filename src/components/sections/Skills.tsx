import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";

type SkillCardProps = {
  title: string;
  description: string;
  items: string[];
};

function SkillCard({ title, description, items }: SkillCardProps) {
  return (
    <div className="rounded-xl border p-6">
      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="mt-4 leading-relaxed">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-full border px-3 py-1 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em]">
            Skills & Ecosystem
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Un perfil 360º
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            Una combinación de experiencia de negocio, análisis de datos,
            inteligencia artificial y competencias profesionales.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <SkillCard
            title={skills.business.title}
            description={skills.business.description}
            items={skills.business.items}
          />

          <SkillCard
            title={skills.data.title}
            description={skills.data.description}
            items={skills.data.items}
          />

          <SkillCard
            title={skills.ai.title}
            description={skills.ai.description}
            items={skills.ai.items}
          />

          <SkillCard
            title={skills.tools.title}
            description={skills.tools.description}
            items={skills.tools.items}
          />

          <div className="md:col-span-2">
            <SkillCard
              title={skills.softSkills.title}
              description={skills.softSkills.description}
              items={skills.softSkills.items}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
