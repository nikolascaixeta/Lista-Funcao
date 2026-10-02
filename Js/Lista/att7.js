/*Crie duas funções para processar o valor de uma venda:
a) aplicarDesconto(valor, percentual): recebe o valor e a porcentagem de
desconto, retornando o valor com o desconto aplicado.
b) processarVenda(valorBruto): recebe o valor bruto. Se for maior que 100,
chama internamente a função aplicarDesconto (com 10% de desconto) e
retorna o valor ajustado. Caso contrário, retorna o valor bruto sem
alterações.
Entrada: O valor do produto e a porcentagem do desconto
Processamento:Calcular o desconto e se o valor for maior que 100 aplicar outro desconto
Saida: O valor com desconto e o valor bruto
Eu achei a questão facil por utilizar a mesma lógica na a e na b
Eu logica foi criar uma função para receber os valores, uma para aplicar o desconto ou não, e outra para exibir o valor na tela
*/
/* 
A)
function receberValores(){
   let preco = Number(prompt("Digite o valor da compra"))
   return preco
}
function receberDesconto(){
    let desconto = Number(prompt("Digite o valor do desconto"))
    return desconto
}
function aplicarDesconto(v, p){
   let descontoAplicado = v - [v*(p/100)]
   return descontoAplicado
}
function MostrarValor(produto){
    alert(`O valor do produto é R$${produto}`)
}

 let valor = receberValor1es()
 let porcentagem = receberDesconto()
 let total =  aplicarDesconto(valor, porcentagem)
 MostrarValor(total)
 */

 function receberValores(){
   let preco = Number(prompt("Digite o valor da compra"))
   return preco
}
function aplicarDesconto(v, p){
   let descontoAplicado = v - [v*(p/100)]
   return descontoAplicado
}
function MostrarValor(produto){
    alert(`O valor do produto é R$${produto}`)
}
function processarVenda(bruto){
  if(bruto > 100){
    let aplicado = aplicarDesconto(bruto, 10)
    return aplicado
  }else{
    return bruto
  }
}
 let valor = receberValores()
 let total =  processarVenda(valor)
 MostrarValor(total)