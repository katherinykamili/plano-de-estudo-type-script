// Nível intermediário: objetos, interfaces, union types e funções.

type StatusEstudo = "não iniciado" | "em andamento" | "concluído";
type Dificuldade = "básico" | "intermediário" | "avançado";

interface ConteudoEstudado {
  titulo: string;
  dificuldade: Dificuldade;
  status: StatusEstudo;
  horasEstimadas?: number;
}

const estudos: ConteudoEstudado[] = [
  {
    titulo: "Tipos primitivos",
    dificuldade: "básico",
    status: "concluído",
    horasEstimadas: 2
  },
  {
    titulo: "Interfaces",
    dificuldade: "intermediário",
    status: "em andamento"
  }
];

function listarConcluidos(lista: ConteudoEstudado[]): ConteudoEstudado[] {
  return lista.filter((conteudo) => conteudo.status === "concluído");
}

console.log(listarConcluidos(estudos));
