const fibonacci = require('./fibonacci');

test('6 values', () => {
  expect(fibonacci(6)).toBe("1,1,2,3,5,8");
});

test('values 0', () => {
  expect(fibonacci(0)).toBe("1");
});

test('values 1', () => {
  expect(fibonacci(1)).toBe("1");
});