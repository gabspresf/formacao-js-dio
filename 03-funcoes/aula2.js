function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Acima do peso";
  } else if (imc >= 30 && imc < 40) {
    return "Obeso";
  } else {
    return "Obesidade grave";
  }
}

// Main
(function () {
  const peso = 62;
  const altura = 1.6;

  const imc = calcularImc(peso, altura);

  console.log(classificarImc(imc));
})();

// todo trecho de codigo que for de uma responsalibidade única é bom isolar para diminuir a complexidade e ficar
// mais legível

// no js as funções são como se fossem objetos, um valor

/*
função imediatamente invocada: ela se cria e se executa (não preciso chamar mais o main)

sendo assim eu posso tirar o nome da função (função não nomeada)

só existe dentro dos parênteses, não consigo mais chama-la fora da função pois existe uma variável
para referencia-la

faz sentido quando o código for ser executado uma vez só

(function () {
    const peso = 62;
    const altura = 1.60;

    const imc = calcularImc(peso, altura);

    console.log(classificarImc(imc));
})()

*/
