document.getElementById('tirar-carta').addEventListener('click', ()=> {
    tirarUmaCartaAleatoriaDoBaralho()
})
//criar o conjunto de cartas
async function criarBaralhoEmbaralhado(){
    const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1" //endpoints
    const resposta = await fetch(url) //fetch busca os resultados de uma api
    return await resposta.json()    //await para não estar pendente 
    //return direto                 //.json() para pegar o objeto
    //const json = await resposta.json() //json transforma o corpo do objeto
    //console.log(json)
}

async function tirarUmaCarta(deck_id){
    const url = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1` //endpoints
    const resposta = await fetch(url) //fetch busca os resultados de uma api
    return await resposta.json() //.json() para pegar o objeto
}

async function tirarUmaCartaAleatoriaDoBaralho(){
    const baralho = await criarBaralhoEmbaralhado()
    const carta = await  tirarUmaCarta(baralho.deck_id)
    const imagemCarta = carta.cards[0].image
    document.getElementById('carta').src = imagemCarta //exibir a imagem
}

tirarUmaCartaAleatoriaDoBaralho()
console.log('segue o fluxo sem esperar')