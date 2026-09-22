/* . Crie uma função chamada celsiusParaFahrenheit que receba uma temperatura
em Celsius e retorne a conversão para Fahrenheit (F = (C × 1.8) + 32).
Entrada: Temperatura em celcius
Pocessamento: conversão em Fahrenheit
Saida: Mostrar o valor em Fahrenheit
Eu achei a questão facil pois ela usa os mesmos conceitos da questão anterior
Eu criei funções para cada entrada, processamento e saida
*/
function receberTemp(){
    let celcius = Number(prompt("Digite a temperatura em °C:"))
    return celcius
}
function celsiusParaFahrenheit(temp){
    let resultado = (temp * 1.8) + 32
    return resultado
}
function mostrarTemp(Fahrenheit){
    alert(`A temperatura ${tempC}°C em °F é ${Fahrenheit}`)
}
let tempC = receberTemp()

let valor =  celsiusParaFahrenheit(tempC)

mostrarTemp(valor)
