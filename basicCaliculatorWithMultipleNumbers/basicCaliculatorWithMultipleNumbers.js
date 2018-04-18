function isNumeric(value) {
 if(typeof(value) =="number") {
   return true;
 }
 return false;
}

function calculator(numbers, operation) {
if(!Array.isArray(numbers) || !numbers.every(isNumeric))
{
   return "please check your input Array";
}

 switch(operation){
   case "+":
     return  numbers.reduce(function totalSum(sum,value) { return sum + value }, 0);
   case "-":
     return  numbers.reduce(function totalDifference(difference, value){ return difference - value }, 0)
   case "/":
     return "we don't support division yet";
   case "X":
     return  numbers.reduce(function totalProduct(product,value) { return product * value });
   default:
     return "please check your input operation";
 }
}