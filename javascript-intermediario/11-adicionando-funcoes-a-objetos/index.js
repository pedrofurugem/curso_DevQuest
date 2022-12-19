let usuario = { 
    nome: 'Roberto',
    //add a função
    excluir: function(){ 
        console.log('O usuário, ' + this.nome + ' foi excluído!')
    }                           //this é referência ao objeto
}
//invocando a função
usuario.excluir()