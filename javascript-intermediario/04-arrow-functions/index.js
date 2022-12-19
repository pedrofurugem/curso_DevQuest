//Arrow Function
/*
uma forma abreviada de usar funções, nela não se usa a palavra function
As arrow functions permitem ter um retorno 
implícito, que são valores retornados 
sem ter que usar a palavar return

Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new

//podemos fazer arrow functions sem utilizar os colchetes {}

let resultadoDaSoma = (n1, n2) => {
    return n1 + n2
}

console.log(resultadoDaSoma(12, 5))

*/

//posso simplicar assim
//podemos fazer arrow functions sem utilizar os colchetes {}
let resultadoDaSoma = (n1, n2) => n1 + n2

console.log(resultadoDaSoma(12, 5))

/*
const incentivarQuester = nomeQuester => {
    console.log('Parabéns ' + nomeQuester + ', você chegou ao modulo JS intermediário')
}
incentivarQuester('Roberto')*/

//simplificando
//podemos fazer arrow functions sem utilizar os colchetes {}
const incentivarQuester = nomeQuester => console.log('Parabéns ' + nomeQuester + ', você chegou ao modulo JS intermediário')

incentivarQuester('Roberto')


//fazendo uma
let resultadoMult = (n1, n2) => n1 * n2
console.log("resultadoMult = " + resultadoMult(7, 5))

let multiplica3numeros = (n1, n2, n3) =>  n1 * n2 * n3
console.log(multiplica3numeros(7, 5, 6))


