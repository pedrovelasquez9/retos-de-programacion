export const ERROR_TYPING_ROMAN = "Número romano no válido";
export const ERROR_MAX_NUMER =
  "El entero máximo a transformar por la función será 3000 (MMM)";

type RomanType = { [k: string]: number };

const ROMAN_NUMERALS: RomanType = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const verifyRoman = (romanArr: string[]): boolean => {
  const resp = romanArr.every((r) => ROMAN_NUMERALS.hasOwnProperty(r));
  return resp;
};

const lettersUppercase = (romanArr: string[]) =>
  romanArr.map((r) => r.toUpperCase());

const convertRomanArray = (roman: string) => roman.split("");

export const romanToInteger = (roman: string) => {
  const romanSplited = lettersUppercase(convertRomanArray(roman));
  const isRomanNumbers = verifyRoman(romanSplited);

  if (!isRomanNumbers) return ERROR_TYPING_ROMAN;

  // varibles for convert roman to number
  let i: number = 0;
  let res: number = 0;

  while (i < romanSplited.length) {
    const number = ROMAN_NUMERALS[romanSplited[i]];
    const nextNumber = ROMAN_NUMERALS[romanSplited[i + 1]];

    if (nextNumber !== undefined && nextNumber > number) {
      res += nextNumber - number;
      i += 2;
      continue;
    }
    res += number;
    i++;
  }

  if (res >= 3000) return ERROR_MAX_NUMER;

  return res;
};

console.log(romanToInteger("xix")); // 19
