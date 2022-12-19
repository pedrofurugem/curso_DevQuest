/*
1 - Crie um for que conte de 0 até 10
2 - Dentro desse laço você deve dobrar o número
atual.
3 - Apresente a seguinte mensagem para cada número
dentro do laço:
"O dobro do número x é y"

*/
//como fiz
let n = 0
while(n <= 10){
    dobro = n * 2;
    console.log("O dobro numero " + n + " é " + dobro);
    n++;
}

/*fazendo com for */
for (let index = 0; index <= 10; index++) {
    //const dobro = index * 2
    console.log('O dobro do número ' + index + ' é ' + index * 2)
}