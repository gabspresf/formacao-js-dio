// exercício lista de notas: vai começar vazia e o "aluno" vai adicionando as notas
// for loop vai percorrer as notas e vai fazer a soma

const notas = [];

notas.push(10);
notas.push(5);
notas.push(8);

let soma = 0;

// for loop começa no 0; vai de 0 até o tamanho da lista; toda vez que iterar vai de 1 em 1

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma = soma + nota;
}
const media = soma / notas.length;

console.log(media.toFixed(2));
