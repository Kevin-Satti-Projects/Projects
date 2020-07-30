const minmax = require("./minmax");

test("works", () => {
  expect(minmax([1, 8, 3, 4, 2, 6])).toMatchObject({
    average: 4,
    maximum: 8,
    minimum: 1,
    length: 6,
  });
});
