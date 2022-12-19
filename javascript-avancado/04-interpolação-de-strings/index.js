/*const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return "primeiro nome: " + primeiroNome + ", último Nome: " + ultimoNome + ", idade: " + idade;
}
console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));*/

//executando a interpolação de strings
const imprimirInformacoesPessoa = (primeiroNome, ultimoNome, idade) => {
    return `Primeiro Nome: ${primeiroNome}, Ultimo Nome: ${ultimoNome}, Idade: ${idade},`;
}
//console.log(imprimirInformacoesPessoa("Roberto", "Dias", 33));
console.log(`${imprimirInformacoesPessoa("Pedro", "Roberto", 26)} ele é um DevQuester`)

console.log(`Soma: ${20 + 30}`)