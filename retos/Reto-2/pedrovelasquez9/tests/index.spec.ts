import {describe, expect, test} from '@jest/globals';
import {getFormattedText, validatePalindromeText, confirmPalindrome, isAPhrase} from "../src/index";

const CASE_MESSAGES = {
    WORD_IS_PALINDROME: "La palabra es un palíndromo",
    WORD_IS_NOT_PALINDROME: "La palabra no es un palíndromo",
    PHRASE_IS_PALINDROME: "La frase es un palíndromo",
    PHRASE_IS_NOT_PALINDROME: "La frase no es un palíndromo"
};

const TEST_VALUES = {
    SPECIAL_CHARACTERS_INPUT: "¿Programación?",
    SPECIAL_CHARACTERS_OUTPUT: "programacion",
    SIMPLE_PHRASE_INPUT: "Hola mundo",
    FORMATTED_PHRASE_OUTPUT: "holamundo",
    PALINDROME_PHRASE_INPUT: "¿Acaso hubo búhos acá?",
    PALINDROME_WORD_INPUT: "Ana"
} 

describe("Cleaning and formatting text utilities", () => {
    test("it removes special characters", () => {
        expect(getFormattedText(TEST_VALUES.SPECIAL_CHARACTERS_INPUT)).toBe(TEST_VALUES.SPECIAL_CHARACTERS_OUTPUT);
    });

    test("it removes additional white spaces", () => {
        expect(getFormattedText(`${TEST_VALUES.SPECIAL_CHARACTERS_INPUT} `)).toBe(TEST_VALUES.SPECIAL_CHARACTERS_OUTPUT);
    });

    test("it removes all white spaces", () => {
        expect(getFormattedText(`${TEST_VALUES.SIMPLE_PHRASE_INPUT} `)).toBe(TEST_VALUES.FORMATTED_PHRASE_OUTPUT);
    });
});

describe("Get palindrome validation from input text", () => {
    
    test("it expects input word to be a palindrome", () => {
        const inputWord = getFormattedText(TEST_VALUES.PALINDROME_WORD_INPUT);
        expect(validatePalindromeText(inputWord)).toBe(true);
    });

    test("it expects input phrase to be a palindrome", () => {
        const inputPhrase = getFormattedText(TEST_VALUES.PALINDROME_PHRASE_INPUT);
        expect(validatePalindromeText(inputPhrase)).toBe(true);
    });

    test("it expects input word to not be a palindrome", () => {
        const inputWord = getFormattedText(`${TEST_VALUES.SPECIAL_CHARACTERS_INPUT}`);
        expect(validatePalindromeText(inputWord)).toBe(false);
    })

    test("it expects input phrase to not be a palindrome", () => {
        const inputPhrase = getFormattedText(TEST_VALUES.SIMPLE_PHRASE_INPUT);
        expect(validatePalindromeText(inputPhrase)).toBe(false);
    })
});

describe("Get if input text is a word or a phrase", () => {
    test("it expects input text to not be a phrase", () => {
        expect(isAPhrase(TEST_VALUES.SPECIAL_CHARACTERS_OUTPUT)).toBe(false);
    })

    test("it expects input text to be a phrase", () => {
        expect(isAPhrase(`${TEST_VALUES.SIMPLE_PHRASE_INPUT} `)).toBe(true);
    })
})

describe("Get word/phrase palindrome validation result", () => {

    test("it expects a confirmation message that the input word is a palindrome", () => {
        const inputWord = "Anna";
        expect(confirmPalindrome(inputWord)).toBe(CASE_MESSAGES.WORD_IS_PALINDROME);
    })

    test("it expects a confirmation message that the input word is not a palindrome", () => {
        const inputWord = "hola";
        expect(confirmPalindrome(inputWord)).toBe(CASE_MESSAGES.WORD_IS_NOT_PALINDROME);
    })

    test("it expects a confirmation message that the input phrase is not a palindrome", () => {
        const inputWord = "hola mundo";
        expect(confirmPalindrome(inputWord)).toBe(CASE_MESSAGES.PHRASE_IS_NOT_PALINDROME);
    })

    test("it expects a confirmation message that the input phrase is a palindrome", () => {
        const inputWord = "¿Acaso hubo búhos acá?";
        expect(confirmPalindrome(inputWord)).toBe(CASE_MESSAGES.PHRASE_IS_PALINDROME);
    })
})