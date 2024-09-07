const averageVowels = require("../src/average-vowels");

describe("Tests on averageVowels.js", () => {
  test("should return an error if no pass arguments", () => {
    expect(() => averageVowels()).toThrow();
  });

  test("should return an error if the argument is not a string", () => {
    const testArray = ["test"];
    const testBoolean = true;
    const testObject = { a: 1, b: 2, c: 3 };
    expect(() => averageVowels(testArray)).toThrow();
    expect(() => averageVowels(testBoolean)).toThrow();
    expect(() => averageVowels(testObject)).toThrow();
  });

  test("should return a valid result as an object with average vowels in a word or sentence", () => {
    const testSentence = "Esta es una prueba";
    const testSentence2 = "Esta Es Una Prueba.,%/?*()"
    const expectedResult = { a: 0.375, e: 0.375, i: 0, o: 0, u: 0.25 };

    expect(averageVowels(testSentence)).toEqual(expectedResult);
    expect(averageVowels(testSentence2)).toEqual(expectedResult);
  });

});
