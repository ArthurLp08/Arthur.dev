export type Project = {
  name: string;
  description: string;
  image: string | null;
  technologies: string[];
  liveUrl: string | null;
  repoUrl: string | null;
};

export const projects = [
  {
    name: "Corrige-Me",
    description: "Plataforma de correção de redações do ENEM utilizando IA.",
    image: "/projects/corrigeme.jpg",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
    ],
    liveUrl: "https://corrige-me.vercel.app/",
    repoUrl: "https://github.com/ArthurLp08/CorrigeMe-App",
  },
  {
    name: "FinTrack",
    description:
      "Aplicação para gerenciamento e visualização de finanças pessoais.",
    image: "/projects/fintrack.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "fiintrack.vercel.app",
    repoUrl: "https://github.com/ArthurLp08/Fintrack",
  },
  {
    name: "Vaultify",
    description: "Gerenciador e armazenador de senhas pessoais.",
    image: "/projects/vaultify.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    liveUrl: "https://vaulltify.vercel.app/",
    repoUrl: "https://github.com/ArthurLp08/Vaultify",
  },
] satisfies Project[];
