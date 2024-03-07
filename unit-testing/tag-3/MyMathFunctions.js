function addNumbers(a, b) {
  return a + b;
}

function divideNrs(a, b) {
  if (b === 0) throw TypeError("Cannot divide by 0");
  return a / b;
}

module.exports = { divideNrs, addNumbers };
