function carro (marca, modelo, peso, cor, quantidadeportas, velocidadeatual, statuscarro){
    this.marca = marca;
    this.modelo = modelo;
    this.peso = peso;
    this.cor = cor;
    this.quantidadeportas = quantidadeportas;
    this.velocidadeatual = velocidadeatual;
    this.statuscarro = statuscarro;

}

const meucarro = new carro("Wolks", "Tcross", "1000", "Vermelho", 4, 0, "desligado")

function ligar() {
    meucarro.statuscarro = "Ligado";
}

console.log(meucarro)
ligar()
console.log(meucarro)

function acelerar() {
    meucarro.velocidadeatual = meucarro.velocidadeatual +10;
    }
    console.log(meucarro)
    acelerar()
    acelerar()
    console.log(meucarro)

    function frear() {
        
        if (meucarro.velocidadeatual <0){
            meucarro.velocidadeatual = 0
        }else {
            meucarro.velocidadeatual = meucarro.velocidadeatual -10;
        }

    }
    frear()
    frear()
    console.log(meucarro)

    function desligado() {
        meucarro.statuscarro = "desligado";
        meucarro.velocidadeatual = 0;
    }
    desligado()
    console.log(meucarro)
    

