import {describe, expect, test} from '@jest/globals';
import { INVALID_ROMAN_NUM_ERROR, isInvalidRomanNumber, MAX_NUMBER_LIMIT_ERROR, splitInputString, transformRomanToInt } from '../src';

const testInputValidRomanNumber = "I";
const testInputInvalidRomanNumber = "A";

describe("Validates that roman number exists", () => {
    test("Test that a valid roman input is passed for validation", () => {
        const isValid = isInvalidRomanNumber(testInputValidRomanNumber.split(""));
        expect(isValid).toBe(false);
    });

    test("Test that an invalid roman input is passed for validation", () => {
        const isValid = isInvalidRomanNumber(testInputInvalidRomanNumber.split(""));
        expect(isValid).toBe(true);
    });
});

describe("Split input valid roman number into string array", () => {
    test("It should return a string array from roman number input", () => {
        const romanNumberArray = splitInputString(testInputValidRomanNumber);
        expect(romanNumberArray.length).toBeGreaterThan(0);
        expect(romanNumberArray[0]).toBe(testInputValidRomanNumber);
    });
});

describe("Test main roman to int transformer function", () => {
    test("It should return an error message from invalid roman number", () => {
        const transformationResult = transformRomanToInt(testInputInvalidRomanNumber);
        expect(transformationResult).toBe(INVALID_ROMAN_NUM_ERROR);
    });

    test("It should return transformed integer number from roman number input", () => {
        const testInputRomanNumber = "III";
        const intExpectedNumber = 3;
        const transformationResult = transformRomanToInt(testInputRomanNumber);
        expect(transformationResult).toBe(intExpectedNumber);
    });

    test("It should return transformed integer number from roman number input", () => {
        const testInputRomanNumber = "IV";
        const intExpectedNumber = 4;
        const transformationResult = transformRomanToInt(testInputRomanNumber);
        expect(transformationResult).toBe(intExpectedNumber);
    });

    test("It should return transformed integer number from roman number input", () => {
        const testInputRomanNumber = "XV";
        const intExpectedNumber = 15;
        const transformationResult = transformRomanToInt(testInputRomanNumber);
        expect(transformationResult).toBe(intExpectedNumber);
    });

    test("It should return transformed integer number from roman number input", () => {
        const testInputRomanNumber = "IX";
        const intExpectedNumber = 9;
        const transformationResult = transformRomanToInt(testInputRomanNumber);
        expect(transformationResult).toBe(intExpectedNumber);
    });

    test("It should return an error for max number validation", () => {
        const testInputRomanNumber = "MMMM";
        const transformationResult = transformRomanToInt(testInputRomanNumber);
        expect(transformationResult).toBe(MAX_NUMBER_LIMIT_ERROR);
    });
});