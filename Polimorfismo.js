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

    atacar(alvo) {
        console.log(`${this.nome} realizou um ataque básico em ${alvo.nome}`);
        alvo.receberDano(this.poderDeAtaque);
    }
}

class Guerreiro extends Personagem {
    constructor(nome, poderDeAtaque, forcaFisica) {
        super(nome, poderDeAtaque);
        this.forcaFisica = forcaFisica;
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.forcaFisica;
        console.log(`${this.nome} cortou com o machado em ${alvo.nome}!`);
        alvo.receberDano(dano);
    }
}

class Mago extends Personagem {
    constructor(nome, poderDeAtaque, poderMagico) {
        super(nome, poderDeAtaque);
        this.poderMagico = poderMagico;
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.poderMagico * 2;
        console.log(`${this.nome} lançou um Avada Kedavra em ${alvo.nome}!`);
        alvo.receberDano(dano);
    }
}

const guerreiro = new Guerreiro('Thorkell', 150, 350);
const mago = new Mago('Harry', 20, 350);

guerreiro.atacar(mago);
console.log(mago.exibirStatus());

console.log('-----------');

mago.atacar(guerreiro);
console.log(guerreiro.exibirStatus());
