const fibonacci = (n) => {
  if (typeof n !== "number") throw new Error(`${n} isn't a number.`);

  if (n < 0) throw new Error(`Negative iterations aren't posible.`);

  if (n === 0 || n === 1) return 1;

  const array = [];

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      array.length < 2
        ? array.push(1)
        : array.push(array[array.length - 1] + array[array.length - 2]);
    }
  }

  return array;
};

console.log(fibonacci(6));
