import { Subtract } from './src/subract';
import { Sum } from "./src/sum";
import { Multiplication } from "./src/multiplication";

export const sum = (values :number[]): number => {
    let sum = new Sum();
    return sum.doSum(values);
};

export const subtract = (values: number[]): number => {
    let subtract = new Subtract();
    return subtract.doSubtract(values);
};

export const multiplication = (values: number[]): number => {
    let multiplication = new Multiplication();
    return multiplication.doMultiplication(values);
};