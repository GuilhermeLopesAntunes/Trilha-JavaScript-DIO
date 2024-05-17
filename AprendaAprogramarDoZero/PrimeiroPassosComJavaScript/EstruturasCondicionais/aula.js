const tipoDoCombustivel = "etanol";
const gastoCombustivel = 10;
const precoGasolina = 5.87;
const precoEtanol = 2.34;
const totalPercorrido = 300;

if(tipoDoCombustivel==="etanol"){
    console.log("O valor que irá pagar: "+ ((totalPercorrido/gastoCombustivel)*precoEtanol).toFixed(2)+" R$")
}else if(tipoDoCombustivel === "gasolina"){
    console.log("O valor que irá pagar: "+ ((totalPercorrido/gastoCombustivel)*precoGasolina).toFixed(2)+" R$")
}
else{
    console.log("Tipo Do Combustível não é válido")
}