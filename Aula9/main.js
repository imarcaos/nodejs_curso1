// carregando o m�dulo
var modulo= require("./modulo");
modulo.somar

var nome= "teste";
let numero= 1;
var isAccepted= true; //false /* coment�rio multiplas linhas */

var objeto= { nome: "Marcos", idade: 29 };
objeto.nome= nome;
objeto.idade= numero;

if (nome.indexOf("s") != -1) { // -1 (false) n�o encontrou
    nome.toUpperCase();
    nome.replace("s", "S");
}

var colecao= [];
colecao[0]= 1;
colecao[1]= "teste";
//colecao.length();
colecao.push(6); // adiciona elemento ao final do array
colecao.forEach(function(item){
    console.log(item);
})

/*
== compara��o normal
=== estritamente igual
!= negar
&& and
|| or
< menor
> maior
% resto divis�o
*/

// fun��o
function somar(valor1, valor2) {
    return result= valor1+valor2;
}

objeto.somar= somar; // guardando a fun��o dentro de um objeto
objeto.somar(1,2);

if(somar(1,2) == 3) { 
    console.log("Funcionou!");
} else if(isAccepted) {
}

switch(numero) {
    case 1: "s"
}

if(modulo.somar(1,2) == 3) {
    console.log("Fun��o somar dentro do m�dulo funcionou!")
}

for(var x=0; x<10; x++) {
    // estrutura
}

