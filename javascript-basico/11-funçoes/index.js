/*           minusMaius()
    function nomeDaFuncao(){
        <bloco de execução>
    }

    nomeDaFuncao() chamada da função
*/

/*           minusMaius()
    function nomeDaFuncao(parametro1, parametro2){
        <bloco de execução>
    }

    nomeDaFuncao(parametro1, parametro2) chamada da função
*/
       
function incentivarQuester(){
    alert('você chegou ao js, continue assim');
}

incentivarQuester()


function incentivarQuester(nomeQuestuer){
    alert('Muito bem ' + nomeQuestuer +' você chegou ao js, continue assim');
}

incentivarQuester('Roberto')

function incentivarQuester(nomeQuestuer = 'Quester'){
    alert('Muito bem ' + nomeQuestuer +' você chegou ao js, continue assim');
}

incentivarQuester()

    /*assinatura da função*/ 
function soma(n1, n2){
    //console.log(n1 + n2)
    return n1 + n2
}

soma(1, 3)

//atribuindo uma função a uma variável
let resultadoDaSoma = soma(1, 3)
console.log(resultadoDaSoma) //4

resultadoDaSoma = soma(resultadoDaSoma, 10)
console.log(resultadoDaSoma) //14


function multiplica3numeros(n1, n2, n3){
    return n1 * n2 * n3
}

multiplica3numeros(1, 2, 4)

resultFuncao = multiplica3numeros(1, 2, 3)
console.log("resultado = " + resultFuncao)

function fatorial(n){
    if(n<=1) return 1
    return n * fatorial(n-1)

}

console.log(fatorial(5))
