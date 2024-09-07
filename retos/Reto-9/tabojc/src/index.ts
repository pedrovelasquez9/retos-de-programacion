export type VowelResponse = {
  a: number;
  e: number;
  i: number;
  o: number;
  u: number;
  [key: string]: number; // Add this index signature
} | {};

export function vowelCounter(inputChars: string | undefined | null): VowelResponse {
  if (inputChars === undefined || inputChars === null) return {};

  const VOWELCHARS:string[] = ["a", "e", "i", "o", "u"];
  function countVowels(inputChars: string): VowelResponse {
    const result =inputChars.split('').reduce((acc: Record<string, number>, key) => {

      const lowerCaseChar = key.toLowerCase();

      if (VOWELCHARS.includes(lowerCaseChar) === false) return {...acc};

      let nextValue = lowerCaseChar in acc  ? acc[lowerCaseChar] + 1.0 : 1;

      return {...acc, [lowerCaseChar]: nextValue}
    }, {});

    return result;
  }
  function averageVowels(vowels: Record<string, number>): VowelResponse {
    const total = Object.values(vowels).reduce((acc: number, value) => {
      return acc = acc + value;
    }, 0.0);

    return Object.keys(vowels).reduce((acc: Record<string, number>, key) =>  {
      return { ...acc,[key]: vowels[key] * 1.0 / total }
    }, {});
  }
  return averageVowels(countVowels(inputChars));
}