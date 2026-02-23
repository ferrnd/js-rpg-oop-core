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

            if (this.#pontosDeVida < 0) {
                this.#pontosDeVida = 0;
            }
        }
    }

    exibirStatus() {
        const status = this.#pontosDeVida > 0 ? 'Vivo' : 'Derrotado';
        return `${this.nome} está ${status} | Vida restante: ${this.#pontosDeVida}`;
    }
}

const ladino = new Personagem('Thorffin', 45);

console.log(ladino.exibirStatus());

console.log('------');

ladino.receberDano(40);
console.log(ladino.exibirStatus());

console.log('------');

ladino.receberDano(100);
console.log(ladino.exibirStatus());
