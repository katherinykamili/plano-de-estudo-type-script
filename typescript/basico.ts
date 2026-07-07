// Nível básico: primeiros tipos em TypeScript.
// Para compilar este arquivo, use: tsc typescript/basico.ts

let nomeDoAluno: string = "Maria";
let idade: number = 18;
let estaEstudando: boolean = true;

// Arrays também podem ser tipados. Aqui, a lista aceita apenas textos.
let topicos: string[] = ["Tipos primitivos", "Funções", "Objetos"];

function criarBoasVindas(nome: string): string {
  return `Olá, ${nome}! Bem-vinda ao estudo de TypeScript.`;
}

console.log(criarBoasVindas(nomeDoAluno));
console.log(`Idade: ${idade}`);
console.log(`Estudando agora: ${estaEstudando}`);
console.log(topicos);
