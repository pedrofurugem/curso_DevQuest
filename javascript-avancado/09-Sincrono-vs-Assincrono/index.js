//assicrono: não há dependencia do fluxo,
//não vai esperar a execução da linha anterior
//para executar

//sincrono: segue um fluxo linear de execução
function colocarAguaParaFerver(){
    console.log('colocar água para ferver')
    //aqui acontece a assincronidade
    setTimeout(() => { //com setTimout definimos a assincronidade chamando a função passar o café
        console.log('água ferveu')
        passarOCafe()
    }, 5000);
}

function prepararParaPassarOCafe(){
    console.log('pegar o pó do café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarOCafe(){
    console.log('passando o café')
}

//assim acontece a sincronidade 
//o prepararParaPassarOcafe depende da execução da linha anterior
colocarAguaParaFerver()
prepararParaPassarOCafe()
