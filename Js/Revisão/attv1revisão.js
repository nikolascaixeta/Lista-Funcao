/*
1. Crie uma função chamada calcularJurosSimples que receba três parâmetros:
capital, taxa (em porcentagem) e tempo (em meses). A função deve calcular e
retornar o valor dos juros:
juros = capital × (
taxa
100 ) × tempo
Entrada: Capital, taxa e tempo
Processamento: Calcular os Juros 
Saida: Mostrar os juros 
Eu achei a questão facil, meu raciocinio foi criar uma função para receber os parametros, outra para fazer a conta dos juros e uma tercedira para mostra-los
*/

function receberParametros(){
    const parametros = []
    let capital = Number(prompt("Digite o capital inicial"))
    let tempo = Number(prompt("Digite o tempo em meses"))
    let taxa = Number(prompt("Digite a taxa em porcentagem"))
    parametros.push(capital, tempo, taxa)
    return parametros
}
function calcularJurosSimples(capital, tempo, taxa){
    let juros = capital * (taxa/100) * tempo
    return juros
}
function mostrarJuros(juros){
    alert(`O valor dos juros é R$ ${juros}`)
}
let variaveis = receberParametros()
let resultado = calcularJurosSimples(variaveis[0], variaveis[1], variaveis[2])
mostrarJuros(resultado)