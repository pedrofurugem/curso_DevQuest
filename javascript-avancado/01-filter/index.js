/*filter é uma função que aceita
outra função por parâmetro
filtra para outro array com um número menor de elementos
A função abaixo servirá para filtrar o array de cima
*/
let pessoas = [
    { nome: 'Roberto', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'Pedro', idade: 26}
]
/*
let pessoasComIdadeDe33Anos = []
for(let i = 0; i < pessoas.length; i++){
    if(pessoas[i].idade === 33){
        pessoasComIdadeDe33Anos.push(pessoas[i])
    }
}
console.log(pessoas)
console.log(pessoasComIdadeDe33Anos)*/

//usando filter - função anonima
//filter recebe uma função com parâmetro, também conhecido como callBack
//usando função anonima
/*let pessoasComIdadeDe33Anos = pessoas.filter(function(pessoa) {
    return pessoa.idade === 33
})
console.log(pessoasComIdadeDe33Anos)*/

//forma simplificada com arrow function call back
let pessoasComIdadeDe33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)
console.log(pessoasComIdadeDe33Anos)
//pessoa seria o parâmetro para acessar o atributo do array


let filmes = [
    { nome:'maverick', avaliacao: 5 },
    { nome:'Amsterdã', avaliacao: 5 },
    { nome:'vingadolis', avaliacao: 3 },
    { nome:'liga da justiça', avaliacao: 3 },
    { nome:'Chuck', avaliacao: 2 },
    { nome:'Thor amor e trovao', avaliacao: 1 },
    { nome:'Sharknado', avaliacao: 0.5 }
]

let filmesComAvaliacao5 = filmes.filter((filme) => filme.avaliacao === 5 )
console.log(filmesComAvaliacao5)

let filmesBaixaAvaliacao = filmes.filter((filme) => filme.avaliacao <= 1)
console.log(filmesBaixaAvaliacao)
                   //filtra o array, parametro para acessar o atributo
let filmesMedianos = filmes.filter((filme) => filme.avaliacao < 4 && filme.avaliacao > 2)
console.log(filmesMedianos)