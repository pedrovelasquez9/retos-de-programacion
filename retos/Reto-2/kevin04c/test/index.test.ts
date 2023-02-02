import { PalindromeMessages } from "../EnumPalimdrome";
import { isPalindrome, cleanWord } from "../index";

describe("Test in index.ts", () => {
  test("should normalizate the word", () => {
    expect(cleanWord("CRéPé")).toBe("crepe");
  });

  test(`should return ${PalindromeMessages.SUCESS} if the word is palindrome`, () => {
    expect(isPalindrome("¿Acaso hubo búhos acá?")).toBe(
      PalindromeMessages.SUCESS
    );
  });
  test(`should return ${PalindromeMessages.FAIL} if the word is palindrome`, () => {
    expect(isPalindrome("QUE ESTA PASANDO")).toBe(
      PalindromeMessages.FAIL
    );
  });
});
