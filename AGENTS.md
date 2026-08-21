# AGENTS.md — Portfolio Arthur Lopes

## 1. Contexto

Este projeto é o portfólio pessoal de Arthur Lopes, Front-end Developer em formação.

O objetivo é apresentar de forma profissional:

- quem sou;
- minhas habilidades;
- minha trajetória;
- meus projetos;
- minhas experiências;
- meus contatos.

O portfólio deve transmitir:

- profissionalismo;
- simplicidade;
- domínio técnico;
- atenção a UI/UX;
- personalidade;
- foco em desenvolvimento Front-end.

O portfólio não deve parecer um template genérico.

---

# 2. Regra principal

O `ROADMAP.md` define o que deve ser implementado.

Este arquivo define como o trabalho deve ser realizado.

Antes de implementar qualquer fase:

1. Leia este arquivo.
2. Leia a fase correspondente no `ROADMAP.md`.
3. Analise o código existente.
4. Reutilize componentes quando possível.
5. Implemente somente o escopo da fase atual.

Não implemente funcionalidades de fases futuras.

Não invente informações pessoais, experiências ou tecnologias.

---

# 3. Processo de desenvolvimento

Antes de implementar:

- analisar a estrutura existente;
- verificar componentes existentes;
- verificar dependências;
- entender o design atual;
- identificar o que pode ser reutilizado.

Durante:

- manter o código organizado;
- reutilizar componentes;
- seguir o Design System;
- manter tipagem forte;
- priorizar acessibilidade;
- manter responsividade.

Depois:

- revisar TypeScript;
- revisar responsividade;
- revisar acessibilidade;
- revisar animações;
- verificar possíveis problemas de UX;
- verificar consistência visual.

---

# 4. Stack

Utilizar:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

Não adicionar bibliotecas sem necessidade.

---

# 5. Arquitetura

Preferir:

- Server Components por padrão;
- Client Components somente quando necessários;
- componentes pequenos;
- componentes reutilizáveis;
- tipagem forte;
- separação entre conteúdo e apresentação.

Evitar:

- componentes gigantes;
- arquivos gigantes;
- código duplicado;
- abstrações prematuras;
- `any` sem justificativa.

---

# 6. Estrutura

Preferir uma estrutura semelhante a:

```
app/
├── page.tsx
├── layout.tsx
└── globals.css

components/
├── ui/
├── layout/
├── sections/
└── common/

data/
└── projects.ts

lib/
└── utils.ts

public/
├── images/
└── projects/

```

Informações de projetos devem ficar separadas dos componentes sempre que isso melhorar a manutenção.

7. Design System
Direção visual

O portfólio deve ser:

minimalista;
moderno;
sofisticado;
tecnológico;
limpo;
editorial;
com bastante espaço negativo.

Evitar aparência de:

dashboard;
template corporativo;
landing page genérica;
excesso de cards;
excesso de gradientes;
excesso de efeitos;
excesso de elementos decorativos.

A interface deve parecer um portfólio pessoal cuidadosamente projetado.

8. Cores

Utilizar uma base neutra.

Dark
Background:
#0A0A0A


Foreground:
#F5F5F5


Muted:
#A1A1AA


Border:
#27272A


Card:
#111111
Accent

Utilizar uma única cor de destaque.

Preferência:

Accent:
#A3E635

O accent pode ser utilizado em:

links;
pequenos detalhes;
indicadores;
hover;
CTAs;
elementos gráficos.

Não utilizar accent em grandes áreas.

9. Tipografia

Priorizar uma fonte sans-serif moderna.

Hierarquia:

Hero:
font-size muito grande
font-weight alto
line-height compacto


H2:
grande
forte


H3:
médio
semibold


Body:
legível
relativamente pequeno


Caption:
pequeno
muted
uppercase quando fizer sentido

O Hero deve possuir uma hierarquia muito forte.

10. Espaçamento

Utilizar a escala do Tailwind.

Priorizar:

grandes espaços entre seções;
espaçamento consistente;
alinhamento;
respiro ao redor de textos.

Não preencher espaço vazio desnecessariamente.

Espaço negativo é parte do design.

11. Border Radius

Utilizar radius moderado.

Cards:
rounded-xl


Buttons:
rounded-lg


Tags:
rounded-full


Images:
rounded-xl

Não exagerar em elementos arredondados.

12. Borders

Utilizar bordas discretas.

Preferir:

border-border

Evitar bordas muito contrastantes.

13. Sombras

Utilizar poucas sombras.

A interface deve depender mais de:

espaço;
contraste;
tipografia;
bordas;

do que de sombras.

14. Navbar

A Navbar deve ser:

minimalista;
fixa;
discreta;
responsiva.

Desktop:

Arthur Lopes                    Sobre  Projetos  Contato  GitHub

Mobile:

Arthur Lopes                                      Menu

Comportamento:

inicialmente transparente;
ao rolar, pode receber background sutil;
transição suave;
links fazem scroll para as respectivas seções.
15. Hero

O Hero é a primeira impressão do portfólio.

Deve possuir:

FRONT-END DEVELOPER


Olá, eu sou
Arthur Lopes.


Desenvolvedor Front-end em formação,
focado em React, Next.js e TypeScript.


[Ver projetos] [GitHub]

O texto deve ser curto.

