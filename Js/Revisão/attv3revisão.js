/*
3. Crie uma função que apresente um menu ao usuário com as seguintes opções:
a. Converter de real para euro
b. Converter de euro para real
c. Converter de real para dólar
d. Converter de dólar para real
e. Fechar o programa.
O programa deve apresentar esse menu em loop até o usuário selecionar fechar
programa. Caso ele escolha outras opções, o usuário deve entrar com os dados
e o resultado deve ser mostrado na tela. Após mostrar o resultado da conversão
pedida, o programa volta para o menu.
Entrada: Um valor em dinheiro que deseja ser convertido
Processamento: Fazer a conversão da moeda
Saida: Mostrar o resultado da conversão
Eu achei a questão facil porem extensa, o racicinio para resolve-la foi criar uma função para receber o valor da primeira moeda, outra para calcular a conversão e a ultima para mostrar  o valor convertio, tudo em um laço de repetição dentro da função principal
*/

function executarMenu(){
     let i = 0
    do{
      
      let opcao = prompt("Digite a letra corespondente a conversão desejada:\n a. Converter de real para euro \n b. Converter de euro para real \n c. Converter de real para dólar \n d. Converter de dólar para real \n e. Fechar o programa. ")
      let formula = 0
      let valor = 0
      let resultado = 0
      switch(opcao){
         case "a":
         formula = 0.17
          valor = receberValor()
          resultado = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "b":
         formula = 5.87
          valor = receberValor()
          resultado = conversor(valor, formula)
         mostraConversao(resultado)
         break;

        case "c":
        formula = 0.19
          valor = receberValor()
          resultado = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "d":
        formula = 5.22
         valor = receberValor()
         resultado = conversor(valor, formula)
         mostraConversao(resultado)
         break;

         case "e":
         i = 1
         alert("PROGRAMA ENCERRADO")
         break;
      }
    }while(i == 0)
}
function receberValor(){
   let moeda = Number(prompt("Digite o valor a ser convertido"))
   return moeda
}
function conversor(valor, formula){
    let valorfinal = valor * formula
    return valorfinal
}
function mostraConversao(resultado){
    alert(`O valor convertido é ${resultado}`)
}
executarMenu()