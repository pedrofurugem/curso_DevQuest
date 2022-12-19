/*  
    3 - Verificar se um elemento possui uma classe e alterar sua cor 
    Descrição da tarefa: Ao clicar no quadrado na tela, deve verificar se ele tem a classe azul.  Se tiver, deve alterar a cor do quadrado para a cor azul e mostrar um alerta com o texto “Esse quadrado TEM a classe azul!”. Se já possuir a cor azul, deve remover a cor azul, deixando a cor original.  
    //tentar depois
*/

const pegaQuadrado = document.getElementById('quadrado')
const quadradoAzul = document.querySelector('.quadrado')

//com queryselector também é possível usar addEventListener

pegaQuadrado.addEventListener('click', function() {
    const quadradoAzulAtivado = quadradoAzul.classList.contains('azul')
    if(quadradoAzulAtivado){ //primeiro remove depois add
        quadradoAzul.classList.remove('azul')
    }else{
        alert('Esse quadrado TEM a classe azul!')
        quadradoAzul.classList.add('azul')
    }
})