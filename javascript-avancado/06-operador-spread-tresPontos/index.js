//expandir os elementos de um objeto iteravel
//O Spread concatena arrays e clona objetos
const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas) //...finais para usar a variável spread

/* CONCATENAR ARRAYS */
let pessoas1 = ['Roberto', 'Ricardo', 'Raphael']
let pessoas2 = ['Pedro', 'João', 'Paulo']

//pessoas1 = pessoas1.concat(pessoas2) //isso deu erro por conta da constante
pessoas1 = [ ...pessoas1, ...pessoas2 ]
console.log(pessoas1)

/* CLONAR OBJETO */

const pessoa1 = { nome: 'Roberto', idade: 33 }


const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)
console.log(pessoa1)
