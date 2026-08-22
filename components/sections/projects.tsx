import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projetos" className="scroll-mt-16 bg-card/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading caption="Projetos" title="O que eu construo." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08} className="h-full">
              <li className="h-full">
                <ProjectCard project={project} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
