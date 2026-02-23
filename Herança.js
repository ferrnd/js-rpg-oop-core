class Personagem {
    nome;
    poderDeAtaque;
    #pontosDeVida;

    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#pontosDeVida = 100;
    }

    receberDano(valor) {
        if (valor > 0) {
            this.#pontosDeVida -= valor;
            if (this.#pontosDeVida < 0) this.#pontosDeVida = 0;
        }
    }

    exibirStatus() {
        const status = this.#pontosDeVida > 0 ? 'Vivo' : 'Derrotado';
        return `${this.nome} está ${status} | Vida restante: ${this.#pontosDeVida}`;
    }
}

class Guerreiro extends Personagem {
    constructor(nome, poderDeAtaque, forcaFisica) {
        super(nome, poderDeAtaque);
        this.forcaFisica = forcaFisica;
    }
}

class Mago extends Personagem {
    constructor(nome, poderDeAtaque, poderMagico) {
        super(nome, poderDeAtaque);
        this.poderMagico = poderMagico;
    }
}

const guerreiro = new Guerreiro('Thorkell', 150, 350);
const mago = new Mago('Harry', 20, 350);

console.log(guerreiro.exibirStatus());
console.log(`Atributo único: Força Física = ${guerreiro.forcaFisica}`);

console.log('------');

console.log(mago.exibirStatus());
console.log(`Atributo único: Poder Mágico = ${mago.poderMagico}`);

console.log('------');
mago.receberDano(100);
console.log(mago.exibirStatus());

console.log('------');
guerreiro.receberDano(0.01);
console.log(guerreiro.exibirStatus());
