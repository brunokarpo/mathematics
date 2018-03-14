import { sum, subtract, multiplication } from '../index';
import { expect } from 'chai';
import 'mocha';

describe('tests of index functions of module', () => {
    it('should execute sum function of two numbers', () => {
        let result = sum([2, 4]);
        expect(result).to.equal(6);
    });
    it('should execute subtract function of two numbers', () => {
        let result = subtract([18, 21]);
        expect(result).to.equal(-3);
    });
    it('should execute multiplication function of two number', () => {
        let result = multiplication([15, 5]);
        expect(result).to.equal(75);
    });
});