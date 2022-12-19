/*Nessa tarefa, você deve criar um ou mais inputs na tela. Ao digitar qualquer texto em um desses inputs, a sua borda deverá ficar com a cor verde. Caso o input estiver vazio, a cor da borda deverá voltar ao normal. */

const textInput = document.querySelectorAll('.text-input')

textInput.forEach(input => {
    //usar o próprio input daí em diante
    input.addEventListener("change", () => {
        if(input.value !== ' '){
            input.classList.add('borda-verde')
        }else{
            input.classList.remove('borda-verde')
        }
    })
})