function escreverNome(nome){
    return nome
}

function maioridade(idade){
    if (idade>=18){
        return true;
    }
    else{
        return false
    }
}

function escreverDados(nome,idade){
    if(maioridade(idade)){
        console.log(nome +" é maior de idade")
    }else{
        console.log(nome+ " é menor de idade")
    }
}

(function(){
    escreverDados('Guilherme', 18)
})()
