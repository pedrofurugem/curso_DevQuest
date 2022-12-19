/*  REVER AULA DEPOIS
Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
criando uma promessa, um encadeamento de callbacks
4 estados:
   Pendente
   Realizada/Resolvida Resolve
   Recusada Reject
   Estabelecida
*/
        //mudar status / reject
/*new Promise((resolve, reject) => {
    
})*/

//mais fácil usando arrow functions

let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject) => { //Promisse são classes
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('começando o processo de ferver a água')
            resolve() //status para realizado
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject() //recusada, mudar se houver algum problema
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true
ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
console.log('fazendo café')



let fumarCachimbo = (tabacoNoCachimbo, ascenderEsqueiro) => {
    return new Promise((resolve, reject) => {
        if(tabacoNoCachimbo && ascenderEsqueiro){
            console.log('prontor para tragar um cachimbinho')
            resolve()
        }
        else if(tabacoNoCachimbo === false){
            console.log('tabaco precisa estar no cachimbo')
            reject()
        }
        else if(ascenderEsqueiro === false){
            console.log("precisa ascender o esqueiro")
            reject()
        }
    })
}

let tabacoNoCachimbo = false
let ascenderEsqueiro = true
fumarCachimbo(tabacoNoCachimbo, ascenderEsqueiro)