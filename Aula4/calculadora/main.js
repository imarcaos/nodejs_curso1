/* 2024-05-05
construimos aqui v�rias fun��es, supondo que as fun��es s�o grandes vamos dividir estas em v�rios arquivos (m�dulos)
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

// carregando os m�dulos, fun��o do node
var SomaFunc=  require('./somar')
var SubtFunc=  require('./subtrair')
var MultiFunc=  require('./mutliplicar')
var DivFunc=  require('./dividir')

console.log(SomaFunc(2, 4))
console.log(SubtFunc(6, 4))
console.log(MultiFunc(2, 4))
console.log(DivFunc(8, 4))
console.log(SomaFunc(22, 8))
