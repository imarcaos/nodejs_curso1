var nome= "teste";
let numero= 1;
var isAccepted= true; //false /* coment�rio multiplas linhas */

var objeto= {};
objeto.nome= nome;
objeto.idade= numero;

var colecao= [];
colecao[0]= 1;
colecao[1]= "teste";

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
}

