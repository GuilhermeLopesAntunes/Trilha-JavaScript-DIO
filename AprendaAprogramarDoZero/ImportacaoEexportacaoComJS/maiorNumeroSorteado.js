/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1-100. Faça um programa que receba 5 números sorteados para os alunos e mostre o maior numero sorteado

Dados de entrada
5
50
10
98
23
Saída
98
*/
const numeros = [5,50,10,98,23];
let i=-1;

function gets(){
    numeros[i];
    i++
    return numeros[i]
}

function print(texto){
    console.log(texto);
}

module.exports = {gets,print}