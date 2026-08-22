"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;

type ProjectGalleryItemProps = {
  project: Project;
};

export function ProjectGalleryItem({ project }: ProjectGalleryItemProps) {
  const [active, setActive] = useState(false);
  const primaryHref = project.liveUrl ?? project.githubUrl;
  const featured = Boolean(project.featured);

  return (
    <article
      onMouseEnter={primaryHref ? () => setActive(true) : undefined}
      onMouseLeave={primaryHref ? () => setActive(false) : undefined}
      className="flex h-full flex-col"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border bg-card/40 transition-colors duration-300",
          active ? "border-primary/50" : "border-border"
        )}
      >
        <div
          className={cn(
            "relative w-full",
            featured ? "aspect-[16/9] lg:aspect-[21/10]" : "aspect-[16/11]"
          )}
        >
          {project.image ? (
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{
                scale: active ? 1.04 : 1,
                filter: active ? "brightness(1.08)" : "brightness(1)",
              }}
              transition={{ duration: 0.5, ease: easeOut }}
            >
              <Image
                src={project.image}
                alt={`Preview do projeto ${project.title}`}
                fill
                sizes={`(min-width: 1024px) ${featured ? "100vw" : "50vw"}, (min-width: 640px) 50vw, 100vw`}
                className="object-cover"
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-card/60">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {project.title}
              </span>
            </div>
          )}

          <motion.div
            aria-hidden
            className="absolute inset-0 bg-background/20"
            initial={false}
            animate={{ opacity: active ? 0 : 1 }}
            transition={{ duration: 0.4, ease: easeOut }}
          />

          <motion.span
            aria-hidden
            className="absolute bottom-4 left-4 flex items-center gap-2 rounded-lg border border-border bg-background/85 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur-sm"
            initial={false}
            animate={{ opacity: active ? 1 : 0, y: active ? 0 : 8 }}
            transition={{ duration: 0.3, ease: easeOut }}
          >
            Ver projeto
            <ArrowUpRight className="size-3.5 text-primary" />
          </motion.span>
        </div>

        {primaryHref ? (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver projeto ${project.title}`}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className="absolute inset-0 rounded-xl focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring"
          />
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between gap-x-6 px-1">
        <h3
          className={cn(
            "text-lg font-semibold tracking-tight transition-colors duration-300",
            active ? "text-primary" : "text-foreground"
          )}
        >
          {project.title}
        </h3>

        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {project.category}
          </span>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} no GitHub`}
              className="-my-2 flex rounded-full p-2 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <GithubIcon className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
