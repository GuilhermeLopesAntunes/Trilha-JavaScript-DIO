const precoProduto = 255;
const condicaoDePagamento = 'PIX';
const parcelas = 3;

if(condicaoDePagamento === 'Débito'){
    console.log("Preco com desconto: "+ precoProduto*0.9)
} else if(condicaoDePagamento === 'Dinheiro'|| condicaoDePagamento==='PIX'){
    console.log("Preco com desconto: "+ precoProduto*0.85)
}else if(condicaoDePagamento==='Crédito' && parcelas <=2){
    console.log("Preco com desconto: "+ precoProduto + "Parcelas de: "+precoProduto/2)
}else if(condicaoDePagamento==='Crédito' && parcelas >2 ){
    console.log("Preco com juros: "+ (precoProduto + (precoProduto*0.1)) + "Parcelas de: "+(precoProduto + (precoProduto*0.1))/2)
}