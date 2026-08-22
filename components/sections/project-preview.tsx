import { KeyRound } from "lucide-react";

export type ProjectPreviewVariant = "essay" | "chart" | "vault";

const essayLines = [
  { width: "w-11/12", highlight: false },
  { width: "w-full", highlight: false },
  { width: "w-7/12", highlight: true },
];

const chartBars = [35, 60, 42, 78, 52, 95, 68];
const chartHighlight = 5;

function EssayPreview() {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-2.5 bg-card/60 p-6">
      <span className="absolute right-4 top-4 rounded-full border border-primary/40 px-2.5 py-0.5 font-mono text-xs text-primary">
        920
      </span>
      {essayLines.map((line, index) =>
        line.highlight ? (
          <div key={index} className={`${line.width} space-y-1`}>
            <span className="block h-1.5 rounded-full bg-muted-foreground/30" />
            <span className="block h-[3px] w-9/12 rounded-full bg-primary" />
          </div>
        ) : (
          <span
            key={index}
            className={`h-1.5 rounded-full bg-muted-foreground/20 ${line.width}`}
          />
        )
      )}
    </div>
  );
}

function ChartPreview() {
  return (
    <div className="flex h-full w-full items-end justify-center gap-2.5 bg-card/60 px-8 pb-6 pt-10">
      {chartBars.map((height, index) => (
        <span
          key={index}
          style={{ height: `${height}%` }}
          className={`w-4 rounded-t-md sm:w-5 ${
            index === chartHighlight ? "bg-primary/80" : "bg-border"
          }`}
        />
      ))}
    </div>
  );
}

const vaultRows = ["w-14", "w-10", "w-16"];

function VaultPreview() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 bg-card/60 p-6">
      {vaultRows.map((width, index) => (
        <div
          key={index}
          className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2"
        >
          <KeyRound
            className="size-3.5 shrink-0 text-primary/70"
            aria-hidden
          />
          <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
            ••••••••
          </span>
          <span className={`ml-auto h-1.5 rounded-full bg-border ${width}`} />
        </div>
      ))}
    </div>
  );
}

export function ProjectPreview({ variant }: { variant: ProjectPreviewVariant }) {
  if (variant === "essay") return <EssayPreview />;
  if (variant === "chart") return <ChartPreview />;
  return <VaultPreview />;
}
