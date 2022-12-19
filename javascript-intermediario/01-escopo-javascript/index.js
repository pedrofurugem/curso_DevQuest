if(true){
    const mensagem = "Olá"
    console.log(mensagem) //acessivel dentro do escopo
}

//fora do escopo esta inacessivel
console.log(mensagem)

//bloco de código autonomo

//blocos de códigos não criam escopos
//para variáveis declaradas com var
if(true){
    var mensagem = "Olá"
    console.log(mensagem)
}

console.log(mensagem)



//uma função javascript define escopos para variáveis
//criadas com let const e var
function falar(){
    var mensagem = 'Olá mundo!'
    console.log(mensagem) //só acessível dentro da função
}
falar()
console.log(mensagem)


//função dentro de uma função também está sujeito a isso(limite de escopo)
/*qualquer coisa dentro do escopo da função 
só estará acessivel dentro do escopo da função*/

//variável global dentro do arquivo js
let numero = 123


function falar(){
    var mensagem = 'Olá mundo!'
    console.log(mensagem) //só acessível dentro da função
    function falarOutraCoisa(){

    }
    //logando a função
    falarOutraCoisa()
    console.log(falarOutraCoisa)
}
falar()
//console.log(mensagem)
//console.log(falarOutraCoisa)
//Escopo Global 
console.log(url)

/*
Resumo
variável dentro do escopo: só é acessivel dentro do escopo 
variável fora do escopo: pode ser acessível em qualquer lugar
*/