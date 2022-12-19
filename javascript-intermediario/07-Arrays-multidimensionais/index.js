//Arrays multidimensionais = seria um array dentro de outro array
//dois arrays dentro de um array
let filmes = [
              ['Vingadores', 4.6, true], 
              ['Mulher Maravilha', 4.5, false, ['Gal Gadot', 32]]
             ]    
//acessando elementos col/lin
console.table(filmes[1][3][0])


let games = [
    ['batman arcamcity', 10, true],
    ['bully', 9, false]
]

console.log(games[1][2])