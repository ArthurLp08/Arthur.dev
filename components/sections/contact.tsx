import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import { InstagramIcon } from "@/components/common/instagram-icon";
import { LinkTooltip } from "@/components/common/link-tooltip";
import { LinkedinIcon } from "@/components/common/linkedin-icon";
import { Reveal } from "@/components/common/reveal";
import { profile } from "@/data/profile";

const contactLinks = [
  {
    label: "GitHub",
    href: profile.githubUrl,
    external: true,
    Icon: GithubIcon,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: "Instagram",
    href: profile.instagramUrl,
    external: true,
    Icon: InstagramIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contato"
      className="flex flex-col justify-center scroll-mt-16 bg-card/50 sm:min-h-svh"
    >
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-24 text-center sm:pb-20 sm:pt-32">
        <Reveal className="flex flex-col items-center">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Contato
          </p>
          <h2 className="mt-6 text-5xl font-bold tracking-tight sm:text-7xl">
            Vamos conversar<span className="text-primary">?</span>
          </h2>
          <span aria-hidden className="mt-8 h-px w-12 bg-primary" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Se você tem um projeto, uma oportunidade ou apenas uma ideia para
            compartilhar, ficarei feliz em conversar.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
            {contactLinks.map(({ label, href, external, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={label}
                  className="group relative flex rounded-full p-3 text-muted-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/10 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Icon className="size-6 sm:size-7" aria-hidden />
                  <LinkTooltip label={label} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
