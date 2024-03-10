const fibonacci = (n) => {
  if (typeof n !== "number") return `${n} isn't a number.`;

  if (n < 0) return `Negative iterations aren't posible.`;

  if (n === 0 || n === 1) return 1;

  const result = [];

  if (n > 1) {
    for (let i = 0; i < n; i++) {
      result.length < 2
        ? result.push(1)
        : result.push(result[result.length - 1] + result[result.length - 2]);
    }
  }

  return result;
};

module.exports = fibonacci;
