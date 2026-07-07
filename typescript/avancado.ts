// Nível avançado: generics, keyof e classes.

interface Curso {
  id: number;
  titulo: string;
  categoria: string;
  ativo: boolean;
}

// Generic com keyof: a chave precisa existir dentro do objeto pesquisado.
function buscarPorPropriedade<T, K extends keyof T>(
  lista: T[],
  chave: K,
  valor: T[K]
): T | undefined {
  for (const item of lista) {
    if (item[chave] === valor) {
      return item;
    }
  }

  return undefined;
}

class TrilhaDeEstudos {
  constructor(public nome: string, private cursos: Curso[]) {}

  listarAtivos(): Curso[] {
    return this.cursos.filter((curso) => curso.ativo);
  }
}

const cursos: Curso[] = [
  { id: 1, titulo: "TypeScript Básico", categoria: "front-end", ativo: true },
  { id: 2, titulo: "Generics na prática", categoria: "front-end", ativo: false }
];

const encontrado = buscarPorPropriedade(cursos, "id", 1);
const trilha = new TrilhaDeEstudos("TypeScript do Zero", cursos);

console.log(encontrado);
console.log(trilha.listarAtivos());
