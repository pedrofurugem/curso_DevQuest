/*
map: transformar um array em um array totalmente novo
criar um array novo com o mesmo numero de elementos
*/
let pessoas = [
    { nome: 'Roberto', idade: 33},
    { nome: 'Ricardo', idade: 33},
    { nome: 'Pedro', idade: 26}
]

/*
let nomeDasPessoas = []
for (let i = 0; i < pessoas.length; i++) {
    nomeDasPessoas.push(pessoas[i].nome)
}
console.log(nomeDasPessoas)*/

//usando map - função anonima
/*let nomeDasPessoas = pessoas.map(function(pessoa){
    return pessoa.nome + " têm " + pessoa.idade + " anos de idade" 
})
console.log(nomeDasPessoas)*/

//forma simplificada comm arrow function 
let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " têm " + pessoa.idade + " anos de idade")
console.log(nomeDasPessoas)


let jogos = [
    { nome: 'GTA V', avaliacao: 5},
    { nome: 'Bully', avaliacao: 5},
    { nome: 'Cod', avaliacao: 4},
    { nome: 'miranha', avaliacao: 2}
]
console.log(jogos)
let jogoAv = jogos.map((jogo) => jogo.nome + ' tem avaliacao ' + jogo.avaliacao)
console.log(jogoAv)