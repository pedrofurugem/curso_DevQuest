/*
Objetivo: apresente a mensagem, "Seja bem vindo(a),
Fulano!"
1 - Peça que o usuário informe o seu nome usando o prompt
(lembre-se da aula de variáveis);
2 - Apresente a mensagem de boas vindas seguindo do
nome que a pessoa digitou no passo 1.
Obs: pra apresentar a mensagem de boas vindas pode usar
o alert também.
*/

//eu não havia usado o um tipo para variável
const nome = window.prompt('Qual seu nome?');

alert('Seja Bem vindo(a), ' + nome + '!')