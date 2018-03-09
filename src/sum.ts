export class Sum {

    constructor() {

    }

    doSum(values: number[]): number {
        let result = 0;
        values.forEach(function(value) {
            result += value;
        });
        return result;
    }
}