type LinkTooltipProps = {
  label: string;
};

export function LinkTooltip({ label }: LinkTooltipProps) {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      {label}
    </span>
  );
}
