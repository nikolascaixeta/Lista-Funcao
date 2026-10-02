/*
5. Crie duas funções para cálculo total de um carrinho de compras:
• a) calcularSubtotalItem(item): Recebe um objeto item com as propriedades
preco e quantidade, e retorna o valor total do item (subtotal = preco ×
quantidade).
• b) calcularTotalCarrinho(carrinho): Recebe um array de objetos (itens do
carrinho). A função deve percorrer a lista, chamar internamente a função
calcularSubtotalItem para cada produto e retornar o valor total acumulado da
compra.
Entrada: Um array de objetos, onde cada objeto é um item da lista de um carrinho
Processamento: Calcular o subtotal e o preço final da compra
Saida: O preço total
*/
function receberCarrinho(){
    let tamanho = Number(prompt("Digite o numero de itens do carrinho"))
    const carrinho = []
    for(let i = 0; i < tamanho; i++){
       const item = {
        preco: Number(prompt("Digite o preço do produto")),
        quantidade: Number(prompt("Digite a quantidade do produto"))
    }
      carrinho.push(item)
    }
    return carrinho
}
function calcularTotalCarrinho(carrinho){
    let soma = 0
    for(let item in carrinho){
      let subtotal = calcularSubtotalItem(item)
      soma += subtotal
    }
    return soma
}
function calcularSubtotalItem(produto){
    let subtotal = produto.preco * produto.quantidade
    return subtotal
}
let compras = receberCarrinho()
let resultado = calcularSubtotalItem(compras)