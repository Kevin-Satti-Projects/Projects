const capitalize = require("./capitalize");

test("returns string with first letter capitalized", () => {
  expect(capitalize("hello there!")).toBe("Hello there!");
});

test("returns string with first letter capitalized", () => {
  expect(capitalize("nice")).toBe("Nice");
});
