/*  Crie duas funções para avaliar o desempenho de um aluno:
a) calcularMediaArray(notas): recebe um array de números (notas) e retorna
a média aritmética simples dessas notas.
b) avaliarAluno(aluno): recebe um objeto aluno contendo as propriedades
nome e notas (onde notas é um array com 3 notas). A função deve chamar
internamente a função calcularMediaArray. Se a média for ≥ 60, retorna
"Aprovado", caso contrário, retorna "Reprovado".
Entrada: O objeto com o nome dos alunos e um  array com as notas
Prossesamento: Calcular a média e verificar o estado do aluno
Saída: O estado do aluno
Eu achei a questão facil para média pois nescessitava de conhecimentos um pouco mais avançados de objetos e arrays
O raciocinio foi criar uma função para executar cada entrada processamento e saida
*/

function receberAluno(){
  const aluno ={
    nome:prompt("Digite o nome do aluno")
  }   
  const nota = []
  for(let i = 0; i< 3; i++){
    nota[i] = Number(prompt(`Digite a ${i+1}º nota do aluno ${aluno.nome}`))
  }
  aluno.notas = nota
  return aluno
}
function calcularMediaArray(valores){
     let soma = 0
     for(let item of valores){
        soma += item
     }
     soma = soma/3
     return soma
}
function avaliarAluno(estudante){
  let resultado = calcularMediaArray(estudante.notas)
  if(resultado >= 60){
    let situacao = "Aprovado"
    return situacao
  } else{
    let situacao = "Reprovado"
    return situacao
  }
}
function mostrarEstado(estado){
  alert(`O aluno ${objeto.nome} está ${estado}`)
}
let objeto = receberAluno()
let estado = avaliarAluno(objeto)
mostrarEstado(estado)