const perCalc = require('./percentageCalculator');

describe('The getPercent calculates percent value ', function () {
    it('returns the percent value 32% of 100', function () {
      result = perCalc.getPercent(32,100);
      expect(result).toBe(32);
    });
    it('returns the percent value 23% of 100', function () {
        result = perCalc.getPercent(23,100);
        expect(result).toBe(23);
    });
    it('returns the percent 10% of 120', function () {
        result = perCalc.getPercent(10,120);
        expect(result).toEqual(12);
    });
    it('returns the percent ', function () {
        result = perCalc.getPercent(-10,120);
        expect(result).toEqual(-12);
    });
    it('returns the percent ', function () {
        result = perCalc.getPercent(200,100);
        expect(result).toEqual(200);
    });

});

describe('The calculatePercentage calculates percentage ', function () {
    it('returns how much percent is 20 of 100', function () {
        result = perCalc.calculatePercentage(20,100);
        expect(result).toBe(20);
    });
    it('returns how much percent is 12 of 120', function () {
        result = perCalc.calculatePercentage(12,120);
        expect(result).toEqual(10);
    });
    it('returns how much percent is 150 of 100', function () {
        result = perCalc.calculatePercentage(150,100);
        expect(result).toEqual(150);
    });
    it('returns how much percent is -25 of 200', function () {
        result = perCalc.calculatePercentage(-25,200);
        expect(result).toEqual(-12.5)
    });
    it('returns how much percent is 100 of 0', function () {
        result = () => {perCalc.calculatePercentage(100,0)};
        expect(result).toThrow('Total cannot be zero');
    });
});
describe('The getRemaining calculates remaining of total', function () {
    it('returns remaining value from 32% of 100', function () {
        result = perCalc.getRemaining(32,100);
        expect(result).toBe(68);
    });
    it('returns remaining value from 23% of 100', function () {
        result = perCalc.getRemaining(23,100);
        expect(result).toBe(77);
    });
    it('returns remaining value from 10% of 120', function () {
        result = perCalc.getRemaining(10,120);
        expect(result).toEqual(108)
    });
});

describe('The percentChange calculates difference percentage ', function () {
    it('returns the percent difference of 100 and 120', function () {
        result = perCalc.diffPercent(100,120);
        expect(result).toBe(20);
    });
    it('returns the percent difference of 100 and 80', function () {
        result = perCalc.diffPercent(100,80);
        expect(result).toBe(-20);
    });
    it('returns the percent difference of 0 and 80', function () {
        result = () => { perCalc.diffPercent(0,80) };
        expect(result).toThrow('current value cannot be zero');
    });
    it('returns the percent difference of -10 and 90', function () {
        result = perCalc.diffPercent(-10,90);
        expect(result).toEqual(-1000);
    });
    it('returns the percent difference of -10 and -15', function () {
        result = perCalc.diffPercent(-10,-15);
        expect(result).toEqual(50);
    });
});
