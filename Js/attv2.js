/*Escreva uma função chamada ehPar que receba um número como parâmetro e
retorne true se o número for par e false caso seja ímpar.
Entradas: receber um numero
Processamento: verificar se o numero é impar ou par
Saida: se é par ou impar
*/
function ehPar(numero){
   if(numero % 2 == 0){
    return 1
   } else {
    return 0
   }
}

function lerNumero(){
    let valor = Number(prompt("Digite um numero"))
    return valor
}
function mostrarN(propiedade){
    if(propiedade){
        alert(`O numero ${n} é par`)
    } else{
        alert(`O numero ${n} é impar`)
    }
}

 let n = lerNumero()

 let resultado = ehPar(n)

 mostrarN(resultado)