const getFizzBuzz = (num = 100) => {
  if (typeof num !== "number")
    return `El valor introducido ${num} no es un tipo de dato válido.`;

  if (!Number.isInteger(num))
    return `El valor introducido debe ser un número entero.`;

  if (num < 0) return `El valor introducido debe ser un número mayor a cero.`;

  let result = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }

  return result;
};

const case1 = getFizzBuzz();
const case2 = getFizzBuzz(10.3);
const case3 = getFizzBuzz(-3);
const case4 = getFizzBuzz("hello");

console.log(case1);
