var calcResis = prompt("Calculo em Série ou Paralelo?")

if (calcResis === "serie") {
  var r1 = Number(prompt("Valor de tensão 1: "))
  var r2 = Number(prompt("Valor de tensão 2: "))
  var r3 = Number(prompt("Valor de tensão 3: "))

  var req = r1 + r2 + r3

  console.log(`${req}Ω`)
}
if (calcResis === "paralelo") {
  var r1 = Number(prompt("Valor de tensão 1: "))
  var r2 = Number(prompt("Valor de tensão 2: "))
  var r3 = Number(prompt("Valor de tensão 3: "))

  var req1 = 1 / ((1 / r1) + (1 / r2) + (1 / r3))

  console.log(`${req1.toFixed(3)}Ω`)
}
if (calcResis === "misto"){
  var r1 = Number(prompt("Valor de tensão 1: "))
  var r2 = Number(prompt("Valor de tensão 2: "))
  var r3 = Number(prompt("Valor de tensão 3: "))
  
  var req2 = 1 / ((1 / r2) + (1 / r3))
  var req3 = req2 + r1
  console.log(`${req3.toFixed(3)}Ω`)
}