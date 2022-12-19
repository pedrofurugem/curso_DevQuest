//iterando com arrays
/*let frutas = ['banana', 'maçã', 'laranja', 'perâ']
for(let i=0; i < frutas.length; i++){
}*/

//posso fazer dessa maneira aqui também
let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length
//console.log(frutas)
//console.log(frutasTamanho)
for(let i=0; i < frutasTamanho; i++){
    console.log('fruta: ' + frutas[i])
}

//usando foreach
//tem um call-back
frutas.forEach(function(item, indice, array){
    console.log('Fruta: ' + array)
})

/*
item: 
Fruta: banana
Fruta: maçã
Fruta: laranja
Fruta: perâ

indice:
Fruta: 0
Fruta: 1
Fruta: 2
Fruta: 3

array: (4)Fruta: banana,maçã,laranja,perâ
*/

//metodo push, adicionando item no fim da lista
frutas.push('manga')
console.log('push = ' + frutas)

//pop - remove o ultimo item do array
frutas.pop()
console.log('pop = ' + frutas)

//shift - remove o primeiro item do array
frutas.shift()
console.log('shift = ' + frutas)

//unshift - adiciona um elemento no começo do array [0]
frutas.unshift('morango')
console.log('unshift = ' + frutas)

//busca por um elemento em específico no array
let posLaranja = frutas.indexOf('laranja')
console.log('indexof = ' + posLaranja)//2