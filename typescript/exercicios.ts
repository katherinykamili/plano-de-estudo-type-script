// Exercícios práticos.
// Resolva apagando os exemplos prontos ou criando novas soluções abaixo de cada desafio.

// 1. Básico
// Enunciado: crie variáveis tipadas para nome, idade e se a pessoa concluiu a aula.
// Dica: use string, number e boolean.
// Objetivo: praticar tipos primitivos.

let alunoExercicio: string = "Seu nome";
let idadeExercicio: number = 0;
let concluiuAula: boolean = false;

// 2. Intermediário
// Enunciado: crie uma interface Produto e uma função para calcular preço com desconto.
// Dica: a função pode receber produto e percentual de desconto.
// Objetivo: praticar interface, objeto e função tipada.

interface Produto {
  nome: string;
  preco: number;
}

function aplicarDesconto(produto: Produto, percentual: number): number {
  return produto.preco - produto.preco * percentual;
}

// 3. Avançado
// Enunciado: crie uma função generic que retorne o último item de uma lista.
// Dica: use <T> para preservar o tipo dos itens.
// Objetivo: praticar generics.

function ultimoItem<T>(lista: T[]): T | undefined {
  return lista[lista.length - 1];
}

console.log(alunoExercicio, idadeExercicio, concluiuAula);
console.log(aplicarDesconto({ nome: "Livro", preco: 80 }, 0.1));
console.log(ultimoItem(["HTML", "CSS", "TypeScript"]));
