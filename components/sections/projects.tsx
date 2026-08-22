import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectGallery } from "@/components/sections/project-gallery";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projetos"
      className="flex min-h-svh flex-col justify-center scroll-mt-16 bg-card/50"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              caption={`${String(projects.length).padStart(2, "0")} / Projetos`}
              title="O que eu construo."
            />
            <span
              aria-hidden
              className="hidden items-center gap-2 font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground sm:inline-flex"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              Web
            </span>
          </div>
        </Reveal>

        <div className="mt-12 lg:mt-16">
          <ProjectGallery />
        </div>
      </div>
    </section>
  );
}
