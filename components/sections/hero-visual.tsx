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
      <div className="absolute left-1/2 top-1/2 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]" />

      <div className="rounded-xl border border-border bg-card/60 shadow-none backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="font-mono text-xs text-muted-foreground">
            arthur.ts
          </span>
          <span className="flex gap-1.5">
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-border" />
            <span className="size-2 rounded-full bg-primary/60" />
          </span>
        </div>

        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
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
