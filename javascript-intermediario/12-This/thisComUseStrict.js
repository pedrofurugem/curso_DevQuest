'use strict' //evitar que referências de escopo global vazem
//para o escopo local

//PODE SER IMPORTANTE VER ESSA AULA

//this referência de um objeto
//this é de referencia global
//console.log(this)

console.log(window === this)  //window e this referenciam as mesmas propriedades        

this.name = 'Pedro'  //aqui vaza do escopo global para o escopo local

function saudar() {
    console.log('this  no contexto da função', this)
    console.log('Olá, ' + this.name)
}

saudar() 

//this dentro de uma função em um objeto
let usuario = {
    nome: 'Roberto',
    saudar: function() {
        console.log('this no contexto do methodo: ', this)
        console.log('this.name no contexto do metodo: ', this.nome)
    }
}

usuario.saudar()

/*let comida = {
    nome: 'Espinafre',
    temperatura: 0,
}
                            //simplificando com o this
comida.cozinhar = function(//comidaParaCozinhar 
temperaturaDeCozimento){
    //comidaParaCozinhar.temperatura = temperaturaDeCozimento;
    //usando o this
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(comida, 100)

console.log(comida)*/

//this no escopo de uma função
let comida = {
    nome: 'Espinafre',
    temperatura: 0,
}

comida.cozinhar = function(temperaturaDeCozimento){
    console.log('this no contexto do objeto comida: ', this)
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)