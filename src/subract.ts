export class Subtract {
    constructor() {}

    doSubtract(values: number[]): number {
        let result = values[0];
        values.slice(1).forEach((value) => result -= value);
        return result;
    }
}