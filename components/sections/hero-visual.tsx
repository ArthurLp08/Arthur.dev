import { profile } from "@/data/profile";

const lines = [
  <>
    <span className="text-primary">const</span>{" "}
    <span className="text-foreground">developer</span> = {"{"}
  </>,
  <>
    {"  "}name: <span className="text-primary">&quot;{profile.name}&quot;</span>,
  </>,
  <>
    {"  "}role: <span className="text-primary">&quot;front-end&quot;</span>,
  </>,
  <>
    {"  "}stack: [<span className="text-primary">&quot;React&quot;</span>,{" "}
    <span className="text-primary">&quot;Next.js&quot;</span>,{" "}
    <span className="text-primary">&quot;TypeScript&quot;</span>],
  </>,
  <>
    {"  "}openToWork: <span className="text-primary">true</span>,
  </>,
  <>{"}"}</>,
];

export function HeroVisual() {
  return (
    <div aria-hidden className="relative hidden lg:block">
      <div className="absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[110px]" />

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 backdrop-blur-xl">
        <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <div className="relative flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <span className="font-mono text-xs text-muted-foreground">
            arthur.ts
          </span>
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-primary/70" />
          </span>
        </div>

        <pre className="relative overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
          <code>
            {lines.map((line, index) => (
              <span key={index} className="block whitespace-pre">
                <span className="mr-4 inline-block w-4 select-none text-right text-muted-foreground/50">
                  {index + 1}
                </span>
                {line}
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
