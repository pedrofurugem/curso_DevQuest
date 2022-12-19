const seta = document.querySelectorAll('.item')
console.log(seta)

seta.forEach(item => {
    item.addEventListener('click', ()=> {
        const setaAtivada = document.querySelector('.ativo')
        
        if(setaAtivada){
            setaAtivada.classList.remove('ativo')
        }
        
        item.classList.add('ativo')
    })
})