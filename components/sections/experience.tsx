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

        <ol className="mt-12 divide-y divide-border">
          {experience.map((item, index) => (
            <li key={item.title}>
              <Reveal
                delay={index * 0.08}
                className="grid gap-x-10 gap-y-3 py-10 sm:grid-cols-[140px_1fr]"
              >
                <span className="font-mono text-sm leading-relaxed text-muted-foreground">
                  {item.period}
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
