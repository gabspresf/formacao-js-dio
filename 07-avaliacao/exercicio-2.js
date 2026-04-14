/* 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores
Imprima o maior número par e o menor número ímpar

Exemplo:

Entrada:
5
3
4
1
10
8
Saída:
Maior número par: 10
Menor número ímpar: 1

*/
const { gets, print } = require("./funcoes-auxiliares-ex2");

const n = gets(); // número de elementos

let maiorNumeroPar = null; // comecei com null pois não sei qual é o maior número

let menorNumeroImpar = null; // comecei com null pois não sei qual é o menor número

for (let i = 0; i < n; i++) {
  const numero = gets(); // número da vez; número que está sendo avaliado

  if (numero % 2 === 0) {
    if (maiorNumeroPar === null || numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    }
  } else {
    if (menorNumeroImpar === null || numero < menorNumeroImpar) {
      menorNumeroImpar = numero;
    }
  }
}

print("Maior número par: " + maiorNumeroPar);

print("Menor número impar: " + menorNumeroImpar);
