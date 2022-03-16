function Calcular () {
  var elemento = document.getElementById("nome")
  var elemento1 = document.getElementById("nota1Bi")
  var elemento2 = document.getElementById("nota2Bi")
  var elemento3 = document.getElementById("nota3Bi")
  var elemento4 = document.getElementById("nota4Bi")

  var nome = elemento.value
  var nota1Bi = parseFloat(elemento1.value)
  var nota2Bi = parseFloat(elemento2.value)
  var nota3Bi = parseFloat(elemento3.value)
  var nota4Bi = parseFloat(elemento4.value)

  var somaNotas = nota1Bi+nota2Bi+nota3Bi+nota4Bi
  var media = somaNotas / 4
  var notaFinal = media.toFixed(2)
  
  var aprovado = false
  if (notaFinal>=5){
    aprovado = true
  }
 
  var resultado = document.getElementById("resultado")
  if (aprovado){
    var aviso = "Parabéns "+nome+"! Foste aprovad@ com média "+notaFinal;
    resultado.innerHTML = aviso;
  }
  else {
    var aviso = "Não foi dessa vez :( " + "Sua média foi apenas de "+notaFinal
    resultado.innerHTML = aviso;
  } 
  
}

function Limpar (){
  document. location. reload()
}