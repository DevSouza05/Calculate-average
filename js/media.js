"use strict";

alert("Hello word");

const p1 = document.getElementById("p1");
const p2= document.getElementById("p2");
const btnCalcular = document.getElementById("btnCalcular");
const saida = document.getElementById("saida");


function obterNotaP1(){
    return +p1.value;
}

function obterNotaP2(){
    return +p2.value;
}

function CalcularMedia(p1,p2) { 
   let media = (p1 + 2* p2)/3;
   return media;

  }

//   function ValidarNotaP1(p1){
//       if(p1 > 10 || p1 < 0){
//       }
//   }

//   function ValidarNotaP2(p2){
//     if(p2 > 10 || p2 < 0){
//     }
// }

function ValidarNota(nota){

}

function mostraSaida(msg){
    saida.textContent = msg
}
  
function onClick(){
    let Np1= obterNotaP1();
    let np2= obterNotaP2();

    let mensagem = (ValidarNota(Np1) && ValidarNota(np2))? (CalcularMedia(Np1,np2)).toFixed(2) : "As duas notas precisam seer validas";

    mostraSaida(mensagem);

  
    
  

    saida.textContent = vdP1;
    saida.textContent = vdP2;
    saida.textContent = media.toFixed(2)
  }

  //adicionar ouvinte ele é o evento click
btnCalcular.addEventListener("click",onClick);





















  //VEJA SÓ, VAOPERADOR UNÁRIO, logo abaixo usamos ele:   let media = (+p1+2*+p2)/3; 
//use tofixed para arredondar com duas casa decimais 
//até o momento é not a number. (NaN);
//QUANDO TRATA-SE DE FORMULÁRIO, ELE VEM COMO STRING

//PO ESTAGIARIO, CRIA  FUNCTION P1 E P2 
// E FUNCAO PRA VALIDAR ESTAGIÁRIO. ( ISSO AI ACIMA TA ERRADO)





