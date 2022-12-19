let selectDeEstado = document.querySelector("select[name='estado']") //atenção a isso               //mudar evento
selectDeEstado.addEventListener('change', function(){
    alert('mudou o select')
})
console.log(selectDeEstado)

//outra forma de fazer sem ser colocar dentro de variável
//forma encadiada
document
    .querySelector("select[name='estado']")
    .addEventListener('change', function(event){ //pegando o evento que foi disparado
        console.log(event.target.value) //pegando o valor de onde foi disparado, target: de onde o evento foi disparado
    });
