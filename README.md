# Arthur Lopes — Portfólio

Portfólio pessoal de [Arthur Lopes](https://github.com/ArthurLp08), Front-end Developer em formação.

**Site:** [arthurlp08.vercel.app](https://arthurlp08.vercel.app)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://motion.dev)

## Sobre o projeto

Portfólio minimalista e dark, com foco em tipografia, espaço negativo e microinterações discretas. Tema único escuro com accent `#A3E635`.

Seções: Hero · Sobre · Stack · Projetos · Trajetória · Contato + Footer integrado.

Destaques técnicos:

- Server Components por padrão; Client Components apenas onde há interatividade real
- Animações de entrada via viewport com respeito a `prefers-reduced-motion`
- Metadata completa: Open Graph dinâmico (`next/og`), Twitter Cards, JSON-LD, sitemap e robots
- Imagens otimizadas com `next/image` e `sizes` por breakpoint
- 100% estático (SSG)

## Estrutura

```
app/
├── layout.tsx            # Metadata global, fontes, preloader
├── page.tsx              # Composição das seções + JSON-LD
├── globals.css           # Design tokens (tema dark)
├── opengraph-image.tsx   # OG image gerada via next/og
├── icon.png / apple-icon.png
├── robots.ts / sitemap.ts
components/
├── common/               # Reveal, ícones, preloader, mouse glow
├── layout/               # Navbar, mobile menu, footer
├── sections/             # Hero, About, Stack, Projects, Experience, Contact
└── ui/                   # Componentes shadcn/ui
data/
├── profile.ts            # Dados pessoais, stack, experiência
└── projects.ts           # Dados dos projetos
lib/
├── site.ts               # URL base do site
└── utils.ts
public/
├── logoAL.png / perfil.png
└── projects/
```

Conteúdo e apresentação ficam separados: textos, links e listagens vivem em `data/`, componentes apenas renderizam.

## Rodando localmente

Pré-requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando         | Descrição                          |
| --------------- | ---------------------------------- |
| `npm run dev`   | Servidor de desenvolvimento        |
| `npm run build` | Build de produção                  |
| `npm start`     | Serve o build de produção          |
| `npm run lint`  | ESLint                             |

## Variáveis de ambiente

| Variável                | Obrigatória | Descrição                                              |
| ----------------------- | ----------- | ------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`  | Não         | URL canônica do site. Padrão: `https://arthurlp08.vercel.app` |

Usada para canonical, Open Graph, sitemap e robots.

## Deploy

O site é deployado na [Vercel](https://vercel.com). Push em `master` dispara o deploy automaticamente.

## Contato

- [GitHub](https://github.com/ArthurLp08)
- [LinkedIn](https://www.linkedin.com/in/arthurlp08/)
- [Instagram](https://www.instagram.com/arthur.lops08)
- [Email](mailto:josearthurlda@gmail.com)

---

© 2026 Arthur Lopes. Todos os direitos reservados.
