export type Project = {
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  category: string;
  featured?: boolean;
  liveUrl: string | null;
  githubUrl: string | null;
};

export const projects = [
  {
    title: "Corrige-Me",
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
    category: "Web · IA",
    featured: true,
    liveUrl: "https://corrige-me.vercel.app/",
    githubUrl: "https://github.com/ArthurLp08/CorrigeMe-App",
  },
  {
    title: "FinTrack",
    description:
      "Aplicação para gerenciamento e visualização de finanças pessoais.",
    image: "/projects/fintrack.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Web · Finanças",
    liveUrl: "https://fiintrack.vercel.app",
    githubUrl: "https://github.com/ArthurLp08/Fintrack",
  },
  {
    title: "Vaultify",
    description: "Gerenciador e armazenador de senhas pessoais.",
    image: "/projects/vaultify.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Web · Segurança",
    liveUrl: "https://vaulltify.vercel.app/",
    githubUrl: "https://github.com/ArthurLp08/Vaultify",
  },
] satisfies Project[];
