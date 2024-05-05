/* 2024-05-05
construimos aqui várias funções, supondo que as funções são grandes vamos dividir estas em vários arquivos (módulos)
*/
/*
function soma(a, b) {
    return a+b
}

function sub(a, b) {
    return a-b
}

function multi(a, b) {
    return a*b
}

function div(a, b) {
    return a/b
}
*/

// carregando os módulos, função do node
var SomaFunc=  require('./somar')
var SubtFunc=  require('./subtrair')
var MultiFunc=  require('./mutliplicar')
var DivFunc=  require('./dividir')

console.log(SomaFunc(2, 4))
console.log(SubtFunc(6, 4))
console.log(MultiFunc(2, 4))
console.log(DivFunc(8, 4))
console.log(SomaFunc(22, 8))
