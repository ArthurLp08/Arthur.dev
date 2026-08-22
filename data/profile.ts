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
  { label: "Stack", href: "#stack" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#experiencia" },
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

export type StackItem = {
  name: string;
  description: string;
};

export const stack = [
  {
    name: "React",
    description: "Base das minhas interfaces componentizadas.",
  },
  {
    name: "Next.js",
    description: "Framework para aplicações React full-stack.",
  },
  {
    name: "TypeScript",
    description: "Tipagem forte e código mais confiável.",
  },
  {
    name: "JavaScript",
    description: "Fundação da lógica no navegador.",
  },
  {
    name: "Tailwind CSS",
    description: "Estilização rápida e consistente.",
  },
  {
    name: "Supabase",
    description: "Backend com banco de dados e autenticação.",
  },
  {
    name: "Git",
    description: "Versionamento e histórico do código.",
  },
  {
    name: "GitHub",
    description: "Colaboração e hospedagem dos projetos.",
  },
] satisfies StackItem[];

export type Experience = {
  category: string;
  title: string;
  organization: string;
  period: string;
  description: string;
};

export const experience = [
  {
    category: "Experiência",
    title: "Estágio supervisionado",
    organization: "VTEC Automação",
    period: "Ago. 2026 - Atualmente",
    description:
      "Integração dos conhecimentos do curso técnico à prática profissional.",
  },
  {
    category: "Evento",
    title: "Devathon",
    organization: "SECOMP · IFCE",
    period: "2026",
    description: "Evento de desenvolvimento realizado durante a SECOMP.",
  },
  {
    category: "Formação",
    title: "Curso Técnico em Informática",
    organization: "EEEP Professor Gustavo Augusto Lima",
    period: "2024 – 2026",
    description:
      "Formação técnica que fundamentou minha entrada no desenvolvimento.",
  },
] satisfies Experience[];
