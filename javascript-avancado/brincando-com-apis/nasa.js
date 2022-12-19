const btn = document.querySelector('.botao')

btn.addEventListener('click', ()=> {
    pegaAPI()
})

async function pegaAPI(){
    const response = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY')
    const apiNasa = await response.json()
    console.log(apiNasa)
}