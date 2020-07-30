const calc = require("./calculator");

test("adds", () => {
  expect(calc.sum(1, 2)).toBe(3);
});

test("subtracts", () => {
  expect(calc.subtract(3, 2)).toBe(1);
});

test("multiplies", () => {
  expect(calc.multiply(2, 3)).toBe(6);
});

test("divides", () => {
  expect(calc.divide(10, 2)).toBe(5);
});
