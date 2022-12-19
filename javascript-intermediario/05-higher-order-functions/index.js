//ESTUDAR ESSA PARTE ATÉ FAZER SOZINHO
//higher order functions = funções de ordem superior
/*
Em Javascript, funções podem ser atribuídas a variáveis ​​da 
mesma forma que strings ou arrays. Eles podem ser passados 
​​para outras funções como parâmetros ou retornados deles também.

Uma “função de ordem superior” é uma função
 que aceita funções como parâmetros e/ou retorna uma função.
*/
//passar parametros de uma função para outra função = call back
/*const calcularAnoNascimento = function(idade, mesNascimento, imprimir){ um dos parâmetros é uma função
    const mesAtual = 10
    let anoDeNascimento = 2022 - idade
    if(mesNascimento > mesAtual) anoDeNascimento-- //caso não chegou no mês do aniversário
    
    imprimir(anoDeNascimento) chama a função abaixo de imprimir

    console.log(imprimir)
}
passando um parametro para outra função
let imprimiAnoDeNascimento = anoDeNascimento => {
    console.log('Seu ano de nascimento é: ' + anoDeNascimento)
}
passando uma função como parâmetro para outra função
calcularAnoNascimento(26, 4, imprimiAnoDeNascimento)*/
                //idade , mês, ano de nascimento
//outro exemplo
/*
function dobrar(numero){
    return numero * 2
}
function triplicar(numero){
    return numero * 3
}
function quadruplicar(numero){
    return numero * 4
}
console.log(dobrar(2)) 
console.log(triplicar(2)) 
console.log(quadruplicar(2)) //4
*/

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}
let dobrar = multiplicar(2) //multiplicador
let triplicar = multiplicar(3) //multiplicador - atribui ao parametro da primeira função
let quadruplicar = multiplicar(4) //multiplicador
console.log(dobrar(3)) //numero
console.log(triplicar(3)) //numero - atribui ao parametro da segunda função
console.log(quadruplicar(3)) //numero




function div(divisor){
    return function(numerador){
        return numerador / divisor
    }
}

let por2 = div(2) //divisor     atribui ao parametro da primeira  função
let por3 = div(3) //divisor
let por4 = div(4) // divisor
console.log(por2(4)) //numerador atribui ao parametro da segunda função
console.log(por3(9))  //numerador
console.log(por4(16)) //numerador


const calcularAnoNascimento = function(idade, mesNasc, imprimir){
    const mesAtual = 10
    const anoNasc = 2022 - idade
    if(mesAtual < mesNasc) anoNasc--

    imprimir(anoNasc)
}

let imprimiAnoNasc = anoNasc => {
    console.log("Seu ano de nascimento é: " + anoNasc)
}

calcularAnoNascimento(26, 4, imprimiAnoNasc)





