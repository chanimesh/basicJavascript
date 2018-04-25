function performOperation(string1,string2,operation) {
    string1 = string1.trim();
    string2 = string2.trim();

    val1 = parseFloat(string1.match(/\d[\.\d]*$/));
    val2 = parseFloat(string2.match(/^\d[\.\d]*/));
    
// TODO: need to check of characters other than digits and operations
    let newString1 = string1.replace(/\d[\.\d]*$/,'');
    let newString2 = string2.replace(/^\d[\.\d]*/,'');
    switch(operation){
        case "+":
            result =  val1 + val2;
            break;
        case "-":
            result =  val1 - val2;
            break;
        case "/":
            result = val2 != 0 ? val1/val2 : "Infinite";
            break;
        case "x":
            result = val1 * val2;
            break;
    }

    return newString1 + result + newString2;

}




function basicCalculatorWithStringAsInput(string) {
    //TODO: need to handle brackets
   const operations = {
       product: 'x',
       division: '/',
       sum: '+',
       difference: '-',
   };

   let result = Object.values(operations)
       .reduce((object_full, current_operation) => {

       let newString = object_full.split(current_operation);
       object_full = newString.reduce(
           (accumilator, current_value, current_index, thisArray) => {
           if (thisArray.length > current_index + 1)
               accumilator += performOperation(current_value, thisArray[current_index + 1], current_operation);
           return accumilator
                  },
           '');

       return object_full;
       },
           string);

}



let testString = ' 2 + 3 x 4 - 8 / 10 '

let result = basicCalculatorWithStringAsInput(testString);

console.log(result);
