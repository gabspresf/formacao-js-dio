// gets() pega uma leitura como se fosse de alguém digitando
// print() é o console.log()

const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
  const valor = entradas[i];
  i = i + 1;
  return valor;
}

function print(texto) {
  console.log(texto);
}

// exportando um objeto que tem a função gets() e print()
module.exports = { gets, print };
