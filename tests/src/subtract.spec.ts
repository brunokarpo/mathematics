import { subtract } from './../../index';
import { Subtract } from '../../src/subract';
import { expect } from 'chai';
import 'mocha';

describe('Unit tests to Subtract class', () => {
    let subtract = new Subtract();
    it('should subtract two numbers', () => {
        var result = subtract.doSubtract([1, 45]);
        expect(result).to.equal(-44);
    });
});