/*
    == --- igual --- a==b --- se a igual a b é verdadeiro, 
    senão falso
    != --- diferente --- a != b --- verdadeiro se o a for diferente de b
    === --- idêntico --- a===b --- verdadeiro se a for idêntico a b
    !== -- não idêntico --- a !== b --- verdadeiro se o a não for identico a b
    < --- menor que --- a < b --- verdadeiro quando a for menor que b
    <= --- menor igual que --- a <= b --- veradeiro quando a for menor que b
    > --- maior que --- a > b --- verdadeiro quando a for maior que b
    >= --- maior igual que a >= b --- verdadeiro quando a for maior ou igual a b
*/ 

/*
const a = 1
const b = 3
console.log(a > b)
*/

const a = 2
const b = 2

//&& E

console.log(a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a === b)
// F e V = F

console.log(a > b && a < b)
// F e F = F

/*
OR OU
const a = 2
const b = 2
*/

console.log(a === b || a <= b)
// V ou V = V

console.log(a === b || a < b)
// V ou F = V

console.log(a > b || a === b)
//F ou V = V

console.log(a > b || a < b)
//F ou F = F

/*
NOT
*/

console.log(a === b) //true

console.log(!(a === b)) //false
