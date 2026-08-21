type SectionHeadingProps = {
  caption: string;
  title: string;
};

export function SectionHeading({ caption, title }: SectionHeadingProps) {
  return (
    <div>
      <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
        <span aria-hidden className="h-px w-8 bg-primary" />
        {caption}
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
