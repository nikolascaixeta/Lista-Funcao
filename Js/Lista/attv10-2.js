/* Escreva um programa completo para análise de uma turma contendo três
funções:
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso
contrário.
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4
alunos (armazenando-os num array de objetos), chama contarAprovados e
exibe o total de aprovados no console.log.
entrada:Os dados dos 4 alunos
Processamento: determinar o estado do aluno e armazenar um contador se for aprovado
Saida: Mostrar quantos alunos foram aprovados 
Eu achei a questão media para facil pois ela nescessitava de conhecimentos de arrays de objetos 
O racicinio foi criar uma função para cada entrada processamento e saida
*/
function executarAnalise(){
    const alunos = [];
    for(let i = 0; i < 4; i++){
        alunos[i] = {
               nome: prompt(`Digite o nome do ${i+1}º aluno`),
               nota: Number(prompt(`Digite a nota do ${i+1}º aluno`))
        }
    }
    const numero = contarAprovados(alunos)
    console.log(`Foram ${numero.length} alunos aprovados, sendo eles: ${numero}`)
}
function contarAprovados(listaAlunos){
    let estado = 0
    let name = ""
    let soma = []
   for(const item in listaAlunos){
    let notas = listaAlunos[item].nota
     estado = verificarAprovacao(notas)
      if(estado){
        name = listaAlunos[item].nome
        soma.push(name)
      }
   }
   return soma
}
function verificarAprovacao(pontos){
    if(pontos >= 60){
        return 1
    } else{
        return 0
    }
}

executarAnalise()