let calculatorScreen = document.getElementById("calculator__screen");
function screen(num){
    calculatorScreen.value += num;
 }

 function Calculate(){
     try{
        calculatorScreen.value = eval(calculatorScreen.value);
      
     }catch(err)
     {
         alert("The Calculation is Invalid")
     }
 }

 function Clear(){
     calculatorScreen.value = "";
 }
 function del(){
     calculatorScreen.value = calculatorScreen.value.slice(0,-1);

 }