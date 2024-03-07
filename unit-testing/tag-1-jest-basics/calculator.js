function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

function min(a, b) {
  return a < b ? a : b; //ternäre Operator
}

function min2(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
