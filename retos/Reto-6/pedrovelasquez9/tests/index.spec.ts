import {describe, expect, test} from '@jest/globals';
import { INPUT_ERROR_MESSAGE } from '../src/constants';
import { getNouns, isNoun } from '../src';

describe("Input error cases", () => {
    test("Returns an error when the input number is <= 1", () => {
        const testNumber:number = 0;
        const result:string = getNouns(testNumber);
        expect(result).toBe(INPUT_ERROR_MESSAGE);
    });

    test("Returns false when number is not noun", () => {
        const testNumber: number = 4;
        const result: boolean = isNoun(testNumber);
        expect(result).toBe(false);
    })
});

describe("Noun number validation", () => {
    test("Returns a list of noun numbers based on input number", () => {
        const testNumber: number = 20;
        const expectedArray: string = [2, 3, 5, 7, 11, 13, 17, 19].toString();
        const result: string = getNouns(testNumber);
        expect(result).toBe(expectedArray);
    });

    test("Returns true when number is noun", () => {
        const testNumber: number = 2;
        const result: boolean = isNoun(testNumber);
        expect(result).toBe(true);
    })
})