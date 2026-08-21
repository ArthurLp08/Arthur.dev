export const profile = {
  name: "Arthur Lopes",
  role: "Front-end Developer",
  githubUrl: "https://github.com/ArthurLp08",
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];
