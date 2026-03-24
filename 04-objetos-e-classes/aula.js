// objeto é uma coleção dinâmica de chave/valor

// sintaxe:
const pessoa = { // objeto literal
    nome: 'Gabriela Prestes Farias',
    idade: 25,

    descrever: function() { // posso usar os valores do objeto já que a função está dentro dele
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
        // this: quando a função está dentro de um objeto, o this assume o objeto
    }
}

pessoa.descrever();

// método é uma função dentro de um objeto

// console.log(pessoa.nome);
// console.log(pessoa.idade);

// começa e termina com {} e tudo o que estiver dentro delas é uma coleção de chaves
// nome (chave): 'Gabriela Prestes Farias' (valor)

// pessoa.altura = 1.62; // adicionando um valor

// delete pessoa.altura; // deletando um valor

// console.log(pessoa);

// acessando dinamicamente o atributo através de uma string:
// notação de coleção

console.log(pessoa['nome']);

// reatribuindo:
// pessoa = ['nome'] = 'teste'; é a mesma coisa de pessoa.nome = 'teste';
// dinâmico / acesso direto