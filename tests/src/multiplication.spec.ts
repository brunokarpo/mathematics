import { Multiplication } from '../../src/multiplication';
import { expect } from 'chai';
import 'mocha';

describe('Unit tests for Multiplication', () => {

    let multiplication = new Multiplication();

    it('should multiplicate two number', () => {
        let result = multiplication.doMultiplication([6, 5]);
        expect(result).to.equal(30);
    });
    it('should multiplicate a lot of numbers', () => {
        let result = multiplication.doMultiplication([5, 3, 4, 2]);
        expect(result).to.equal(120);
    });
    it('should return 0 when some number was 0', () => {
        let result = multiplication.doMultiplication([5, 0, 4, 2]);
        expect(result).to.equal(0);
    });
});