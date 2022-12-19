//um numero indefinido de parâmetros para uma função
//é passado para a função como um argumento
/*function(a, b, ...args){
    //
}*/

function incentivarQuester(mensagem, nomeQuester){
    console.log(`${mensagem} ${nomeQuester}`)
}

incentivarQuester('Parabéns por ter chegado ao modulo de javaScript avançado, ', 'Pedro')

//se eu quiser incentivar mais de um quester
/*function incentivarQuester(mensagem, ...nomeQuesters){
    console.log(nomeQuesters)
    console.log(`${mensagem} ${nomeQuesters}`)//põe todo mundo no mesmo parâmetro
}

incentivarQuester('Parabéns por terem chegado ao modulo de javaScript avançado, ', 'Pedro ', 'Roberto ', 'Vinny Honda')*/

//posso usar o map para incentivar um por um
//o parâmetro rest vem sempre por ultimo na ista de argumentos
//para usar o parâmetro rest, devo acrescentar os 3pontos 
//no ultimo pergunta
function incentivarQuester(mensagem, ...nomeQuesters){
    //sem map
    console.log(`${mensagem} ${nomeQuesters}`)
    nomeQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`)) //por que do map? R: se eu quiser incentivar 1 por 1
}

incentivarQuester('Parabéns por terem chegado ao modulo de javaScript avançado, ', 'Pedro ', 'Roberto ', 'Vinny Honda', 1, true)

