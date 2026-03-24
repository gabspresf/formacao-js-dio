function sayMyName(name) {
  // declarando uma função
  console.log("Your name is: " + name);
}

sayMyName("Gabriela"); // chamando a função

//

function quadrado(valor) {
  return valor * valor;
}

const quadradoDeDez = quadrado(10); // chamei a função, parei o parâmetro, executou e está me retornando um resultado
console.log(quadradoDeDez);

//

function incrementarJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));

/* // 1. Declaração: Criando a "máquina de fazer sucos"
function fazerSuco(fruta) {
  return "Aqui está o seu suco de " + fruta;
}

// 2. Chamada: Usando a "máquina"
let copo = fazerSuco("Laranja"); 
console.log(copo); // Resultado: "Aqui está o seu suco de Laranja"

O que é o quê?
function: A palavra que avisa ao computador: "Ei, vou criar uma função!".

fazerSuco: O nome que você escolheu para ela.

(fruta): O parâmetro. É o espaço reservado para a "matéria-prima" que a função vai usar.

return: Ela diz o que a função deve "cuspir" de volta para você. Sem o return, a função faz o trabalho
mas não te entrega nada.

*/
