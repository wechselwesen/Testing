const { addNumbers, divideNrs } = require("./MyMathFunctions");

describe("Test Basic Math Add Functions", () => {
  test("Basic Add Function to pass with Basic input", () => {
    const result = addNumbers(2, 5);
    console.log("My Result", result);
    expect(result).toBe(7);
  });
});

// describe("Test Basic Math Divide Functions", () => {
//   test("Basic Divide Function to pass with Basic input", () => {
//     const result = divideNrs(10, 5);
//     console.log("MY division result", result);
//     expect(result).toBe(2);
//   });

//   test("Basic Divide Function to throw error by dividing by 0", () => {
//     expect(() => {
//       divideNrs(10, 0);
//     }).toThrow(TypeError);
//   });
// });

describe("Test Basic Math Divide Functions", () => {
  test("Divide positive numbers", () => {
    const result = divideNrs(10, 5);

    expect(result).toBe(2);
  });

  test("Basic Divide Function to throw error by dividing by 0", () => {
    expect(() => {
      divideNrs(10, 0);
    }).toThrow(TypeError);
  });
});
