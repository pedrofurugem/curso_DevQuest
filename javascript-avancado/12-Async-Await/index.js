let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve(true)
        }else{
            console.log('é necessário colocar a chaleira com a água e ligar o fogão senão te cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

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
/*
ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado).then(() => {
        return passarOCafe();
    }).then(() => {
        return tomarCafe();
    }).then(() => {
        return lavarXicara();
    }).then(() => {
        console.log('Finalizado ritual do café, bora trampar')
})*/
//o async tem de estar na função imediata
async function inicarProcessoDeFazerCafe(){
    const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
    const cafePassado = await passarOCafe(aguaFervida)
    const cafeTomado = await tomarCafe(cafePassado)
    const xicaraLavada = await lavarXicara(cafeTomado)
    if(xicaraLavada) console.log('Finalizado o ritual de tomar café, bora trampar')
    //só posso usar await se houver async acima
}// o await nesse caso vai esperar o termino da função ferver água
inicarProcessoDeFazerCafe()