/*
6. Crie duas funções para gerenciar a fila de reprodução de um usuário:
• a) converterParaSegundos(minutos, segundos): Recebe os minutos e
segundos de uma faixa e retorna a duração total convertida apenas para
segundos (totalSegundos = (minutos × 60) + segundos).
• b) calcularTempoPlaylist(playlist): Recebe um array de objetos (onde cada
objeto é uma música com as propriedades {titulo, minutos, segundos}). A
função deve percorrer a lista de músicas, chamar internamente a função
converterParaSegundos para cada faixa e retornar a duração total de toda a
playlist em segundos. 
Entrada: Array de objetos onde cada objeto tem título, minutos e segundos
Processamento: Calcular o tempo ems egundos de cada musica e retornar o valor
Saida: O tempo em segundos
Eu achei a questão facil pois exigiu a mesma linha de raciocinio da questão anterior, precisando de um array com objetos que são manipulados por funções
*/
 function recebePlaylist(){
    const playlist = []
    let tamanho = Number(prompt("Digite o numero de musicas da playlist"))
    for(let i = 0; i < tamanho; i++){
        const musica = {
            titulo: prompt(`Digite o título da ${i+1}º musica`),
            minutos: Number(prompt(`Digite quantos minutos tem a musica`)),
            segundos: Number(prompt(`Digite quantos segundos tem a musica`)),
        }
        playlist.push(musica)
    }
    return playlist
 }
 function calcularTempoPlaylist(playlist){
    let soma = 0
    for(let musica of playlist){
        let segundos = converterParaSegundos(musica.minutos, musica.segundos)
        soma += segundos
    }
    return soma
 }
 function converterParaSegundos(minutos, segundos){
      let totalSegundos = (minutos*60) + segundos
      return totalSegundos 
 }
 function mostraSegundos(tempo){
    alert(`Sua playlist tem ${tempo} segundos`)
 }
 let lista = recebePlaylist()
 let minutagem = calcularTempoPlaylist(lista)
 mostraSegundos(minutagem)