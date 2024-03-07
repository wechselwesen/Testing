function isAdult(age) {
  if (typeof age !== "number") throw new TypeError("Input is not a number");
  else if (age < 0) throw new TypeError("Age cannot be smaller than 0");
  else if (age >= 18) return true;
  return false;
}

module.exports = { isAdult };
