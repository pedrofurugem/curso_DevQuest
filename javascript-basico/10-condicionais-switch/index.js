/*
switch(parametro){
    case valor1:
        <bloco de declaração>
        break
    case valor2:
        <bloco de declaração>
        break
}*/

//usando string
let nomeFilme = 'Cap America'

switch(nomeFilme){
    case 'Chaves':
        console.log('É a serie do chaves')
        break
    case 'Batman':
        console.log('É o filme do batman')
        break
    case 'Cap America':
        console.log('É o filme do cap')
        break
    default:
        console.log('É outro filme')
}

//usando números inteiros
let avaliacao = 3

switch(avaliacao){
    case 1:
        console.log('Pessimo')
        break
    case 2:
        console.log('ruim')
        break
    case 3:
        console.log('mediano')
        break
    case 4:
        console.log('Bom')
        break
    case 5:
        console.log('Excelente')
        break    
    default:
        console.log('nota invalida')
        break
}