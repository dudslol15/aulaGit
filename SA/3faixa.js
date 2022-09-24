var faixa1 = prompt("Qual a cor da 1º faixa do resistor?")
var faixa2 = prompt("Qual a cor da 2º faixa do resistor?")
var faixa3 = prompt("Qual a cor da 3º faixa do resistor?")

if (faixa1 === "marrom"){
    var f1 = 1 
}
if (faixa1 === "vermelho") {
    var f1 = 2
}
if (faixa1 === "laranja") {
    var f1 = 3
}
if (faixa1 === "amarelo") {
    var f1 = 4
}
if (faixa1 === "verde") {
    var f1 = 5
}
if (faixa1 === "azul") {
    var f1 = 6
}
if (faixa1 === "roxo") {
    var f1 = 7
}
if (faixa1 === "cinza") {
    var f1 = 8
}
if (faixa1 === "branco") {
    var f1 = 9
}
if (faixa2 === "preto") {
    var f2 = 1
}
if (faixa2 === "marrom") {
    var f2 = 10
}
if (faixa2 === "vermelho") {
    var f2 = 100 
}
if (faixa2 === "laranja") {
    var f2 = 1000
}
if (faixa2 === "amarelo") {
    var f2 = 10000
}
if (faixa2 === "verde") {
    var f2 = 100000
}
if (faixa2 === "azul") {
    var f2 = 1000000
}
if (faixa2 === "roxo") {
var f2 = 10000000
}
if (faixa2 === "dourado") {
    var f2 = 0.10
}
if (faixa2 === "prateado") {
    var f2 = 0.01
}
if (faixa3 === "marrom") {
    var f3 = "kΩ Mais ou menos 1%"
}
if (faixa3 === "vermelho") {
    var f3 = "kΩ Mais ou menos 2%"
}
if (faixa3 === "verde") {
    var f3 = "kΩ Mais ou menos 0,5%"
}
if (faixa3 === "azul") {
    var f3 = "kΩ Mais ou menos 0,25%"
}
if (faixa3 === "roxo") {
    var f3 = "kΩ Mais ou menos 0,01"
}
if (faixa3 === "cinza") {
    var f3 = "kΩ Mais ou menos 0,05"
}
if (faixa3 === "dourado") {
    var f3 = "kΩ Mais ou menos 5%"
}
if (faixa3 === "prateado") {
    var f3 = "kΩ Mais ou menos 10%"
}
if (faixa3 === "") {
    var f3 = "kΩ Mais ou menos 20%"
}

var resistor = f1 * f2 + f3

console.log(resistor)