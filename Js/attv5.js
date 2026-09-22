/*  Crie uma função chamada somarElementos que receba um array de números
como parâmetro, percorra o vetor, some todos os valores e retorne o total.
Entrada: array
Processamento: somar os valores do array
Saida: a soma
Eu achei a questão facil, porem me faltou atenção
Eu utilizei a mesma logica das anteriores
*/
function receberArray(){
  const valores = []
  let tamanho = Number(prompt("Digite quantos valores que deseja colocar"))
  for(let i = 0; i < tamanho; i++){
    valores[i] = Number(prompt(`Digite o ${i+1}º valor`))
  }
  return valores
}
function somarElementos(vetor){
    let soma = 0
    for(let numero of vetor){
       soma = soma + numero
        }
        return soma
}
function resultadoSoma(n){
    alert(`O valor da soma foi ${n}`)
}
const array = receberArray()

let resultado = somarElementos(array)

resultadoSoma(resultado)