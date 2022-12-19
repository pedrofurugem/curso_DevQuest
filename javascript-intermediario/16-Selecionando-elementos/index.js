console.log(document)
//um metodo para buscar
let p = document.getElementById('paragrafo1') //busca por id
console.log(p)

//buscando elementos pelo nome da classe
let inputsPorClasse = document.getElementsByClassName('tag-de-input')
console.log(inputsPorClasse)

//buscando tags pelo nome
let inputPorTag = document.getElementsByTagName('input')
console.log(inputPorTag)

//buscando input por name, ou seja buscando inputs
//que tem atributo name="email"
let inputPorName = document.querySelectorAll("input[name='email']")
console.log(inputPorName) //[0]

