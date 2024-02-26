const romanNumbers = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const getIntegerFromRoman = (roman) => {
  let result = 0;

  const regExp = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

  if (typeof roman !== "string")
    return `El valor introducido "${roman}" no cumple con el tipo requerido`;

  if (!regExp.test(roman))
    return `El valor introducido "${roman}" no es un número en formato romano`;

  let arr = roman.split("");

  for (let i = 0; i < arr.length; i++) {
    const substract = romanNumbers[arr[i]] < romanNumbers[arr[i + 1]];

    if (substract) {
      result = result + romanNumbers[arr[i + 1]] - romanNumbers[arr[i]];
      i++;
    } else {
      result = result + romanNumbers[arr[i]];
    }
  }

  return `**${result}**`;
};

const case1 = getIntegerFromRoman("MMY");
const case2 = getIntegerFromRoman("MMM");
const case3 = getIntegerFromRoman("IV");
const case4 = getIntegerFromRoman("XIV");
const case5 = getIntegerFromRoman("XIX");
const case6 = getIntegerFromRoman("CM");
const case7 = getIntegerFromRoman("LXXX");
const case8 = getIntegerFromRoman("MCMXCIX");

const case9 = getIntegerFromRoman("Hello");
const case10 = getIntegerFromRoman([3, 8, 9]);
const case11 = getIntegerFromRoman(["XIV"]);

console.log(case11);
