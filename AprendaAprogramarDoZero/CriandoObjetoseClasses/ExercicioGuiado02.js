/* 2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome,peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC*peso(altura*altura)) 
Instancie uma pessoa chamada josé que tenha 70 kg e 1,75 de altura e peça josé para dizer o valor do seu IMC

IMC em adultos Condição:

- Adulto de 10.5 - Abaixo do Peso
- Entre 10.5 e 25 Peso Normal
- Entre 25 e 38 Acima do Peso
- Entre 38 e 40 Obesos
- Acima de 40 Obesidade grave
*/

class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2);
    }

    classificarIMC(IMC) {
        if (IMC < 18.5) {
            return 'Abaixo do Peso';
        } else if (IMC >= 18.5 && IMC < 25) {
            return 'Peso Normal';
        } else if (IMC >= 25 && IMC < 38) {
            return 'Acima do Peso';
        } else if (IMC >= 38 && IMC < 40) {
            return 'Obeso';
        } else{
            return 'Obesidade grave';
        }
    }

    dizerIMC() {
        const IMC = this.calcularIMC();
        const condicao = this.classificarIMC(IMC);
        console.log(`O valor do meu IMC é ${IMC} e minha condição é ${condicao}.`);
    }
}

const jose = new Pessoa('Jose', 70, 1.70);
jose.dizerIMC();
