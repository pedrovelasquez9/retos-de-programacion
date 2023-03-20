import { describe, expect, test } from '@jest/globals';
import { caseTransformer } from '../src/index';

describe("test the in function caseTransformer", () => {
    test("should return the word with the format camelCase", () => {
        expect(caseTransformer("hola mundo", "camelCase")).toBe("holaMundo")
    })

    test("should return the word with the format PascalCase", () => {
        expect(caseTransformer("hola mundo", "pascalCase")).toBe("HolaMundo")
    })

    test("should return the word with the format kebab-case", () => {
        expect(caseTransformer("hola mundo", "kebabCase")).toBe("hola-mundo")
    })

    test("should return the word with the format snake_case", () => {
        expect(caseTransformer("hola mundo", "snakeCase")).toBe("hola_mundo")
    })
})