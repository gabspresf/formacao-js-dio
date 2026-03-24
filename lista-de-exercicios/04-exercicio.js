// exercícios funções (invocando uma função dentro de outra função)

// 01 - função que escreve meu nome

function escrevaMeuNome(nome) {
  return "O seu nome é: " + nome;
}

const resultadoNome = escrevaMeuNome("Gabriela"); // guardando o resultado da função em uma variável

console.log(resultadoNome);

// 02 - função para verificar se sou maior de idade

function verificarIdade(idade) {
  if (idade >= 18) {
    return escrevaMeuNome("Gabriela") + " e você é maior de idade";
  } else {
    return "Menor de idade";
  }
}

const idade = 25;
const resultadoIdade = verificarIdade(idade); // guardando o resultado da função em uma variável

console.log(resultadoIdade);

// também existe essa forma:

/* function verificarIdade(idade) {
    if (idade >= 18) {
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

verificarIdade(25);

*/
