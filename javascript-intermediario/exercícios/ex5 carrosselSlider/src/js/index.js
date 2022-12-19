/* PENSANDO NA LÓGICA

OBJETIVO 1 - quando clicarmos na seta de avançar temos que
mostrar o próximo cartão na lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    avançar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que
mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    voltar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/

const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')
const imagem = document.querySelectorAll('.slide')
let imagensCont = 0;


setaAvancar.addEventListener('click', ()=> {
    //se contador mais o tamanho
    console.log('conta imagem ' + imagensCont)
    console.log('tamanho' + imagem.length)
    if(imagensCont === imagem.length - 1) return

    imagensCont++;
    esconderImagem()
    mostrarImagem()
    addOpacidade()
})



setaVoltar.addEventListener('click', () => {
    if(imagensCont === 0) return

    imagensCont--;
    esconderImagem()
    mostrarImagem() //a ordem deu certo aqui
    addOpacidade()
})


function mostrarImagem(){
    imagem[imagensCont].classList.add('selecionado')
}

function esconderImagem(){
    const imagemSelecionada = document.querySelector('.selecionado')
    imagemSelecionada.classList.remove('selecionado')
}

function addOpacidade(){
    const ehAprimeiraImagem = imagensCont === 0;
    if(ehAprimeiraImagem){
        setaVoltar.classList.add('opacidade')
    }else{
        setaVoltar.classList.remove('opacidade')
    }

    const chegouNaultimaImagem = imagensCont !== 0 && imagensCont === imagem.length - 1
    if(chegouNaultimaImagem){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
}











//pegar os ids dos botoes TENTA DE NOVO
/*const setaAvancar = document.getElementById('seta-avancar')
const setaVoltar = document.getElementById('seta-voltar')
const imagens = document.querySelectorAll('.slide')
let contImagem = 0*/

/*
verificação - if
 esconder  - classList.remove
 contar - ++, --
 mostrar - classList.add
 add opacidade
*/
/*
setaAvancar.addEventListener('click', ()=> {
    
    if(contImagem === imagens.length - 1) return;

    EscondeImagem()
    contImagem++;
    mostraImagem()
    addOpacidade()
})

setaVoltar.addEventListener('click', ()=> {
    if(contImagem === 0) return;

    EscondeImagem()
    contImagem--;
    mostraImagem()
    addOpacidade()
})

function EscondeImagem(){
    const imagemSelecionada = document.querySelector('.selecionado')
    imagemSelecionada.classList.remove('selecionado')
}

function mostraImagem(){
    imagens[contImagem].classList.add('selecionado')
}

function addOpacidade(){
    const primeiraImagem = contImagem === 0;
    if(primeiraImagem){
        setaVoltar.classList.add('opacidade')
    }else{
        setaVoltar.classList.remove('opacidade')
    }

    const chegouNaUltimaImagem = contImagem !== 0 && 
    contImagem === imagens.length - 1
    if(chegouNaUltimaImagem){
        setaAvancar.classList.add('opacidade')
    }else{
        setaAvancar.classList.remove('opacidade')
    }
}*/

/* PENSANDO NA LÓGICA

OBJETIVO 1 - quando clicarmos na seta de avançar temos que
mostrar o próximo cartão na lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    avançar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que
mostrar o cartão anterior da lista
    - passo 1 - dar um jeito de pegar o elemento HTML da seta
    voltar
    - passo 2 - dar um jeito de indentificar o clique do usuário na seta voltar
    - passo 3 - fazer aparecer cartão anterior da lista
    - passo 4 - buscar o cartão que esta selecionado e esconder
*/