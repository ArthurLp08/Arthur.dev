"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FolderCode,
  Layers,
  Mail,
  Route,
  User,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import { usePreloaderReady } from "@/components/common/preloader";
import { useActiveSection } from "@/components/common/use-active-section";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";

const linkIcons: Record<string, LucideIcon> = {
  Sobre: User,
  Stack: Layers,
  Projetos: FolderCode,
  Trajetória: Route,
  Contato: Mail,
};

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const ready = usePreloaderReady();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0, filter: "blur(6px)" }}
      animate={
        ready
          ? { y: 0, opacity: 1, filter: "blur(0px)" }
          : { y: -16, opacity: 0, filter: "blur(6px)" }
      }
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <Image
            src="/logoAL.png"
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
          {profile.name}
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-2 md:flex"
        >
          {navLinks.map((link) => {
            const Icon = linkIcons[link.label];
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative rounded-full p-2 transition-all duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                )}
              >
                <Icon className="size-[18px]" aria-hidden />
                <span
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {link.label}
                </span>
              </a>
            );
          })}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group relative rounded-full p-2 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <GithubIcon className="size-[18px]" />
            <span
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-card px-2 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              GitHub
            </span>
          </a>
        </nav>

        <MobileMenu />
      </div>
    </motion.header>
  );
}
