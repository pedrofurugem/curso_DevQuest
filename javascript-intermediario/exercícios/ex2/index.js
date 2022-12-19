/*
2 - Multiplicando itens de um array usando o ForEach 
        Você deve criar um array com os seguintes números: 65, 44, 12 e 4. Após a criação, deverá utilizar o laço de repetição forEach para percorrer os itens e realizar a multiplicação de cada um por 10. Pode apresentar o resultado de cada multiplicação usando o console.log()
*/

let num = [65, 44, 12, 4]

num.forEach(function(i, n){
    console.log(num[n] + " * 10 = " + i * 10)
})

/*
como o prof fez

// Passo 1 - Criar a array de elementos.
const numeros = [65, 44, 12, 4];

//Passo 2 - Utilizar essa array declarada para utilizar o laço ForEach.
numeros.forEach((item) => {
		// Passo 3 - No  ForEach, utlizamos uma variável para iterar cada elemento da array.
		console.log(item * 10);
		// Passo 4 - Imprimir os elementos já multiplicados por 10, utilizando o console.log.
});
*/