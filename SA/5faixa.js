var faixa1 = prompt("Qual a cor da 1º faixa do resistor?")
var faixa2 = prompt("Qual a cor da 2º faixa do resistor?")
var faixa3 = prompt("Qual a cor da 3º faixa do resistor?")
var faixa4 = prompt("Qual a cor da 4º faixa do resistor?")
var faixa5 = prompt("Qual a cor da 5º faixa do resistor?")

if (faixa1 === "marrom") {
  var f1 = String(1)
}
if (faixa1 === "vermelho") {
  var f1 = String(2)
}
if (faixa1 === "laranja") {
  var f1 = String(3)
}
if (faixa1 === "amarelo") {
  var f1 = String(4)
}
if (faixa1 === "verde") {
  var f1 = String(5)
}
if (faixa1 === "azul") {
  var f1 = String(6)
}
if (faixa1 === "roxo") {
  var f1 = String(7)
}
if (faixa1 === "cinza") {
  var f1 = String(8)
}
if (faixa1 === "branco") {
  var f1 = String(9)
  }
if (faixa2 === "preto"){
  var f2 = String(0)
}
if (faixa2 === "marrom") {
  var f2 = String(1)
}
if (faixa2 === "vermelho") {
  var f2 = String(2)
}
if (faixa2 === "laranja") {
  var f2 = String(3)
}
if (faixa2 === "amarelo") {
  var f2 = String(4)
}
if (faixa2 === "verde") {
  var f2 = String(5)
}
if (faixa2 === "azul") {
  var f2 = String(6)
}
if (faixa2 === "roxo") {
  var f2 = String(7)
}
if (faixa2 === "cinza") {
  var f2 = String(8)
}
if (faixa2 === "branco") {
  var f2 = String(9)
}
if (faixa3 === "preto") {
  var f3 = String(0)
}
if (faixa3 === "marrom") {
  var f3 = String(1)
}
if (faixa3 === "vermelho") {
  var f3 = String(2)
}
if (faixa3 === "laranja") {
  var f3 = String(3)
}
if (faixa3 === "amarelo") {
  var f3 = String(4)
}
if (faixa3 === "verde") {
  var f3 = String(5)
}
if (faixa3 === "azul") {
  var f3 = String(6)
}
if (faixa3 === "roxo") {
  var f3 = String(7)
}
if (faixa3 === "cinza") {
  var f3 = String(8)
}
if (faixa3 === "branco") {
  var f3 = String(9)
}
if (faixa4 === "preto") {
  var f4 = 1
}
if (faixa4 === "marrom") {
  var f4 = 10
}
if (faixa4 === "vermelho") {
  var f4 = 100
}
if (faixa4 === "laranja") {
  var f4 = 1000
}
if (faixa4 === "amarelo") {
  var f4 = 10000
}
if (faixa4 === "verde") {
  var f4 = 100000
}
if (faixa4 === "azul") {
  var f4 = 1000000
}
if (faixa4 === "roxo") {
  var f4 = 10000000
}
if (faixa4 === "dourado") {
  var f4 = 0.10
}
if (faixa4 === "prateado") {
  var f4 = 0.01
}
if (faixa5 === "marrom") {
  var f5 = "kΩ Mais ou menos 1%"
}
if (faixa5 === "vermelho") {
  var f5 = "kΩ Mais ou menos 2%"
}
if (faixa5 === "verde") {
  var f5 = "kΩ Mais ou menos 0,5%"
}
if (faixa5 === "azul") {
  var f5 = "kΩ Mais ou menos 0,25%"
}
if (faixa5 === "roxo") {
  var f5 = "kΩ Mais ou menos 0,01"
}
if (faixa5 === "cinza") {
  var f5 = "kΩ Mais ou menos 0,05"
}
if (faixa5 === "dourado") {
  var f5 = "kΩ Mais ou menos 5%"
}
if (faixa5 === "prateado") {
  var f5 = "kΩ Mais ou menos 10%"
}
if (faixa5 === "") {
  var f5 = "kΩ Mais ou menos 20%"
}

var resistor = (f1 + f2 + f3)
var resistor1 = Number(resistor) * f4 + f5

console.log(resistor1)