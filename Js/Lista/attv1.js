/*1. Crie uma função chamada calcularAreaRetangulo que receba dois parâmetros:
base e altura. A função deve calcular e retornar o valor da área (área = base ×
altura).
Para resolver a questão eu pensei em receber 2 valores e chamar uma função que calcule o  valor da area e retorne elepara ser mostrado na tela
Eu achei a questão facil, pois abordava conhecimentos basicos
entradas: Base e Altura
Processamento:Calcular a área
Saida: Valor da area*/
function calcularAreaRetangulo(base, altura){
     let area = base * altura
     return area
}
let valor1 = Number(prompt("Digite o valor da base do retângulo em metros:"))
let valor2 = Number(prompt("Digite o valor da altura do retângulo em metros:"))

let resultado = calcularAreaRetangulo(valor1, valor2)

alert(`O valor da área do retângulo foi ${resultado} m`)
