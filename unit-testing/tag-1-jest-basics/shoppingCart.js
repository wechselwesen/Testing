const cart = [];

function addCartItem(name, value) {
  cart.push({
    name,
    value,
  });
}

function getTotalValue() {
  let result = 0;
  for (item in cart) {
    result += item.value;
  }
  return result;
}

function getTotalValue2() {
  let result = 0;
  cart.forEach((item) => (result += item.value));
  return result;
}

module.exports.cart = cart;
module.exports.addCartItem = addCartItem;
module.exports.getTotalValue = getTotalValue;
