const caesar = require("./caesar");

test("changes with key", () => {
  expect(caesar("Hello there!", 2)).toBe("Jgnnq vjgtg!");
});
