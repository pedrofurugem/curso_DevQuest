//exemplo de objeto e suas propriedades / atributos
let tenis = {  
 // chave: valor
    cor: 'branco',
    tamanho: 40,
    emEstoque: true
}

console.log(tenis)

//imprimindo o valor de uma propriedade
console.log(tenis.cor)

//outra forma de imprimir o valor de uma propriedade
console.log(tenis['emEstoque'])

//adicionando uma nova propriedade
tenis.valor= 200
console.log(tenis)