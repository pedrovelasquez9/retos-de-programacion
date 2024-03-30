const palindrome = require("../src/palindrome");

describe("Tests on palindrome.js", () => {
  test("should return an error if no pass an argument", () => {
    expect(() => palindrome()).toThrow();
  });

  test("should return an error if argument is not a string", () => {
    const num = 33;
    const bool = true;
    const obj = { a: 1, b: 2, c: 3 };
    const arr = [1, 2, 3];

    expect(() => palindrome(num)).toThrow();
    expect(() => palindrome(bool)).toThrow();
    expect(() => palindrome(obj)).toThrow();
    expect(() => palindrome(arr)).toThrow();
  });

  test("should return 'La palabra es un palíndromo' if is word and palindrome", () => {
    const testWord = "Anna";

    expect(palindrome(testWord)).toBe("La palabra es un palíndromo");
  });

  test("should return 'La palabra no es un palíndromo' if is word and not a palindrome", () => {
    const testWord = "Miguel";
    const secondWord = 'Calculadora'

    expect(palindrome(testWord)).toBe("La palabra no es un palíndromo");
    expect(palindrome(secondWord)).toBe("La palabra no es un palíndromo");
  });

  test("should return 'La frase es un palíndromo' if is sentence and palindrome", () => {
    const testSentence = "¿Acaso hubo búhos acá?";
    const secondSentence =
      "Anita, la gorda lagartona, no traga la droga latina";

    expect(palindrome(testSentence)).toBe("La frase es un palíndromo");
    expect(palindrome(secondSentence)).toBe("La frase es un palíndromo");
  });

  test("should return 'La frase no es un palíndromo' if is sentence and not a palindrome", () => {
    const testSentence = "¿Como llegaste tan temprano?";

    expect(palindrome(testSentence)).toBe("La frase no es un palíndromo");
  });
});
