import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { ProjectGallery } from "@/components/sections/project-gallery";

export function Projects() {
  return (
    <section
      id="projetos"
      className="flex flex-col justify-center scroll-mt-16 bg-card/50 sm:min-h-svh"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <SectionHeading
              caption={`Projetos`}
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
