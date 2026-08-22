import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { HeroVisual } from "@/components/sections/hero-visual";
import { about } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-16 bg-card/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading caption="Sobre" title="Quem eu sou." />
            </Reveal>

            <Reveal delay={0.15} className="mt-12">
              <HeroVisual />
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {about.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                {about.highlights.map((highlight) => (
                  <li
                    key={highlight.title}
                    className="border-l-2 border-primary/60 pl-4"
                  >
                    <h3 className="text-sm font-semibold text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {highlight.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
