/* Crie uma função chamada formatarPessoa que receba um objeto representando
uma pessoa com as propriedades nome, idade e profissao. A função deve retornar
uma frase formatada no padrão: "Olá, meu nome é [nome], tenho [idade] anos e
trabalho como [profissao]." 
Entrada: O Objeto pessoa 
Processamento: A Formatação das informações 
Saida: A frase
EU achei a questão facil, bem mais facil que eu imaginava por ela envolver objetos.
O raciocinio consistiu em criar uma função para a entrada do objeto, para a concatenação dop objeto e a ultima para imrimir o objeto
*/

function receberPessoa(){
     const pessoa = {
        nome: prompt("Digite o seu nome:"),
        idade: Number(prompt("Digite sua idade")),
        profissao: prompt("Qual é sua profissão"),
     }
     return pessoa 
}
function formatarPessoa(id){
    let textoFormatado = `Olá, meu nome é ${id.nome}, tenho ${id.idade} anos e trabalho com ${id.profissao}`
    return textoFormatado
}
function mostrarformatacao(frase){
    alert(`${frase}`)
}
let objeto = receberPessoa()
let formatacao = formatarPessoa(objeto)
mostrarformatacao(formatacao)