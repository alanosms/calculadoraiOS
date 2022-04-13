var input = document.getElementById("visor");
let operator = 0;
 function add(input) {
   visor.value = visor.value + input;
 }
 function invert(){
   visor.value = visor.value * -1;
 }
 function clearall() {
   visor.value = "";
 }
 function equal() {
  num2 = visor.value;

   switch (operator){
     case(1):{
      console.log(' '+num1+ '+' +num2);
      result = Number(num1) + Number(num2);
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
   zeroOperator();
  }
  function zeroOperator(){
    operator = 0;
  }
  function plus(){
    num1 = visor.value;
    operator = 1;
    clearall();
  }
  function minus(){
    num1 = visor.value;
    operator = 2;
    clearall();
  }
 function multiply(){
  num1 = visor.value;
  operator = 3;
   clearall();
 }
  function division(){
    num1 = visor.value;
    operator = 4;
    clearall();
  }
 function comma(){
  visor.value = visor.value + ".";
 }
