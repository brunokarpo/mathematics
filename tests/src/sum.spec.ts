import { Sum } from './../../src/sum';
import { expect } from 'chai';
import 'mocha';

describe('Sum tests function', () => {

    let sum = new Sum();

    it('should return the sum of two integer numbers', () => {
        var result = sum.doSum([2, 4]);
        expect(result).to.equal(6);
    });

    it('should return the sum of a lot of numbers', () => {
        var result = sum.doSum([-5, 4, 18, -25]);
        expect(result).to.equal(-8);
    });

    it('should return zero when no parameters send to function', () => {
        var result = sum.doSum([]);
        expect(result).to.equal(0);
    })
});