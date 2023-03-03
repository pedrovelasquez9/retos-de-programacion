import { Formats, DEFAULT_FORMAT } from "../src/utils/constants";
import { getInputFormat } from "../src/utils/formatDetector";

describe("Test case detector function", () => {
    const SNAKE_CASE_TEXT = "hola_mundo";
    const KEBAB_CASE_TEXT = "hola-mundo";
    const PASCAL_CASE_TEXT = "HolaMundo";
    const CAMEL_CASE_TEXT = "holaMundo";
    const DEFAULT_CASE_TEXT = "hola mundo";

    test("should return 'snake' as input case format",() => {
        const format = getInputFormat(SNAKE_CASE_TEXT);
        expect(format).toBe(Formats.SNAKE);
    });

    test("should return 'kebab' as input case format",() => {
        const format = getInputFormat(KEBAB_CASE_TEXT);
        expect(format).toBe(Formats.KEBAB);
    });

    test("should return 'pascal' as input case format",() => {
        const format = getInputFormat(PASCAL_CASE_TEXT);
        expect(format).toBe(Formats.PASCAL);
    });

    test("should return 'camel' as input case format",() => {
        const format = getInputFormat(CAMEL_CASE_TEXT);
        expect(format).toBe(Formats.CAMEL);
    });

    test("should return 'default' as input case format is not recognized",() => {
        const format = getInputFormat(DEFAULT_CASE_TEXT);
        expect(format).toBe(DEFAULT_FORMAT);
    });
});