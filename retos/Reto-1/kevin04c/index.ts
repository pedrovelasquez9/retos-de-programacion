// Interactive
const fibonaccionInteractive = (n: number): string => {
  const fib: number[] = [0, 1];

  if (n <= 1) return "1";

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(1, n + 1).toString();
};

console.log(fibonaccionInteractive(5));
