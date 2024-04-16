const formatInput = require("../src/formatInput");

describe("Tests on formatInput.js", () => {
  test("should return a formated word or sentence", () => {
    expect(formatInput("óctoPU S")).toBe("octopus");
    expect(formatInput("DIsgus?@==/ting   Flavor")).toBe("disgustingflavor");
    expect(formatInput("Esdrújula")).toBe("esdrujula");
  });
});
