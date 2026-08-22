import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "@/components/common/github-icon";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";
import {
  ProjectPreview,
  type ProjectPreviewVariant,
} from "@/components/sections/project-preview";

const previewByProject: Record<Project["name"], ProjectPreviewVariant> = {
  "Corrige-Me": "essay",
  FinTrack: "chart",
  Vaultify: "vault",
};

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.liveUrl || project.repoUrl);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/40 transition-colors duration-300 hover:border-primary/50">
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview do projeto ${project.name}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <ProjectPreview variant={previewByProject[project.name]} />
          )}
        </div>
        {hasLinks ? (
          <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-lg border border-border bg-background/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <ArrowUpRight className="size-4 text-primary" aria-hidden />
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
            >
              {technology}
            </li>
          ))}
        </ul>

        {hasLinks ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-5">
            {project.liveUrl ? (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver projeto
                </a>
              </Button>
            ) : null}
            {project.repoUrl ? (
              <Button asChild variant="outline">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
