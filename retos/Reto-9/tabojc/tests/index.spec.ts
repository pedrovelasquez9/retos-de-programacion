
import {describe, expect, test} from '@jest/globals';
import { vowelCounter } from '../src/index';

const TEST_VALUES = {
    SPECIAL_SENTENCE_INPUT: "Esto es una prueba",
    SPECIAL_OBJECT_OUTPUT: { "e": 3/8, "o": 1/8, "u": 2/8, "a": 2/8 },
    BLANK_SENTENCE_INPUT: "",
    BLANK_OBJECT_OUTPUT: {},
    EMPTY_SENTENCE_INPUT: undefined,
    EMPTY_OBJECT_INPUT: {},
    NULL_SENTENCE_INPUT: null,
    NULL_OBJECT_INPUT: {},
}

describe("Validate the average amount of vowels in an sentence", () => {
    test(`Check sentences '${TEST_VALUES.SPECIAL_SENTENCE_INPUT}' with more than one vowels`, () => {
        const response = { "e": 3/8, "o": 1/8, "u": 2/8, "a": 2/8 };
        expect(vowelCounter(TEST_VALUES.SPECIAL_SENTENCE_INPUT)).toMatchObject(TEST_VALUES.SPECIAL_OBJECT_OUTPUT)
    });

    test(`Check sentences '${TEST_VALUES.BLANK_SENTENCE_INPUT}' with blank sentence`, () => {
        const response = {};
        expect(vowelCounter(TEST_VALUES.BLANK_SENTENCE_INPUT)).toMatchObject(TEST_VALUES.BLANK_OBJECT_OUTPUT);
    });

    test(`Check sentences '${TEST_VALUES.EMPTY_SENTENCE_INPUT}' with empty sentence`, () => {
        const response = {};
        expect(vowelCounter(TEST_VALUES.EMPTY_SENTENCE_INPUT)).toMatchObject(TEST_VALUES.EMPTY_OBJECT_INPUT);
    });

    test(`Check sentences '${TEST_VALUES.NULL_SENTENCE_INPUT}' with null sentence`, () => {
        const response = {};
        expect(vowelCounter(TEST_VALUES.NULL_SENTENCE_INPUT)).toMatchObject(TEST_VALUES.NULL_OBJECT_INPUT);
    });

});
