"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/reveal";
import { ProjectGalleryItem } from "@/components/sections/project-gallery-item";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const INITIAL_VISIBLE = 3;

export function ProjectGallery() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;
  const remaining = projects.length - visibleCount;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-14">
        {visibleProjects.map((project, index) => (
          <li
            key={project.title}
            className={cn("h-full", project.featured && "lg:col-span-2")}
          >
            <Reveal delay={(index % INITIAL_VISIBLE) * 0.08} className="h-full">
              <ProjectGalleryItem project={project} />
            </Reveal>
          </li>
        ))}
      </ul>

      {hasMore ? (
        <div className="mt-12 flex justify-center sm:mt-14">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setVisibleCount(projects.length)}
            className="h-11 rounded-full px-6 text-sm font-medium duration-300 ease-out hover:border-primary hover:bg-primary hover:text-primary-foreground motion-safe:hover:-translate-y-0.5"
          >
            Carregar mais projetos
            <span className="font-mono text-xs text-muted-foreground">
              +{remaining}
            </span>
            <ChevronDown aria-hidden />
          </Button>
        </div>
      ) : null}
    </div>
  );
}
