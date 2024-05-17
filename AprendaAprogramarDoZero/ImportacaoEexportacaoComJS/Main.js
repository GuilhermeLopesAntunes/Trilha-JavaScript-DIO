const {gets,print} =  require('./maiorNumeroSorteado');

const numerosSorteados = []
let i=0

for(i=0;i<5;i++){
    numerosSorteados[i] = gets();
    
}
maior = numerosSorteados[0]
for(i=0;i<5;i++){
    
    if(numerosSorteados[i]>maior){
        maior = numerosSorteados[i]
    }
}
console.log(maior)