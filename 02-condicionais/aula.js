// tipos de variáveis booleanas (true or false)

const numero = 5;

const ehNumeroPar = (numero % 2) === 0; // % é o resto da divisão

// se o resto da divisão for 0 então o número é par (true), se não, é ímpar (false)
// sempre uma condicional vai retornar um boolean

// operadores condicionais (if/else)

if (ehNumeroPar) {
    console.log('Número par');
} else {
    console.log('Número ímpar');
}

// if (!numeroPar) { // converte o booleano para o oposto
//    console.log('Número ímpar')
// }