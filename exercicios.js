// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  const number1 = Number(prompt("Digite um número:"))
  const number2 = Number(prompt("Digite outro número:"))
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  const mensagem = prompt('Digite uma mensagem diferenciada!!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite altura do retângulo:"))
  const largura = Number(prompt("Digite largura do retângulo:"))
  const area = altura * largura
  console.log (area)
  return

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoUsuario = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoUsuario
  console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const calculoIMC = peso/(altura*altura)
 return calculoIMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUsuario = prompt("Qual seu nome?")
  const idadeUsuario = Number(prompt("Quantas primaveiras você tem?"))
  const emailUsuario = prompt("Digite seu e-mail para contato:")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
return
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const color1 = prompt("Me diga uma cor favorita:")
const color2 = prompt("Me diga outa cor que você gosta:")
const color3 = prompt("Mais uma cor, juro que é a última:")
 const colors = [color1, color2, color3]
 console.log(colors)
 return
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const maiuscula = string.toUpperCase()
  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const valorEspetaculo = custo / valorIngresso 
return valorEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const lastItem = array[array.length -1]
  return lastItem
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  array.length >= 2
  const primeiroElemento = array[0]
  const ultimoElemento = array[array.length - 1]
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
return string1.toLowerCase() === string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
const anoAtual = Number(prompt("Em que ano estamos?"))
const anoNascimento = Number(prompt("Qual ano que você nasceu?"))
const anoRG = Number(prompt("Ano da emissão do seu RG:"))
const calc1 = anoAtual - anoNascimento
const calc2 = anoAtual - anoRG
const criterio1 = (calc1 <= 20) && (calc2 >= 5)
const criterio2 = (calc1 > 20) && (calc1 <= 50) && (calc2 >= 10)
const criterio3 = (calc1 > 50) && (calc2 >=15)
console.log(criterio1 || criterio2 || criterio3)

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 const anoBissexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 !== 0
 return anoBissexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const pergunta1 = prompt(`Você tem mais de 18 anos?`)
  const pergunta2 = prompt(`Você possui ensino médio completo?`)
  const pergunta3 = prompt(`Você possui disponibilidade exclusiva durante os horários do curso?`)
  const respostaTotal = pergunta1.toLowerCase() === `sim` && pergunta2.toLowerCase() === `sim` && pergunta3.toLowerCase() === `sim`
  console.log(respostaTotal)
}