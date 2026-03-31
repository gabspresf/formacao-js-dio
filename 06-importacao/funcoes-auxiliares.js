// gets() pega uma leitura como se fosse de alguém digitando
// print() é o console.log()

function gets() {
  return 10;
}

function print(texto) {
  console.log(texto);
}

// exportando um objeto que tem a função gets() e print()
module.exports = { gets, print };
