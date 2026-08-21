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

export type Highlight = {
  title: string;
  description: string;
};

export const about = {
  paragraphs: [
    "Sou Arthur Lopes, desenvolvedor Front-end em formação, com curso técnico em Informática. Construo aplicações web com React, Next.js e TypeScript, buscando sempre unir código bem escrito a interfaces que funcionam de verdade.",
    "Aprendo desenvolvendo: meus projetos nascem de problemas concretos — da correção de redações com IA ao gerenciamento de finanças pessoais. Meu foco agora é transformar essa base em minha primeira oportunidade como desenvolvedor Front-end.",
  ],
  highlights: [
    {
      title: "Projetos reais",
      description: "Aplicações funcionais que resolvem problemas concretos.",
    },
    {
      title: "Código limpo e tipado",
      description: "TypeScript, componentes organizados e reutilizáveis.",
    },
    {
      title: "Foco em UI/UX",
      description: "Interfaces pensadas nos detalhes e na experiência.",
    },
    {
      title: "Aprendizado contínuo",
      description: "Estudo constante de boas práticas e novas ferramentas.",
    },
  ] satisfies Highlight[],
};
