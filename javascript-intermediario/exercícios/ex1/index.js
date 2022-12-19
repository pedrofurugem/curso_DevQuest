/*
  <div class="quadrado azul"></div>
  <div class="quadrado vermelho"></div>
  <button div="btn-troca-cor">troca cor</button>
*/
const btnTrocaCor = document.getElementById('btn-troca-cor')
const quadradoAzul = document.querySelector('.azul')

btnTrocaCor.addEventListener('click', trocaCor)

function trocaCor(){
  quadradoAzul.classList.remove("azul")
  quadradoAzul.classList.add("amarelo")
}