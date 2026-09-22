/* . Crie uma função chamada calcular IMC que receba o peso (kg) e a altura (m). A
função deve calcular o IMC e retornar uma string com a classificação:
• IMC < 18.5: "Abaixo do peso"
• IMC entre 18.5 e 24.9: "Peso normal"
• IMC ≥ 25.0: "Sobrepeso"
Entrada: O peso e a altura
Processamento: Calcular o IMC e classificar
Saida: Retornar a classificação da pessoa
Eu achei facil tirando a parte de fazer a potencia
O raciocinio foi o mesmo das questões anteriores
*/

function receberValores(parametro) {
     if(parametro){
       let n = Number(prompt("Digite seu peso em kg"))
       return n
      } else{
         let n = Number(prompt("Digite sua altura em m"))
         return n
      }
      
}
function calculoIMC(h, p){
    let resultado = p/(h*h)
    return resultado
}
function classificaçãoImc(valor){
    if(valor < 18.5){
        alert(`Abaixo do peso`)
    } else if(valor > 18.5 && valor < 24.9){
        alert("Peso Normal")
    } else{
        alert("Sobreopeso")
    }
}
 let altura = receberValores(0)
 let peso = receberValores(1)

let imc = calculoIMC(altura, peso)

classificaçãoImc(imc)


