let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('começando o processo de ferver a água')
            resolve()
        }else{
            console.log('é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject()
        }
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true

let passarCafe = () => console.log('passando café')
//passando a função
//posso usar o then após retornar uma promisse
ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado).then(passarCafe)
console.log('fazendo café')