var nome= "teste";
let numero= 1;
var isAccepted= true; //false /* comentário multiplas linhas */

var objeto= {};
objeto.nome= nome;
objeto.idade= numero;

var colecao= [];
colecao[0]= 1;
colecao[1]= "teste";

/*
== comparação normal
=== estritamente igual
!= negar
&& and
|| or
< menor
> maior
% resto divisão
*/

// função
function somar(valor1, valor2) {
    return result= valor1+valor2;
}

objeto.somar= somar; // guardando a função dentro de um objeto
objeto.somar(1,2);

if(somar(1,2) == 3) { 
    console.log("Funcionou!");
}

