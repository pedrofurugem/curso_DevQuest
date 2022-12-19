let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaligado) => {
    return new Promise((resolve, reject) => {
    //com o throw nós podemso dar essas excessões
        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo booleano é aceito"

        if(chaleiraEstaNoFogao && fogaoEstaligado){
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve(true)
        }else{
            const mensagemDeErro = 'é necessário colocar a chaleira com a água e ligar o fogão senão te cafézinho não vai ficar pronto nunca'
            reject(mensagemDeErro)
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

let chaleiraEstaNoFogao = 'teste'
let fogaoEstaligado = true

//faremos isso usando trycatch

async function inicarProcessoDeFazerCafe(){
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaligado)
        const cafePassado = await passarOCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado) 
    
        throw "Mensagem de erro"
    }catch(error){
        console.log(error)
    }finally{
        console.log('Finalizado o ritual de tomar café, bora trampar')
    }
}

inicarProcessoDeFazerCafe()