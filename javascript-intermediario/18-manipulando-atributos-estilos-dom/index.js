//MODIFICANDO ESTILOS CSS
function alterarCorDeFundoPrimeiroPost(){
    let posts = document.getElementsByClassName('post')

    console.log(posts);

    let primeiroPost = posts[0];
    console.log('primeiroPost', primeiroPost) //imprime o primeiro article
    primeiroPost.style.backgroundColor = 'red'; //a propriedade style + o nome de algum elemento para alterar o css
}

//usar console.log para verificar uma variável

function aumentarFonteSegundoPost(){
    let textoPosts = document.getElementsByClassName('texto-post') 
    //adicionando a fonte grande no texto de baixo
    textoPosts[1].classList.add('fonte-grande')//direto do css
    //metodo add para adicionar uma classe
    //ClassLit me da acesso a todas as classes do elemento que quero ver
    console.log(textoPosts[1].classList) 
    //.classList, me concede acesso
    // a todas as classes que tem dentro do elemento
}

//rever este depois
function marcarRadio(genero){
    let radioHomem = document.getElementById('genero-homem')

    let radioMulher = document.getElementById('genero-mulher')

    if(genero === 'M'){
        radioHomem.checked = true
    }
    else if(genero === 'F'){
        radioMulher.checked = true
    }
}