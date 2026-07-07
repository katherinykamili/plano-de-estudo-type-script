# Plano de Ensino — TypeScript do Zero ao Avançado

Site educacional, minimalista e responsivo para estudar TypeScript do básico ao avançado. O projeto foi inspirado no formato de plano de ensino do repositório de referência informado, com ementa, objetivos, fases, conteúdo programático, cronograma, exercícios, avaliação, recursos e instruções para GitHub Pages.

## Objetivo

Ensinar TypeScript de forma progressiva para iniciantes, explicando a relação com JavaScript e mostrando exemplos práticos com tipos, funções, objetos, interfaces, classes, generics e organização de projeto.

## Funcionalidades do site

- Página principal com apresentação do curso
- Ementa completa de TypeScript
- Fases de aprendizagem do básico ao avançado
- Cards de matérias com pop-up de explicação
- Passo a passo para cada tema
- Atividades práticas com objetivo de aprendizagem
- Conteúdo programático com exemplos
- Cronograma com 12 aulas
- Projeto final proposto
- Critérios de avaliação
- Instruções para rodar e publicar no GitHub Pages

## Estrutura

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
├── assets/
│   └── hero-typescript.png
├── conteudos/
│   └── guia-de-estudos.md
└── typescript/
    ├── basico.ts
    ├── intermediario.ts
    ├── avancado.ts
    └── exercicios.ts
```

O arquivo `script.js` controla o menu mobile, o destaque dos cards e os pop-ups das matérias. Cada matéria fica cadastrada em um objeto chamado `topics`, com título, explicação, passo a passo, exemplo de código e atividade.

## Como visualizar o site

1. Baixe ou clone este projeto.
2. Abra a pasta no VS Code.
3. Abra o arquivo `index.html` no navegador.

O site é estático, então não precisa de servidor local para funcionar.

## Como instalar o TypeScript

Instale o Node.js e depois rode:

```bash
npm install -g typescript
```

Confira a instalação:

```bash
tsc --version
```

## Como compilar os exemplos

Use o compilador `tsc` para transformar TypeScript em JavaScript:

```bash
tsc typescript/basico.ts
tsc typescript/intermediario.ts
tsc typescript/avancado.ts
tsc typescript/exercicios.ts
```

Depois da compilação, arquivos `.js` serão gerados ao lado dos arquivos `.ts`.

## Conteúdos trabalhados

- Introdução ao TypeScript
- Diferença entre JavaScript e TypeScript
- Tipagem estática
- Tipos primitivos
- Arrays, objetos e funções
- Interfaces e Types
- Classes
- Generics
- Union Types e Literal Types
- Narrowing
- Modules
- TypeScript com HTML/CSS/JS
- TypeScript em projetos front-end
- Boas práticas
- Projeto final

## Projeto final

O projeto proposto é o **Sistema de Cadastro de Estudos em TypeScript**, com:

- Cadastro de conteúdos estudados
- Nível de dificuldade
- Status: `não iniciado`, `em andamento` ou `concluído`
- Lista de estudos
- Uso de tipos, interfaces, funções e arrays

## Publicação no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos deste projeto para o repositório.
3. Acesse `Settings`.
4. Entre em `Pages`.
5. Em `Branch`, selecione `main` e a pasta `/root`.
6. Salve e aguarde o link de publicação.

## Referências

- [Documentação oficial do TypeScript](https://www.typescriptlang.org/docs/)
- [MDN JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [GitHub Pages](https://pages.github.com/)
- [W3Schools TypeScript](https://www.w3schools.com/typescript/)
