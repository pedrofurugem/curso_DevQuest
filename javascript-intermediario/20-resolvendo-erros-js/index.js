//let varBoleto = 100


//console.log(varBoleto)
//console.log(baalorBoleto)

let inputTelefone = document.getElementById('telefone');

console.log(inputTelefone)

inputTelefone.disabled = true;

function habilitarTelefone(){
    let inputTelefone = document.getElementById('telefone')
    inputTelefone.disabled = false
}

//os erros aparecem na aba console

//importante: ao haver um erro no código, 
//digitar primeiro o nome da linguagem
//tipo: javascript Uncaught ReferenceError: x is not defined