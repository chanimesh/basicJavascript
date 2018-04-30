window.onload = function () {

const buttonsDetails = {
    'c': {
        id: 'cancel-btn',
    },
    '<=': {
        id: 'backspace-btn',
    },
    '(': {
        id: 'bracket-open-btn',
    },
    ')': {
        id: 'bracket-close-btn',
    },
    '+': {
        id: 'sum-btn',
    },
    '-': {
        id: 'difference-btn',
    },
    'x': {
        id: 'product-btn',
    },
    '/': {
        id: 'division-btn',
    },
    '=': {
        id: 'equal-btn',
    },
    '.': {
        id: 'point-btn',
    },
    '0': {
        id: 'zero-btn',
    },
    '1': {
        id: 'one-btn',
    },
    '2': {
        id: 'two-btn',
    },
    '3': {
        id: 'three-btn',
    },
    '4': {
        id: 'four-btn',
    },
    '5': {
        id: 'five-btn',
    },
    '6': {
        id: 'six-btn',
    },
    '7': {
        id: 'seven-btn',
    },
    '8': {
        id: 'eight-btn',
    },
    '9': {
        id: 'nine-btn',
    },
}

    function updateInputString(updateString) {
        let expressionText = document.getElementById('expression-text');
        let resultText = document.getElementById('result-text');
        if(updateString === 'C')
             expressionText.value = '';
        else if (updateString === '<=')
             expressionText.value = expressionText.value.slice(0,-1);
        else if (updateString === '=')
            resultText.value = basicCalculatorWithStringAsInput(expressionText.value);
        else
             expressionText.value += updateString;

    }

function buttonClick(e) {
    updateInputString(e.target.value);
    }


Object.keys(buttonsDetails).forEach(
    function (button_value) {
        document.getElementById(buttonsDetails[button_value].id).addEventListener("click", buttonClick);
    }
);

}

