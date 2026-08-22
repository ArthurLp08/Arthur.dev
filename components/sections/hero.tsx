"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/common/github-icon";
import { usePreloaderReady } from "@/components/common/preloader";
import { profile } from "@/data/profile";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  const ready = usePreloaderReady();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pb-24 pt-16"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 size-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate={ready ? "visible" : "hidden"}
        className="mx-auto grid w-full max-w-5xl gap-16 px-6 lg:grid-cols-[7fr_5fr] lg:items-center"
      >
        <div>
          <motion.p
            variants={item}
            className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground"
          >
            <span aria-hidden className="h-px w-8 bg-primary" />
            Front-end Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl">
              Olá, eu sou
            </span>
            <span className="mt-2 block leading-[1.05]">
              {profile.name}
              <span className="text-primary">.</span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Desenvolvedor Front-end em formação, focado em React, Next.js e
            TypeScript.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full px-6 text-sm font-medium duration-300 ease-out hover:border-primary hover:bg-transparent hover:text-primary motion-safe:hover:-translate-y-0.5"
            >
              <a href="#projetos">Ver projetos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-6 text-sm font-medium duration-300 ease-out hover:border-primary hover:bg-primary hover:text-primary-foreground motion-safe:hover:-translate-y-0.5 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-primary-foreground"
            >
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="order-first mx-auto w-full max-w-[280px] sm:max-w-xs lg:order-none"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[110px]"
            />
            <Image
              src="/perfil.png"
              alt={`Foto de ${profile.name}`}
              width={320}
              height={320}
              priority
              className="aspect-square w-full rounded-full border border-border object-cover"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a seção Sobre"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: ready ? 1.2 : 0, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronDown className="size-5 motion-safe:animate-bounce" aria-hidden />
      </motion.a>
    </section>
  );
}
