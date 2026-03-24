/*
    2- Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (peso  / (altura * altura));
    Instancie uma pessoa chamada José que tenha 70kg de peso 1,75 de altura e peça ao José para dizer o valor
    do seu IMC. Faça, também, uma função que diga onde as pessoas se enquadram no IMC.

*/

class Pessoa {
  nome;
  peso;
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarIMC() {
    const imc = this.calcularIMC();

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
}

const jose = new Pessoa("Jose", 70, 1.75);
const gabriela = new Pessoa("Gabriela", 61.5, 1.62);

console.log(jose.classificarIMC());
console.log(gabriela.classificarIMC());
