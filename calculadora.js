var input = document.getElementById("visor");
let operador = 0;
 function add(input) {
   visor.value = visor.value + input;
 }

 function clearall() {
   visor.value = "";
 }
 function equal() {
  num2 = visor.value;

   switch (operador){
     case(1):{
      console.log(' '+num1+ '+' +num2);
      result = num1 + num2;
      visor.value = result;
      break;
     }
     case(2):{
      result = num1 - num2;
      console.log(' '+num1+ '-' +num2);
      visor.value = result;
      break;
     }
     case(3):{
      result = num1 * num2;
      console.log(' '+num1+ '*' +num2);
      visor.value = result;
      break;
     }
     case(4):{
      result = num1 / num2;
      console.log(' '+num1+ '/' +num2);
      visor.value = result;
      break;
     }
     default:{
       console.log('Não encontrei nenhuma opcao');
       break;
     }
     
   }
   zerarOperador();
  }
  function zerarOperador(){
  operador = 0;
  }
  function plus(){
    num1 = visor.value;
    operador = 1;
    clearall();
  }
  function minus(){
    num1 = visor.value;
    operador = 2;
    clearall();
  }
 function multiply(){
  num1 = visor.value;
   operador = 3;
   clearall();
 }
  function division(){
    num1 = visor.value;
    operador = 4;
    clearall();
  }
 function comma(){
  visor.value = visor.value + ".";
 }
