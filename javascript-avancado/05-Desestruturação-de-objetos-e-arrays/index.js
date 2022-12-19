//mapear as propriedades na declaração do objeto

//DESESTRUTURAÇÃO DE UM OBJETO
let pessoa = { nome: 'Pedro', sobrenome: 'Furuguem', idade: 26 }

/*let nome = pessoa.nome
let idade = pessoa.idade
let sobrenome = pessoa.sobrenome

console.log(nome)
console.log(idade)*/

//aplicando a desestruturação
//let { nome: nome, idade: idade, sobrenome: sobrenome } = pessoa

//podemos deixar só o nome da variável
//let { nome, idade, sobrenome } = pessoa

//caso eu queira colocar um nome diferente das minhas propriedades
let { nome, idade, sobrenome: sobrenomeDaPessoa } = pessoa
console.log(nome)
console.log(sobrenomeDaPessoa)
console.log(idade)

//DESESTRUTURAÇÃO DE UM ARRAY
const numeros = [1, 2, 3];
//ele se baseia no indice para fazer o mapeamento
const [um, dois, tres, quatro] = numeros
console.log(um)
console.log(dois)
console.log(tres)
console.log(quatro) //undefined