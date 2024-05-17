/* Crie uma classe para representar carros
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado, Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar o percurso.
*/

class Carro{
    marca;
    cor;
    gastoKM;

    constructor(marca, cor, gastoKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoKM = gastoKM;
    }

    calcularPreco(quantidadeKm){
        
        return (quantidadeKm/this.gastoKM)*5.67;
    }
    descricaoDoCarro(){
        console.log(`O carro é um ${this.marca} da cor ${this.cor} e faz ${this.gastoKM} KM por litro`)
    }
}

const carro1 = new Carro('Ford','Vermehlo',10.7);

carro1.descricaoDoCarro();
console.log((carro1.calcularPreco(300)).toFixed(2));

