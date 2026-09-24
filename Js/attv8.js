/* Crie duas funções para autenticação de acesso:
a) validarSenha(senha): retorna true se a string senha tiver pelo menos 6
caracteres, ou false caso contrário.
b) autenticarUsuario(usuario, senha): chama internamente a função
validarSenha. Se a senha for válida, retorna "Acesso concedido para
[usuario]". Caso contrário, retorna "Senha muito curta para o usuário
[usuario]".
Entrada: usuario e senha 
Processmento: Verificar se a a senha é valida
Saida: Mostrar se o acesso foi concedido ou a senha esta errada
Eu achei essa questão média pois nescessitava de conhecimentos que eu não sabia(como descobrir o tamanho de uma string)
O raciocinio foi criar uma função para receber a usuario e a senha, outra para verificar se o tamanho da senha está certo com uma condicional  e outra para mostrar se o aceeso foi permitido ou negado
*/

function receberSenha(){
    let valor1 = prompt("Digite sua senha")
    return valor1
}
function receberUsuario(){
    valor2 = prompt("Digite seu usuario")
    return valor2
}
function validarSenha(id){
    let tamanho = id.length
  if(tamanho >= 6){
    return 1
  } else{
    return 0
  }
}
function autenticarUsuario(user, senha1){
   if(validarSenha(senha1)){
    let confirmação = `Acesso concedido para ${user}`
    return confirmação
   } else{
    let negacao = `Senha muito curta para o usuario ${user}`
    return negacao
   }
}
function mostrarAcesso(estatos){
    alert(`${estatos}`)
}
let senha = receberSenha()
let usuario = receberUsuario()
let acesso = autenticarUsuario(usuario, senha)
mostrarAcesso(acesso)