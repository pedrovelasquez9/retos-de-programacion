import {describe, expect, test} from '@jest/globals';
import { romanToInteger, ERROR_TYPING_ROMAN, ERROR_MAX_NUMER } from '../src/index';

describe("Test in function romanToInteger", () => {
    test("Should return 19", () => { 
        expect(romanToInteger("XIX")).toBe(19)
    })

    test("Should return a message Número romano no válido", () => { 
        expect(romanToInteger("Xada644X")).toBe(ERROR_TYPING_ROMAN)
    })

    test("Should return a message El entero máximo a transformar por la función será 3000 (MMM)", () => { 
        expect(romanToInteger("MMMIX")).toBe(ERROR_MAX_NUMER)
    })
})