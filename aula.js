//Comentário
let readlineSync = require('readline-sync');
var nomePeca;
var pesoPeca = 100;
var capacidade = 10;

pesoPeca = readlineSync.question("Digite o peso da peça: ");
nomePeca = readlineSync.question("Digite o nome da peça: ");
capacidade = readlineSync.question("Digite a quantidade de peças: ");

if (pesoPeca > 100){
    //condição verdadeira
    if (capacidade > 10){
        //condição verdadeira
        console.log("Não Cadastrar, capacidade máxima atingida!!!");
    }else if(nomePeca.length < 3){
        //condição falsa
        console.log("Não Cadastrar, nome inválido!");
    }else{
        console.log("Peça cadastrada com SUCESSO!!!");
    }
}else {
    //condição falsa
    console.log("Não Cadastrar, peso insuficiente");
}