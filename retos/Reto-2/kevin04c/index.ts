import { PalindromeMessages } from "./EnumPalimdrome";

export const isPalindrome = (word: string): string => {
  const normalizeWord = cleanWord(word);
  const palindrome: boolean =
    normalizeWord === normalizeWord.split("").reverse().join("");

  return palindrome ? PalindromeMessages.SUCESS : PalindromeMessages.FAIL;
};

export function cleanWord(wordForNormalize: string): string {
  return wordForNormalize
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[\W,.¿?!¡]/g, "")
    .toLowerCase();
}

console.log(isPalindrome("¿Acaso hubo búhos acá?"));
