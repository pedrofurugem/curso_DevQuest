//É função sem nome
//atribuir uma função a uma variável
//e retornar para essa função

/*função comum*/
function somar(n1, n2){
    return n1 + n2
}

let resultado = somar(12, 5)
console.log(resultadoDaSoma)


//função anonima
/*
Uma função anônima é uma função sem nome.
Uma função anônima geralmente não está acessível após a sua criação.
*/

let resultadoDaSoma = function(n1, n2){
    return n1 + n2
}

console.log(resultadoDaSoma(12, 5))
//não tem nome
//atribui a uma variável
//posso invocar em um console.log

/*
function()função anonima
()=> arrow function
*/