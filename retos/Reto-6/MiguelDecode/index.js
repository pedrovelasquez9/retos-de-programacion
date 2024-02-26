const numberIsPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};

const primesToNum = (num) => {
  let primeNumbers = [];

  for (let i = 2; i <= num; i++) {
    if (numberIsPrime(i)) primeNumbers.push(i);
  }

  return primeNumbers;
};

const getNoun = (num) => {
  if (typeof num !== "number")
    return `El tipo de dato introducido debe ser del tipo number`;

  if (num < 2) return `El valor introducido ${num} debe ser mayor a 1`;

  if (!Number.isInteger(num))
    return `El valor introducido ${num} debe ser un entero.`;

  return primesToNum(num);
};

const case1 = getNoun(-1);
const case2 = getNoun("Hello");
const case3 = getNoun(83.32);
const case4 = getNoun(10);
const case5 = getNoun(20);
const case6 = getNoun([1, 2, 3]);
const case7 = getNoun({ a: 1, b: 2, c: 3 });

console.log(case7);
