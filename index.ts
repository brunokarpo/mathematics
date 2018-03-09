import { Subtract } from './src/subract';
import { Sum } from "./src/sum";

export const sum = (values :number[]): number => {
    let sum = new Sum();
    return sum.doSum(values);
};

export const subtract = (values: number[]): number => {
    let subtract = new Subtract();
    return subtract.doSubtract(values);
};