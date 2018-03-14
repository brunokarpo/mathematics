export class Multiplication {

    constructor() {}

    doMultiplication(values: number[]): number {
        let result = 1;
        values.forEach((value) => result *= value);
        return result;
    }
}