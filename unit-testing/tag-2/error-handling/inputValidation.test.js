const { sumOfNumbers } = require("./inputValidation");

describe.skip("sumOfNumbers", () => {
  describe("Berechnung", () => {
    test("ob -100 und 101 die Summe 1 ergibt", () => {
      const [a, b] = [-100, 101];

      const result = sumOfNumbers(a, b);

      expect(result).toBe(1);
    });
  });

  describe("InputValidation", () => {
    test("Strings führen zu TypeError", () => {
      const [a, b] = ["Hallo", 101];

      expect(() => {
        sumOfNumbers(a, b);
      }).toThrow(TypeError);
    });
  });
});
