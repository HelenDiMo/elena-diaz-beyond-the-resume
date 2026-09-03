import Container from "@/components/ui/Container";
import { skills } from "@/data/skills";
import Certifications from "@/components/sections/Certifications";

type SkillItem = {
  name: string;
  logo?: string;
};

type SkillCardProps = {
  title: string;
  description: string;
  items: string[] | SkillItem[];
};

function SkillCard({ title, description, items }: SkillCardProps) {
  return (
    <div className="rounded-xl border border-teal p-6 transition-colors hover:border-oceanic">
      <h3 className="text-xl font-semibold text-oceanic">{title}</h3>

      <p className="mt-4 leading-relaxed text-white">{description}</p>

      <ul className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => {
          if (typeof item === "string") {
            return (
              <li key={item} className="rounded-full border px-3 py-1 text-sm">
                {item}
              </li>
            );
          }

          return (
            <li
              key={item.name}
              className="flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
            >
              {item.logo && (
                <img
                  src={item.logo}
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5 object-contain"
                />
              )}

              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-teal">
            Habilidades & Herramientas
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl text-oceanic">
            Perfil 360º
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
            <Certifications />
          </div>
        </div>
      </Container>
    </section>
  );
}
