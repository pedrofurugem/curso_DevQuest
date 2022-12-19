//reduce é uma forma mais genérica para se trabalhar com arrays
//resolver casos mais específicos
let ordens = [
    { cliente: 'Roberto', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    { cliente: 'Ricardo', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    { cliente: 'Pedro', tipo: 'venda', quantidade: 21, ativo: 'GOGL34'}
]
 
console.log(ordens)

/*
let quantidadeDeOrdens = 0
for(let i=0; i < ordens.length; i++){
    quantidadeDeOrdens += ordens[i].quantidade
}
console.log(quantidadeDeOrdens)*/

//usando o Reduce
/*
somaOrdens = 0
ordem = o proprio objeto 56 76 21
*/
/*
let quantidadeDeOrdens = ordens.reduce(function(somaOrdens, ordem){
    console.log('ordem: ', somaOrdens, ordem)
    return somaOrdens + ordem.quantidade /* 0 + 56 + 76 + 21 = 153 
}, 0)*///valor inicial seria como isso; let quantidadeDeOrdens = 0

//console.log(quantidadeDeOrdens)


//forma simplificada
let quantidadeDeOrdens = ordens.reduce((somaOrdens, ordem) => somaOrdens + ordem.quantidade, 0)//valor inicial

console.log(quantidadeDeOrdens)

let produtos = [
    { nome: 'controle', tipo: 'venda', estoque: 23},
    { nome: 'tv', tipo: 'venda', estoque: 16, },
    { nome: 'celular', tipo: 'venda', estoque: 11 }
]
console.log(produtos)
let somaEstoque = produtos.reduce((total, soma) => total + soma.estoque, 0)
console.log("soma dos produtos = " + somaEstoque)