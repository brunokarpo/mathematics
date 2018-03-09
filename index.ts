import { Sum } from "./src/sum";

export const sum = (values :number[]): number => {
    let sum = new Sum();
    return sum.doSum(values);
};