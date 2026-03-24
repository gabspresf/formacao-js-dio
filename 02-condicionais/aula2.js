// exemplo com else if

const numero = 12;

const numeroDivisivelPor5 = (numero % 5) === 0;

console.log(numeroDivisivelPor5);

if (numero === 0) {
    console.log('Número inválido');
} else if (numeroDivisivelPor5) {
    console.log('Sim');
} else {
    console.log('Não');
}

// o último else vai executar caso os dois if's de cima não forem executados