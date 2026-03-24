/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10; // 10km para gastar 1 litro de gasolina
const distanciaEmKm = 100; // percorrendo uma distancia
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = precoGasolina * litrosConsumidos;
    console.log(valorGasto.toFixed(2));
}