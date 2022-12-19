/*
**setTimeout:** a função é executada apenas uma única vez após um determinado tempo

**setInterval:** a função é executada em intervalos de tempo indefinidamente
*/


//assicronamente, são hiorderfunctions
//setTimeOut: vai executar um bloco de codigo específico
//depois de um determinado periodo de tempo

setTimeout(() => {
   alert('Olá mundo!') 
}, 1000);  

//milisegundos como segundo parâmetro

//setInterval: vai executar um bloco repetidamente em um intervalo de tempo fixo, nós que definimos esse intervalo


setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);

setTimeout(() => {
    console.log('console dentro do setTimeout')
}, 2000);

console.log('console depois do setTimeout')

//podemos parar a execução do setInterval

setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);

const idDoIntervalo = setInterval(() => {
    console.log('Executando a cada 2 segundos')
}, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);


//clearTimeout() é possível usar isso para o Timeout 

const intervalo = setTimeout(() =>{
    console.log('executa em 2 segundos')
}, 2000)

console.log(intervalo)