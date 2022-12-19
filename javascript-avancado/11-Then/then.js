//uma função chamada quando a anteriror for executada, Then para encadear as funções
let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            console.log('é necessário colocar a chaleira com a água e ligar o fogão senão te cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}
//só mostrando que se pode passar argumentos
let passarOCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: café foi passado')
        resolve(true)
    })
}

let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}

let lavarXicara = (cafeTomado) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xicara')
        resolve(true)
    })
}

let chaleiraEstaNoFogao = true
let fogaoEstaligado = true
//detalhe que todas as funções possuem uma próxima
ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado).then(() => {
        return passarOCafe();
    }).then(() => { //a função passar café depende do termino da função ferver água
        return tomarCafe();
    }).then(() => {
        return lavarXicara();
    }).then(() => {
        console.log('Finalizado ritual do café, bora trampar')
})