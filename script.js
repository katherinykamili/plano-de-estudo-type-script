// Este arquivo adiciona pequenas interações sem depender de bibliotecas externas.
// O site continua funcionando mesmo se o JavaScript estiver desativado.

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");
const moduleCards = document.querySelectorAll(".module-card");
const topicButtons = document.querySelectorAll(".topic-card");
const modal = document.querySelector("#topic-modal");
const modalTitle = document.querySelector("#modal-title");
const modalIntro = document.querySelector("#modal-intro");
const modalSteps = document.querySelector("#modal-steps");
const modalCode = document.querySelector("#modal-code");
const modalActivity = document.querySelector("#modal-activity");
const modalGoal = document.querySelector("#modal-goal");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");

let lastFocusedElement = null;

// Banco de conteúdos das matérias. Cada chave combina com o data-topic dos botões.
const topics = {
  introducao: {
    title: "Introdução ao TypeScript",
    intro: "TypeScript é JavaScript com uma camada de tipos. Você escreve arquivos .ts, o compilador verifica possíveis erros e gera JavaScript para o navegador executar.",
    steps: [
      "Entenda que navegadores executam JavaScript, não TypeScript diretamente.",
      "Crie um arquivo com a extensão .ts para escrever seu código tipado.",
      "Use o comando tsc para compilar TypeScript em JavaScript.",
      "Abra o JavaScript gerado no navegador ou execute com Node.js."
    ],
    code: `let linguagem: string = "TypeScript";
let baseadoEmJavaScript: boolean = true;

console.log(linguagem, baseadoEmJavaScript);`,
    activity: "Crie um arquivo chamado primeiro-contato.ts. Declare uma variável com seu nome, outra com a linguagem estudada e mostre as duas no console.",
    goal: "Perceber que TypeScript usa a base do JavaScript, mas permite declarar tipos."
  },
  tipos: {
    title: "Tipos primitivos",
    intro: "Tipos primitivos representam valores simples. Os mais comuns no começo são string para textos, number para números e boolean para verdadeiro ou falso.",
    steps: [
      "Crie uma variável de texto usando string.",
      "Crie uma variável numérica usando number.",
      "Crie uma variável lógica usando boolean.",
      "Tente trocar um valor por outro tipo e observe o alerta do editor."
    ],
    code: `let nome: string = "Lia";
let idade: number = 22;
let matriculada: boolean = true;`,
    activity: "Monte uma ficha de estudante com nome, idade, cidade e se a pessoa já concluiu a primeira aula.",
    goal: "Aprender a escolher tipos básicos para dados simples."
  },
  funcoes: {
    title: "Funções tipadas",
    intro: "Em TypeScript, uma função pode declarar o tipo de cada parâmetro e também o tipo do valor que ela retorna.",
    steps: [
      "Defina o nome da função pensando na ação que ela executa.",
      "Informe o tipo de cada parâmetro entre parênteses.",
      "Depois dos parênteses, informe o tipo de retorno.",
      "Retorne um valor compatível com o tipo prometido."
    ],
    code: `function calcularMedia(nota1: number, nota2: number): number {
  return (nota1 + nota2) / 2;
}

console.log(calcularMedia(8, 9));`,
    activity: "Crie uma função chamada criarResumo que receba o nome de um conteúdo e a quantidade de horas estudadas, retornando uma frase.",
    goal: "Entender como tipos deixam funções mais previsíveis e fáceis de usar."
  },
  objetos: {
    title: "Objetos e interfaces",
    intro: "Objetos guardam vários dados relacionados. Interfaces descrevem quais propriedades esse objeto deve ter.",
    steps: [
      "Pense em uma entidade real, como Aluno, Produto ou Conteudo.",
      "Liste quais informações essa entidade precisa guardar.",
      "Crie uma interface com essas propriedades e tipos.",
      "Crie objetos que seguem o formato da interface."
    ],
    code: `interface Conteudo {
  titulo: string;
  concluido: boolean;
  horas: number;
}

const aula: Conteudo = {
  titulo: "Interfaces",
  concluido: false,
  horas: 2
};`,
    activity: "Crie uma interface LivroEstudo com titulo, autor, paginas e concluido. Depois crie dois livros usando essa interface.",
    goal: "Modelar dados com contratos claros e reutilizáveis."
  },
  classes: {
    title: "Classes",
    intro: "Classes são moldes para criar objetos com propriedades e comportamentos. Elas ajudam quando um mesmo tipo de objeto precisa ter métodos próprios.",
    steps: [
      "Crie uma classe com nome iniciado por letra maiúscula.",
      "Use constructor para receber os dados iniciais.",
      "Declare métodos para representar ações desse objeto.",
      "Use new para criar uma instância da classe."
    ],
    code: `class Curso {
  constructor(public titulo: string, public horas: number) {}

  descrever(): string {
    return \`\${this.titulo} tem \${this.horas} horas de estudo.\`;
  }
}

const curso = new Curso("TypeScript", 20);`,
    activity: "Crie uma classe Aluno com nome e trilha. Adicione um método apresentar que retorna uma frase com esses dados.",
    goal: "Organizar dados e ações dentro de uma mesma estrutura."
  },
  generics: {
    title: "Generics",
    intro: "Generics permitem criar código flexível sem perder o tipo original. É como dizer: esta função serve para vários tipos, mas quero preservar o tipo usado.",
    steps: [
      "Crie uma função com <T> antes dos parâmetros.",
      "Use T para indicar o tipo recebido.",
      "Retorne um valor que preserve esse mesmo tipo.",
      "Teste a função com string, number e objetos."
    ],
    code: `function pegarPrimeiro<T>(lista: T[]): T {
  return lista[0];
}

const primeiroNome = pegarPrimeiro(["Ana", "Bia"]);
const primeiroNumero = pegarPrimeiro([10, 20]);`,
    activity: "Crie uma função chamada pegarUltimo que receba uma lista de qualquer tipo e retorne o último item.",
    goal: "Criar funções reutilizáveis mantendo segurança de tipos."
  },
  narrowing: {
    title: "Narrowing",
    intro: "Narrowing é o processo de afunilar um tipo. Quando uma variável pode ter mais de um tipo, você faz verificações para descobrir qual tipo está sendo usado naquele momento.",
    steps: [
      "Crie uma variável ou parâmetro com union type.",
      "Use typeof, if ou comparações para verificar o tipo.",
      "Dentro do bloco, use recursos específicos daquele tipo.",
      "Crie uma resposta para cada possibilidade."
    ],
    code: `function formatar(valor: string | number): string {
  if (typeof valor === "number") {
    return valor.toFixed(2);
  }

  return valor.toUpperCase();
}`,
    activity: "Crie uma função exibirCodigo que aceite string ou number. Se for number, transforme em texto. Se for string, deixe em letras maiúsculas.",
    goal: "Tratar valores flexíveis sem abrir mão da segurança."
  },
  projeto: {
    title: "Projeto prático: Cadastro de Estudos",
    intro: "O projeto final junta os conceitos principais: tipos, interfaces, arrays, funções e organização de dados.",
    steps: [
      "Crie os tipos StatusEstudo e Dificuldade.",
      "Crie uma interface Estudo com titulo, dificuldade e status.",
      "Crie um array para guardar os estudos cadastrados.",
      "Crie uma função para adicionar novos estudos ao array.",
      "Crie uma função para listar apenas estudos concluídos."
    ],
    code: `type StatusEstudo = "não iniciado" | "em andamento" | "concluído";

interface Estudo {
  titulo: string;
  dificuldade: "básico" | "intermediário" | "avançado";
  status: StatusEstudo;
}

const estudos: Estudo[] = [];`,
    activity: "Implemente a função adicionarEstudo e cadastre três conteúdos: um básico, um intermediário e um avançado.",
    goal: "Construir a base lógica do sistema final usando TypeScript de verdade."
  }
};

// Abre e fecha o menu em telas pequenas.
menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Fecha o menu depois que a pessoa clica em um link.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Destaca o card clicado para indicar o módulo que está em foco.
moduleCards.forEach((card) => {
  card.addEventListener("click", () => {
    moduleCards.forEach((item) => item.classList.remove("is-active"));
    card.classList.add("is-active");
  });
});

function renderList(listElement, items) {
  listElement.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listElement.appendChild(li);
  });
}

function openTopicModal(topicKey) {
  const topic = topics[topicKey];

  if (!topic) {
    return;
  }

  lastFocusedElement = document.activeElement;
  modalTitle.textContent = topic.title;
  modalIntro.textContent = topic.intro;
  modalCode.textContent = topic.code;
  modalActivity.textContent = topic.activity;
  modalGoal.textContent = topic.goal;
  renderList(modalSteps, topic.steps);

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeTopicModal() {
  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

topicButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTopicModal(button.dataset.topic);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeTopicModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    closeTopicModal();
  }
});
