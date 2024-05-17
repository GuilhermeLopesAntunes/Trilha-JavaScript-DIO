const nota1 = 5;
const nota2=5;
const nota3=3;

const media = (nota1+nota2+nota3)/3;

console.log("Sua nota foi: "+ media.toFixed(2))
if(media<5){
    console.log("Não aprovado")
}else if(media >= 5 && media <= 7){
    console.log("Recuperação")
}else{
    console.log("Aprovado")
}