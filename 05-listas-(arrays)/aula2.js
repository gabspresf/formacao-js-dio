// estrutura de repetição for: percorre uma quantidade específica de vezes;
// parte 1 é declaração do index (variável de controle);
// parte 2 é a estrutura condicional que vai dizer se entra ou não no for;
// parte 3 é o que vai acontecer depois que terminar de executar o for;
// na parte 2 se faz a condição que vai alterar a variável;
// i++ é a mesma coisa que: let i = 1, i = 1 + 1;
// i++ incrementa 1 na própria variável;

const nome = "Gabriela Prestes Farias";

for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra);
}
