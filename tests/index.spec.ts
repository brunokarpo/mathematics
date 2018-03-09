import { sum } from '../index';
import { expect } from 'chai';
import 'mocha';

describe('tests of index functions of module', () => {
    it('should execute sum function of two numbers', () => {
        let result = sum([2, 4]);
        expect(result).to.equal(6);
    });
});