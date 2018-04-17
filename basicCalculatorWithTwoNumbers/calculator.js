function calculator(number1, number2, operation) {
if(typeof(number1) != "number" || typeof(number2) != "number")
{
   return "please check your input numbers"
}

 switch(operation){
   case "+":
     return  number1 + number2;
   case "-":
     return number1 > number2 ? number1 - number2 : number2 - number1;
   case "/":
     return number2 != 0 ? number1/number2 : "Infinite";
   case "X":
     return number1 * number2;
   default:
     return "please check your input operation"
 }
}