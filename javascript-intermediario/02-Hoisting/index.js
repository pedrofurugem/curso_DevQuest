//Hoisting - içamento
//operador do javascript faz coisas nos bastidores
var pais //declaração
pais = 'Brasil' //atribuição

//o javascript trata isso como duas coisas separadas
//var pais = 'Brasil' //declarando e atribuindo na mesma linha


var pais 
console.log(pais)
pais = 'Brasil' //foi içado para cima mas o valor permaneceu em baixo


//console.log(pais)
//let pais = Brasil //é içada mas não atribui valor nenhum

//resumo: a variavel deve ser usada depois de içada
let pais = 'Brasil'
console.log(pais)