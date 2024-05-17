function calcularPrecoFinal(tipoPagamento,valorDoProduto,parcelas){
    if(tipoPagamento === 'Débito'){
        return valorDoProduto*0.9;
    }else if(tipoPagamento==='Dinheiro'||tipoPagamento==='PIX'){
        return valorDoProduto*0.85
    }else if(tipoPagamento==='Crédito' && parcelas<=2){
        return valorDoProduto
    }else{
        return (valorDoProduto*0.1) + valorDoProduto
    }

}

(function (){
    console.log("Valor total a pagar: "+ calcularPrecoFinal('Crédito',255,3))
})()