import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import { LinkedinIcon } from "@/components/common/linkedin-icon";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contato" className="scroll-mt-16 bg-card/50">
      <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <Reveal className="flex flex-col items-center text-center">
          <p className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            <span aria-hidden className="h-px w-8 bg-primary" />
            Contato
          </p>
          <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Vamos construir algo juntos
            <span className="text-primary">?</span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Se você quiser conversar sobre projetos, desenvolvimento ou
            oportunidades, entre em contato.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-11 px-6 text-sm font-medium"
            >
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-6 text-sm font-medium"
            >
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-11 px-6 text-sm font-medium"
            >
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon />
                GitHub
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
