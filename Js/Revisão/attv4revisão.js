/*
4. Crie uma função chamada exibirResumoProduto que receba um objeto
representando um item do estoque com as propriedades nome, preco e quantidade.
A função deve retornar uma string formatada no padrão:
"Produto: [nome] | Preço: R$ [preco] | Estoque: [quantidade] unidades."
Entrada: Objeto com nome preço e unidade
Processamento: formatar a string do item
Saida: A mensagem formatada
Eu achei a questão muito facil, para resolvela eu apenas criei uma função para executar cadsa etapa de entrada processameto e saida
*/

function receberItem(){
    const item = {
        nome: prompt("Digite o nome do item"),
        preco: Number(prompt("Digite o preço do item")),
        quantidade: Number(prompt("Digite a quantidade do produto em estoque")),
    }
    return item
}
function exibirResumoProduto(produto){
    alert(`Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.quantidade} unidades`)
}
let objeto = receberItem()
exibirResumoProduto(objeto)