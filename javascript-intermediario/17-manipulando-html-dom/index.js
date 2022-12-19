function adicionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario'); // pega o name do input

    let textoDigitado = inputComentario[0].value;

    let novosComentarios = document.getElementById('novos-comentarios'); // pega o id da div onde o texto estará escrito

    /*+= para adicionar a baixo*/
    novosComentarios.innerHTML += `<p>Novo comentário: ${textoDigitado} </p>`
}