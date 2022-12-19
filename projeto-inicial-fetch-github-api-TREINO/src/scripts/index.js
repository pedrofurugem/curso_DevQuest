//buscar a api do usuário no github
document.getElementById('btn-search').addEventListener('click', ()=> {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

async function user(userName){
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json()
}

async function repositories(userName){
    const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=10`)
    return await response.json()
    
}

function getUserProfile(userName){
    user(userName).then(userData => {
        let userInfo = `<div class="profile-data">
                            <img src="${userData.avatar_url}" alt="imagem de perfil">
                            <h1>${userData.name ?? 'não possui nome cadastrado 😢'}</h1>
                            <p>${userData.bio ?? 'não possui bio cadastrada 😢'}</p>
                        </div>`
        document.querySelector('.profile-data').innerHTML = userInfo

        getRepositories(userName)
    })
}

function getRepositories(userName){
    repositories(userName).then(reposData => {
        let repositoriesItens = ''
        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        })

        document.querySelector('.profile-data').innerHTML += `<div class="repositories items">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
         </div>`
    })
}