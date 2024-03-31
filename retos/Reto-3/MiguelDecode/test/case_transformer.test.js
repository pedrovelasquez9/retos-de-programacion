const caseTransformer = require("../src/case_transformer");

describe("Tests on case_transforme.js", () => {
  test("should return an error if no pass arguments", () => {
    expect(() => caseTransformer()).toThrow();
  });

  test("should return an error if caseFormat is not valid", () => {
    expect(() => caseTransformer("hola mundo", "RandomCase")).toThrow();
  });

  test("should return a valid case transformer result for a word", () => {
    expect(caseTransformer("programación", "snake")).toBe("programacion");
    expect(caseTransformer("programación", "pascal")).toBe("Programacion");
    expect(caseTransformer("programación", "kebab")).toBe("programacion");
    expect(caseTransformer("programación", "camel")).toBe("programacion");
  });

  test("should return a valid case transformer result for a sentence", () => {
    const testSentence = "Hola Mundo!";

    expect(caseTransformer(testSentence, "snake")).toBe("hola_mundo");
    expect(caseTransformer(testSentence, "pascal")).toBe("HolaMundo");
    expect(caseTransformer(testSentence, "kebab")).toBe("hola-mundo");
    expect(caseTransformer(testSentence, "camel")).toBe("holaMundo");
  });
});
