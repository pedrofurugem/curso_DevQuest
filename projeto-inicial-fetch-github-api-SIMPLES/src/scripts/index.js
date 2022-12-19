//link github: https://api.github.com/users
import { user } from '/src/scripts/services/user.js'
import { repositories } from '/src/scripts/services/repositories.js'

document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

//tecla enter
document.getElementById('input-search').addEventListener('keyup', (e)=> {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserProfile(userName)
    }
})

/*
//usuário
async function user(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json() 
}

//repositório
async function repositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json() 
}
*/

function getUserProfile(userName){
    user(userName).then(userData => {
        //console.log(userData)
        let userInfo = `<div class="info">   
                            <img src="${userData.avatar_url}" alt="imagem de perfil" />
                            <div class="data">
                               <h1>${userData.name ?? 'não possui nome cadastrado 😢'}</h1>
                               <p>${userData.bio ?? 'não possui nome cadastrado 😢'}</p>
                            </div>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo
        
        getUseRepositories(userName)
    })
}

function getUseRepositories(userName){
    repositories(userName).then(reposData => {
        let repositoriesItens = ""
        
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url} 
            "target="_blank"> ${repo.name}</a></li>`
        })
        //+= para adiconar
        document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                              </div>`
    })
}

