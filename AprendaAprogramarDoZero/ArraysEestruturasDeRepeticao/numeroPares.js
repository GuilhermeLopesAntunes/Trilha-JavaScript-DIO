const numeros = [2,4,5,10,23,24,109,111]
const pares = []
const impares = []

for(let i = 0; i < numeros.length;i++){
    if(numeros[i]%2===0){
        pares.push(numeros[i]);
    }else{
        impares.push(numeros[i])
    }
}

console.log(pares)
console.log(impares);