Não criar um Hero cheio de informações.

16. Hero Visual

O Hero deve possuir algum elemento visual complementar.

Pode ser:

elemento abstrato;
composição tipográfica;
referências sutis a código;
pequenos elementos tecnológicos;
animação discreta.

Não utilizar uma grande foto genérica de programador.

Não criar uma interface falsa complexa apenas para preencher espaço.

O elemento visual deve complementar o conteúdo.

# 17. Projetos

Projetos são uma das partes mais importantes do portfólio.

Cada projeto deve apresentar:

- nome;
- descrição;
- problema/objetivo;
- tecnologias;
- imagem ou preview;
- link para projeto;
- link para GitHub quando disponível.

Projetos principais:

### Corrige-Me

Plataforma de correção de redações do ENEM utilizando IA.

Tecnologias:

Next.js
React
TypeScript
Tailwind CSS
Supabase
Gemini API

### FinTrack

Aplicação para gerenciamento e visualização de finanças pessoais.

Tecnologias:

Next.js
React
TypeScript
Tailwind CSS
Supabase

### Vaultify

Projeto de portfólio desenvolvido para demonstrar habilidades de desenvolvimento e construção de produtos digitais.

A descrição, funcionalidades e tecnologias devem refletir exatamente a implementação real do projeto. Não inventar informações.

Não inventar funcionalidades ou informações sobre nenhum projeto.

18. Cards de projetos

Os cards devem ser visualmente fortes.

Ao passar o mouse:

imagem pode sofrer zoom extremamente sutil;
borda pode mudar;
botão pode aparecer;
elemento pode deslocar levemente.

Não exagerar.

O projeto deve continuar sendo legível sem hover.

19. Sobre

A seção Sobre deve ser pessoal, mas profissional.

Deve explicar:

quem sou;
o que estudo;
no que estou focado;
como penso sobre desenvolvimento;
onde quero chegar.

Evitar texto genérico como:

"Sou apaixonado por tecnologia desde pequeno."

Preferir informações concretas.

20. Stack

Mostrar apenas tecnologias que realmente fazem parte da experiência atual.

Priorizar:

React
Next.js
TypeScript
JavaScript
Tailwind CSS
Supabase
Git
GitHub

Tecnologias secundárias podem aparecer sem dominar a seção.

Não criar uma parede enorme de logos.

21. Experiência e trajetória

Apresentar experiências reais.

Podem incluir:

estágio;
projetos;
formação;
eventos;
hackathons;
experiências relevantes.

Não inventar informações.

Caso não exista informação suficiente, manter a seção simples.

22. Contato

A seção deve ser simples.

Exemplo:

Vamos construir algo juntos?


Se você quiser conversar sobre projetos,
desenvolvimento ou oportunidades, entre em contato.


[LinkedIn]
[GitHub]
[Email]

O objetivo é facilitar o contato.

23. Footer

Minimalista.

Pode conter:

Arthur Lopes
Front-end Developer


GitHub • LinkedIn • Email


© 2026 Arthur Lopes
24. Framer Motion

Utilizar Framer Motion para melhorar a experiência.

Priorizar:

entrada suave das seções;
fade;
slide;
hover;
transições;
mudança da navbar ao scroll;
microinterações.

Evitar:

animações constantes;
efeitos exagerados;
elementos pulando;
delays longos;
animações que atrapalhem a leitura.

Respeitar:

prefers-reduced-motion
25. Responsividade

O portfólio deve funcionar perfeitamente em:

mobile;
tablet;
desktop.

Mobile deve ser tratado como uma experiência própria.

Não simplesmente reduzir o desktop.

No mobile:

navbar compacta;
Hero ajustado;
tipografia responsiva;
projetos em uma coluna;
espaçamento reduzido;
botões acessíveis;
sem overflow horizontal.
26. Acessibilidade

Garantir:

HTML semântico;
navegação por teclado;
focus states;
contraste adequado;
alt text;
labels;
aria-label quando necessário.

Não utilizar apenas cor para transmitir informação.

27. Performance

Priorizar:

imagens otimizadas;
next/image;
lazy loading quando apropriado;
Server Components;
evitar JavaScript desnecessário;
animações leves.

Não adicionar bibliotecas apenas para pequenos efeitos.

28. SEO

Implementar:

title;
description;
Open Graph;
favicon;
metadata adequada.

Exemplo:

Arthur Lopes — Front-end Developer
29. Código

Preferir:

código simples;
componentes reutilizáveis;
nomes claros;
tipagem forte;
funções pequenas;
arquivos organizados.

Evitar:

any;
código duplicado;
componentes gigantes;
comentários desnecessários;
abstrações sem necessidade.
30. Regra de conteúdo

Nunca inventar:

experiências;
empresas;
tecnologias;
certificações;
resultados;
números;
clientes;
formação.

Se uma informação não estiver definida, use um placeholder ou peça confirmação.

31. Critério de conclusão

Uma fase só está concluída quando:

funciona;
está responsiva;
segue o Design System;
possui boa UX;
possui acessibilidade básica;
não possui problemas visuais evidentes;
não quebra outras partes do projeto.

Após finalizar uma fase:

Revisar a implementação.
Corrigir problemas encontrados.
Informar o que foi concluído.
Indicar a próxima fase.