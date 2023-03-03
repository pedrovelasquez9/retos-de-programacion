import { getCleanText } from "../src/utils/textSanitizing";

describe("Test text sanitizer utility function uses", () => {
    const expectedResult = "hola mundo";
    const specialCharsStringInput: string = `hOlA -Mundo*`;
    test("Should return sanitized text without special characters", () => {
        const cleanText = getCleanText(specialCharsStringInput);
        expect(cleanText).toBe(expectedResult);
    });
});