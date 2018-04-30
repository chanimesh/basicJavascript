function performOperation(firstValue,secondValue,operation) {

    switch(operation){
        case "+":
            result =  firstValue + secondValue;
            break;
        case "-":
            result =  firstValue - secondValue;
            break;
        case "/":
            result = secondValue != 0 ? firstValue/secondValue : "Infinite";
            break;
        case "x":
            result = firstValue * secondValue;
            break;
    }

    return result;
}

function getNumbersFromStrings(string1, string2, operation) {
    string1 = string1.trim();
    string2 = string2.trim();

    let endNumberRegex = /\d[\.\d]*$/;
    let firstNumberRegex = /^\d[\.\d]*/;

    let firstValue = parseFloat(string1.match(endNumberRegex));
    let secondValue = parseFloat(string2.match(firstNumberRegex));
    let result = performOperation(firstValue,secondValue,operation)

// TODO: need to check of characters other than digits and operations
// TODO: handle negative results in the operations
    const firstString = string1.replace(endNumberRegex,'');
    const secondString = string2.replace(firstNumberRegex,'');

    return firstString + result + secondString;
}

function applyBodmas(string) {
   const operations = {
       division: '/',
       product: 'x',
       sum: '+',
       difference: '-',
   };

   const operationsResult = Object.values(operations)
       .reduce(
           function applyCurrentOperation(accumulatorString, current_operation) {

       const operationsSplitArray = accumulatorString.split(current_operation);
       if (operationsSplitArray.length == 1) {
           return accumulatorString;
       }

       accumulatorString = operationsSplitArray.reduce(
           function performCurrentOperation(accumilator, currentValue, currentIndex, currentArray) {
           if (currentArray.length > currentIndex + 1)
               accumilator += getNumbersFromStrings(currentValue, currentArray[currentIndex + 1], current_operation);
           return accumilator
                  },
           '');

       return accumulatorString;
       },
           string);

   return operationsResult;
}

function checkForBrackets(string)
{
    const bracketsSets = string.match(/\([\d.\d\s+\-\/x]*\)/g)

    if(bracketsSets) {

        const expressionsResult = bracketsSets.map(
            function computeExpression(currentValue) {
                return {
                    expression: currentValue,
                    value: applyBodmas(currentValue.slice(1, -1)),
                }
            }
        );

        var bracketsReplaced = expressionsResult.reduce(
            function replaceBrackets(accumulater, currentValue) {
                accumulater = accumulater.replace(currentValue.expression, currentValue.value);
                return accumulater;
            }
            , string);
        if (bracketsReplaced.match(/\([\d.\d\s+\-\/x]*\)/g))
            bracketsReplaced = checkForBrackets(bracketsReplaced);
        return bracketsReplaced;
    }
    return applyBodmas(string);

}

function basicCalculatorWithStringAsInput(string){
    let testString = string.toLowerCase().replace(/\s/g,'');
    const bracketsResult = checkForBrackets(testString);
    return applyBodmas(bracketsResult);
}

let testString = ' (2 + 3) X ((8 - 4) / 10) ';
console.log(basicCalculatorWithStringAsInput(testString));
