const precoCombustivel = 5.87;
const gastoPorKm = 10;
const distanciaViagem = 300;

console.log("Você precisa de: "+ ((distanciaViagem/gastoPorKm)*precoCombustivel).toFixed(2)+ "R$");