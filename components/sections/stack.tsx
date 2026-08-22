import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { techIcons } from "@/components/common/tech-icons";
import { stack } from "@/data/profile";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-16">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading caption="Stack" title="Ferramentas que uso." />
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((item, index) => {
            const Icon = techIcons[item.name];
            return (
              <Reveal key={item.name} delay={index * 0.04} className="h-full">
                <li className="group h-full rounded-xl border border-border p-5 transition-colors duration-300 hover:border-primary/50 hover:bg-card">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground/80 transition-colors duration-300 group-hover:text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {Icon ? (
                      <Icon
                        aria-hidden
                        className="size-5 text-muted-foreground/80 transition-colors duration-300 group-hover:text-foreground"
                      />
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
