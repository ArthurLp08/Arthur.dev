import { Reveal } from "@/components/common/reveal";
import { SectionHeading } from "@/components/common/section-heading";
import { techIcons } from "@/components/common/tech-icons";
import { stack } from "@/data/profile";

export function Stack() {
  return (
    <section
      id="stack"
      className="flex flex-col justify-center scroll-mt-16 sm:min-h-svh"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal>
          <SectionHeading caption="Stack" title="Ferramentas que uso." />
        </Reveal>

        <div className="relative -mx-6 mt-12 sm:mx-0">
          <ul
            aria-label="Stack de tecnologias"
            tabIndex={0}
            className="flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 sm:focus-visible:outline-none lg:grid-cols-4"
          >
            {stack.map((item, index) => {
              const Icon = techIcons[item.name];
              return (
                <Reveal
                  key={item.name}
                  delay={index * 0.04}
                  className="w-[72%] shrink-0 snap-start sm:w-auto"
                >
                  <li className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-5 shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-out motion-safe:hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07]">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                    <div className="relative flex items-center justify-between">
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

          <span
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:hidden"
          />
        </div>
      </div>
    </section>
  );
}
