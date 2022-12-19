//slice - fatiar o array, sem alterar o original
let fruta = ['Banana', 'Maçã', 'Laranja', 'Uva']
                    //extrai da posicao 1 a 3, mas não pega a ultima
let frutaExtraidas = fruta.slice(1,3)

console.log(frutaExtraidas)

console.log(fruta)

//splice = remendar, remover pela posição, diferente de push e pop
//que só inserem no começo e no início

let frutas = ['Banana', 'Maçã', 'Laranja', 'Uva']
console.log(frutas)

let frutasExtraidas = frutas.splice(1, 2)
console.log(frutasExtraidas)

//removendo e adicionando elementos
let removeEAdiciona =  frutas.splice(1, 2, 'Carambola', 'Maracujá', 'Melancía')
console.log(removeEAdiciona)//aqui ele só imprimi os itens removidos
