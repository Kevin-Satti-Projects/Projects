const reverse = require("./reverseString");

test("reverses string", () => {
  expect(reverse("Hello there!")).toBe("!ereht olleH");
});
