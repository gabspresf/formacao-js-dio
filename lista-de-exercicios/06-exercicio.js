/*
    1- Crie uma classe para representar Carros
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível, nos dê o valor
    gasto em reais para realizar este percurso.
*/

// observação: variáveis dentro de um objeto (classe) chama-se atributo; estamos atribuindo ao atributo marca o valor
// marca, que estamos recebendo do construtor

class Carro {
    marca;
    cor;
    gastoMedioPorKM;

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }

    calcularViagem(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10);

// invocando o método

console.log(uno.calcularViagem(70, 5).toFixed(2));
console.log(palio.calcularViagem(70, 5).toFixed(2));

// * criamos a definição de como é um carro que tem os atributos marca, modelo e gasto por KM
// * o carro tem a capacidade de calcular o gasto de um percurso
// * com essas informações é possível instanciar novos carros e ver o desempenho dele com base no percurso
// * pensar já orientado à objetos