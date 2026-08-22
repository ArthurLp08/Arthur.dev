import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/common/github-icon";
import { LinkedinIcon } from "@/components/common/linkedin-icon";
import { profile } from "@/data/profile";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.githubUrl,
    external: true,
    Icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    external: true,
    Icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    external: false,
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-x-8 gap-y-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-semibold tracking-tight text-foreground">
            {profile.name}
          </p>
          <p className="mt-0.5 text-xs text-muted-foreground">{profile.role}</p>
        </div>

        <ul className="flex items-center gap-2">
          {socialLinks.map(({ label, href, external, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                aria-label={label}
                title={label}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted/50 hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Icon className="size-[18px]" aria-hidden />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
