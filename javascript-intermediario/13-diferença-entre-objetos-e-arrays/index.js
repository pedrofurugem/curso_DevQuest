//Diferença entre array e objeto

//array
let frutas = ['uva', 'banana', 'melão']
console.log(frutas)

//objetos: usamos quando queremos agrupar 
//informações
//objetos possuem estruturas de chave e valor
let videoGame = {
    nome: 'Playstation',
    valor: 5000
}

let videoGame2 = {
    nome: 'Xbox',
    valor: 3000
}

//adicionando objetos dentro de um array
let videoGames = [videoGame, videoGame2]

console.log(videoGames)


//pegando um objeto específico dentro do array
console.log(videoGames[1])

//pegando um atributo específico dentro do objeto
//que esta dentro do array
console.log(videoGames[1].nome)
