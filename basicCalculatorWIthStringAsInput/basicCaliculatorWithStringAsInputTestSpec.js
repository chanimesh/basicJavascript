let calc = require('./basicCalculatorWithStringAsInput');
describe('The performOperation', function() {
    it('returns sum the values', function () {
        const result = calc.performOperation(2,4,'+');
        expect(result).toBe(6)
    });

    it('returns difference of values', function () {
        const result = calc.performOperation(4,2,'-');
        expect(result).toBe(2);
    });

    it('returns negative difference of values', function () {
        const result = calc.performOperation(2,4,'-');
        expect(result).toBe(-2);
    });
    it('returns the product of values', function () {
        const result = calc.performOperation(5, 6,'x');
        expect(result).toBe(30);
    });
    it('returns division of values', function () {
        const result = calc.performOperation(4,2,'/');
        expect(result).toBe(2);
    });
    it('returns infinite', function () {
        const result = calc.performOperation(2,0,'/');
        expect(result).toBePositiveInfinity();
    });
    it('returns negative infinity', function () {
        const result = calc.performOperation(-2,0,'/');
        expect(result).toBeNegativeInfinity();
    });
    it('throws "Wrong operation', function () {
        const result = function () {calc.performOperation(5,4,'s')};
        expect(result).toThrow('Wrong operation')
    });
});

describe('The getNumbersFromStrings ', function () {
    it('returns evaluated string ', function () {
        const result = calc.getNumbersFromStrings('2+3','5x2','x');
        expect(result).toBe('2+15x2');
    });
    it('returns evaluated string only from last digit', function () {
        const result = calc.getNumbersFromStrings('3+4.5.5','8+5','-');
        expect(result).toBe('3+4.-2.5+5');
    });
    it('returns evaluated string only from first digit from second string', function () {
        const result = calc.getNumbersFromStrings('2+8','5.2.3-4','+');
        expect(result).toBe('2+13.2.3-4');
    });
    it('throws "Could not find numbers in the string" when does not find a number at the end of first string', function () {
        const result = function () {calc.getNumbersFromStrings('sdfs','45+42','+');};
        expect(result).toThrow('Could not find numbers in the string');
    });
});

describe('The applyBodmas ', function () {
    it('returns the evaluation of the string', function () {
        const result = calc.applyBodmas('2+3-2x3/6');
        expect(result).toBe('4');
    });
    it('return the evaluation of the string', function () {
        const result =calc.applyBodmas('2+4+5-3+8');
        expect(result).toBe('16');
    });
    it('returns the evaluation of the string', function () {
        const result = function () { calc.applyBodmas('(2+3)')};
        expect(result).toThrow()
    });
});

describe('The evaluateBrackets ', function () {
    it('should evaluate brackets and give the return', function () {
        const result = calc.evaluateBrackets('(2+1)');
        expect(result).toBe('3')
    });
    it('should evaluate the string', function () {
            const result = calc.evaluateBrackets('(2+3)X((8-4)/10)');
            expect(result).toBe('5X0.4');
    });
});

describe('The basicCalculatorWithStringAsInput', function () {
    it('should evaluate string', function () {
        const result = calc.basicCalculatorWithStringAsInput(' (2 + 3) X ((8 - 4) / 10) ');
        expect(result).toBe(2);
    });
    it('should evaluate string', function () {
        const result = calc.basicCalculatorWithStringAsInput(' (2 + 3) X ((4 - 8) / 10) ');
        expect(result).toBe(-2);
    });
});
