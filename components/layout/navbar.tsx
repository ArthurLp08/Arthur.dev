"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderCode,
  Layers,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { navLinks, profile } from "@/data/profile";

const linkIcons: Record<string, LucideIcon> = {
  Sobre: User,
  Stack: Layers,
  Projetos: FolderCode,
  Contato: Mail,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
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
          className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          {profile.name}
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-2 md:flex"
        >
          {navLinks.map((link) => {
            const Icon = linkIcons[link.label];
            return (
              <a
                key={link.href}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
              >
                <Icon className="size-[18px]" aria-hidden />
              </a>
            );
          })}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
          >
            <GithubIcon className="size-[18px]" />
          </a>
        </nav>

        <MobileMenu />
      </div>
    </motion.header>
  );
}
