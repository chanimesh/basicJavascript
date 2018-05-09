function prepareString(string) {
    return string.toLowerCase().replace(/\s/g,'');
}
function performOperation(firstValue,secondValue,operation) {

    switch(operation){
        case "+":
            result =  firstValue + secondValue;
            break;
        case "-":
            result =  firstValue - secondValue;
            break;
        case "/":
            result = firstValue/secondValue;
            break;
        case "x":
            result = firstValue * secondValue;
            break;
        default :
            throw ('Wrong operation');
    }

    return result;
}

function getNumbersFromStrings(string1, string2, operation) {

    let endNumberRegex = /-?\d*\.?\d+$/;
    let firstNumberRegex = /^-?\d*\.?\d+/;

    let firstValue = parseFloat(string1.match(endNumberRegex));
    let secondValue = parseFloat(string2.match(firstNumberRegex));

    if (isNaN(firstValue) || isNaN(secondValue)) {
        throw "Could not find numbers in the string";
    }
        let result = performOperation(firstValue, secondValue, operation)

         // TODO: need to check of characters other than digits and operations
         // TODO: handle negative results in the operations
        const firstString = string1.replace(endNumberRegex, '');
        const secondString = string2.replace(firstNumberRegex, '');


        if(firstString.match(/[x/]$/)){
            return firstString + result.toString() + secondString;
        }

        else if (firstString.match(/[-+]$/)){
            if(result < 0){
                if (firstString.match(/-$/))
                    return firstString.replace(/-$/, '+') + Math.abs(result).toString() + secondString;
                else if (firstString.match(/\+$/))
                    return firstString.replace(/\+$/, '') + result.toString() + secondString;
            }
            else {
                    return firstString + result.toString() + secondString;
            }

        }

        else if (result < 0 || firstString === '') {
            return firstString + result.toString() + secondString;
        }
    else {
            return firstString + '+' + result.toString() + secondString;
        }




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

               while(accumulatorString.split(current_operation).length > 1 && accumulatorString.split(current_operation)[0]!==''){
                   const operationsSplitArray = accumulatorString.split(current_operation);
                   try {
                    accumulatorString = getNumbersFromStrings(operationsSplitArray[0], operationsSplitArray[1], current_operation);
                   }
                   catch (e) {
                       throw('error')
                   }
                   operationsSplitArray.shift();
                   operationsSplitArray.shift();
                   if(operationsSplitArray.length > 0)
                     accumulatorString += current_operation + operationsSplitArray.join(current_operation);
               }


       return accumulatorString;
       },
           string);

   return operationsResult;
}

function evaluateBrackets(string)
{
    const bracketsMatch = /\([\d.\d+\-\/x]*\)/g;
    const bracketsSets = string.match(bracketsMatch);

    if(bracketsSets) {

        const expressionsResult = bracketsSets.map(
            function computeExpression(currentValue) {
                if(currentValue.match(/^-\d+\.?\d*$/))
                {
                    return {
                        expression: currentValue,
                        value: currentValue.slice(1, -1),
                    }
                }
                try {
                return {
                    expression: currentValue,
                    value: applyBodmas(currentValue.slice(1, -1)),
                }
                }
                catch (e) {
                    throw ('error')
                }
            }
        );

        var bracketsReplaced = expressionsResult.reduce(
            function replaceBrackets(accumulater, currentValue) {
                accumulater = accumulater.replace(currentValue.expression, currentValue.value);
                return accumulater;
            }
            , string);
        if (bracketsReplaced.match(bracketsMatch))
            bracketsReplaced = evaluateBrackets(bracketsReplaced);
        return bracketsReplaced;
    }
    return applyBodmas(string);

}

function basicCalculatorWithStringAsInput(string){
    let testString = prepareString(string);
    try {
    const bracketsResult = evaluateBrackets(testString);
    let result = parseFloat(applyBodmas(bracketsResult));
    if (isNaN(result)) {
        return "error";
    }
    return result;
    }
    catch (e) {
    return 'error';
    }
}

// let testString = ' (2 + 3) X ((8 - 4) / 10) ';
// console.log(basicCalculatorWithStringAsInput(testString));


module.exports = {
    performOperation,
    getNumbersFromStrings,
    applyBodmas,
    evaluateBrackets,
    basicCalculatorWithStringAsInput,
};
