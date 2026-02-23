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
        this.#pontosDeVida -= valor;

        if (this.#pontosDeVida <= 0) {
            this.#pontosDeVida = 0;
            return `${this.nome} morreu!`;
        }

        return `${this.nome} recebeu ${valor} de dano. Vida atual: ${this.#pontosDeVida}`;
    }
}

const ladino = new Personagem('Thorffin', 45);

console.log(ladino.receberDano(30));

console.log('------');

console.log(ladino.receberDano(80));
