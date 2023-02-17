import {describe, expect, test} from '@jest/globals';
import { caseTransformer } from '../src/index';
import { Formats } from '../src/utils/constants';
import { getCleanText } from './../src/utils/textSanitizing';
import { formatters } from './../src/utils/caseFormatter';

const normalizedStringInput: string = `hola mundo`;
const mixedStringInput: string = `hOla mUnDo`;
const specialCharsStringInput: string = `hOlA -Mundo*`;
const singleWordInput: string = `hola`;

describe("Test with different inputs for Camel Case", () => {
    const expectedResult = "holaMundo";
    test("Should return sentence in Camel Case", () => {
        const formattedText = caseTransformer(normalizedStringInput, Formats.CAMEL);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return sentence in Camel Case with mixed upper and lower cases", () => {
        const formattedText = caseTransformer(mixedStringInput, Formats.CAMEL);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should call formatter utility function directly and return formatted text", () => {
        const cleanText = getCleanText(mixedStringInput);
        const formattedText = formatters.camel(cleanText);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return single word in camel case format", () => {
        const singleWordExpectedResult: string = singleWordInput;
        const cleanText = getCleanText(singleWordInput);
        const formattedText = formatters.camel(cleanText);
        expect(formattedText).toBe(singleWordExpectedResult);
    });
});

describe("Test with different inputs for Pascal Case", () => {
    const expectedResult = "HolaMundo";
    test("Should return sentence in Pascal Case", () => {
        const formattedText = caseTransformer(normalizedStringInput, Formats.PASCAL);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return sentence in Pascal Case with mixed upper and lower cases", () => {
        const formattedText = caseTransformer(mixedStringInput, Formats.PASCAL);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should call formatter utility function directly and return formatted text", () => {
        const cleanText = getCleanText(mixedStringInput);
        const formattedText = formatters.pascal(cleanText);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return single word in pascal case format", () => {
        const singleWordExpectedResult: string = "Hola";
        const cleanText = getCleanText(singleWordInput);
        const formattedText = formatters.pascal(cleanText);
        expect(formattedText).toBe(singleWordExpectedResult);
    });
});

describe("Test with different inputs for Snake Case", () => {
    const expectedResult = "hola_mundo";
    test("Should return sentence in Snake Case", () => {
        const formattedText = caseTransformer(normalizedStringInput, Formats.SNAKE);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return sentence in Snake Case with mixed upper and lower cases", () => {
        const formattedText = caseTransformer(mixedStringInput, Formats.SNAKE);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should call formatter utility function directly and return formatted text", () => {
        const cleanText = getCleanText(mixedStringInput);
        const formattedText = formatters.snake(cleanText);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return single word in camel case format", () => {
        const singleWordExpectedResult: string = singleWordInput;
        const cleanText = getCleanText(singleWordInput);
        const formattedText = formatters.snake(cleanText);
        expect(formattedText).toBe(singleWordExpectedResult);
    });
});

describe("Test with different inputs for Kebab Case", () => {
    const expectedResult = "hola-mundo";
    test("Should return sentence in Kebab Case", () => {
        const formattedText = caseTransformer(normalizedStringInput, Formats.KEBAB);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return sentence in Kebab Case with mixed upper and lower cases", () => {
        const formattedText = caseTransformer(mixedStringInput, Formats.KEBAB);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should call formatter utility function directly and return formatted text", () => {
        const cleanText = getCleanText(mixedStringInput);
        const formattedText = formatters.kebab(cleanText);
        expect(formattedText).toBe(expectedResult);
    });

    test("Should return single word in camel case format", () => {
        const singleWordExpectedResult: string = singleWordInput;
        const cleanText = getCleanText(singleWordInput);
        const formattedText = formatters.kebab(cleanText);
        expect(formattedText).toBe(singleWordExpectedResult);
    });
});

describe("Test text sanitizer utility function uses", () => {
    const expectedResult = "hola mundo";
    test("Should return sanitized text without special characters", () => {
        const cleanText = getCleanText(specialCharsStringInput);
        expect(cleanText).toBe(expectedResult);
    });
});