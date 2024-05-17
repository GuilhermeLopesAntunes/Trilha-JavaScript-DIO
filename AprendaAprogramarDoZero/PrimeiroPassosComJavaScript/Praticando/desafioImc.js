const peso = 180;
const altura = 1.80;

const imc = peso/Math.pow(altura,2)

console.log(imc.toFixed(2))



if(imc < 10.5){
    console.log("Abaixo do Peso");
}else if(imc >= 10.5 && imc < 25 ){
    console.log("Peso Normal")
}else if(imc>=25 && imc < 38){
    console.log("Acima do Peso")
}else if(imc >=38 && imc < 40){
    console.log("Obeso")
}else{
    console.log("Obesidade Grave")
}