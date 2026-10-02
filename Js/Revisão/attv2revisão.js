/*
2. Escreva uma função chamada verificarOrcamento que receba dois parâmetros:
valorProduto e saldoDisponivel. A função deve retornar true se o saldo for suficiente
para comprar o produto (saldo maior ou igual ao valor) e false caso contrário.
Entrada: Valor do produto e saldo
Processamento: Verificar se é possivel comprara o produto
Saida: Se foi possivel comprar o produto
Eu cahei a questão facil, o raciocinio foi criar uma função para cada etapa
*/

function receberValorProduto(){
    let precoProduto = Number(prompt("Digite o valor do protudo"))
    return precoProduto
}
function receberValorSaldo(){
    let saldo = Number(prompt("Digite o valor do seu saldo"))
    return saldo
}
function verificarOrcamento(valorProduto, saldoDisponivel){
    if(valorProduto <= saldoDisponivel){
        return 1
    }
    else{
        return 0
    }
}
function mostrarEstado(estado){
   if(estado){
    alert(`Foi possivel comprar o produto`)
   }else{
    alert(`Não foi possivel comprar o produto`)
   }
}
let valorProduto = receberValorProduto()
let saldoDisponivel = receberValorSaldo()
let estado = verificarOrcamento(valorProduto, saldoDisponivel)
mostrarEstado(estado)