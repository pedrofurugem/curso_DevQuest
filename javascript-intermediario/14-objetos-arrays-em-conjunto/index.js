/*let jogo1 = {
    nome: 'Final fantasy'
}

let jogo2 = {
    nome: 'Fallout'
}

//3 objetos jogo dentro de um objeto video-game
let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

let jogo3 = {
    nome: 'Fifa'
}

//adicionando um objeto dentro do objeto
videoGame.jogos.push(jogo3)
console.log(videoGame)*/

//outra forma de adicionar um objeto dentro de outro objeto
let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [
        { nome: 'Final Fantasy'},
        { nome: 'Fallout' }
    ]
}
let jogo3 = {
    nome: 'Fifa'
}
//adicionando um objeto dentro do objeto
videoGame.jogos.push(jogo3)
console.log(videoGame)

//objeto dentro de outro objeto contendo array
//criando um objeto pedido dentro 
//de um objeto cliente

let cliente = {
    nome: 'Roberto',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [ //usando array dentro de objeto aqui
            { nome: 'Fifa' },
            { nome: 'E Footbaal'}
        ]
    }
}

//navegando dentro dos objetos
console.log(cliente.ultimoPedido.jogos[0].nome)