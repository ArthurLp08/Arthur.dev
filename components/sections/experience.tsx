import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section id="experiencia" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading caption="Trajetória" title="Minha jornada." />
        </Reveal>

        <ol className="relative mt-12 space-y-6 sm:space-y-8">
          <span
            aria-hidden
            className="absolute inset-y-0 left-[7.5px] w-px bg-border"
          />

          {experience.map((item, index) => (
            <li key={item.title} className="flex gap-4 sm:gap-6">
              <span aria-hidden className="flex w-4 shrink-0 justify-center">
                <span className="relative z-10 size-2.5 self-center rounded-full bg-foreground ring-[3px] ring-background" />
              </span>

              <Reveal delay={index * 0.08} className="min-w-0 flex-1">
                <article className="rounded-xl border border-border bg-card/70 p-5 transition-all duration-300 ease-out hover:border-primary/50 motion-safe:hover:-translate-y-1 sm:p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {item.category}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
