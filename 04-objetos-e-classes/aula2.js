// classe é uma definição de como aquele objeto deve ser
// uma instância é uma "ocorrência" daquele objeto
// pessoa é uma classe que descreve como tem que ser uma pessoa

// constructor é o que acontece quando uma pessoa é instânciada
// sempre vai passar pelo constructor

class Pessoa1 {

    nome;
    idade;
    anoNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2026 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instanciando uma classe:

// const gabriela = new Pessoa('Gabriela', 25);

// gabriela.descrever();
// console.log(gabriela);

// classe é uma definição e a partir de novas instâncias eu vou criando a partir desse modelo

// função que ao invés de receber um valor literal está recebendo um objeto

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const gabriela = new Pessoa('Gabriela', 25);
const mariana = new Pessoa('Mariana', 30);

compararPessoas(gabriela, mariana);