const fibonacci = require("../src/fibonacci");

describe("Tests on function fibonacci.js", () => {
  test("should return an error in case of param isn't a number", () => {
    const testOne = "hello";
    const testTwo = false;
    const testThree = [1, 2, 3];
    const testFour = { name: "name", age: 30 };

    expect(fibonacci(testOne)).toBe(`${testOne} isn't a number.`);
    expect(fibonacci(testTwo)).toBe(`${testTwo} isn't a number.`);
    expect(fibonacci(testThree)).toBe(`${testThree} isn't a number.`);
    expect(fibonacci(testFour)).toBe(`${testFour} isn't a number.`);
  });

  test("should return an error in case of param is a negative number", () => {
    expect(fibonacci(-3)).toBe("Negative iterations aren't posible.");
  });

  test("should return a valid fibonacci array", () => {
    const num = 6;

    expect(fibonacci(num).length).toBe(6);
    expect(fibonacci(num)).toStrictEqual([1, 1, 2, 3, 5, 8]);
  });
});
