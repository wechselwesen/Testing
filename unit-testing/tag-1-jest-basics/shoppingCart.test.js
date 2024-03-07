const shoppingCart = require("./shoppingCart");

beforeEach(() => {
  //Assert
  shoppingCart.cart.length = 0;
});

test("Der Gesamtwert des Cart ist bei 0 Items gleich 0", () => {
  //Act
  const totalValue = shoppingCart.getTotalValue();

  //Assert
  expect(totalValue).toBe(0);
});

test("Nach dem zweiten addCartItem() muss die Array-Laenge 2 sein", () => {
  //Act
  shoppingCart.addCartItem("Birne", 3);

  //Assert
  expect(shoppingCart.cart.length).toBe(1);
});

test("Nach dem ersten addCartItem() muss die Array-Laenge 1 sein", () => {
  //Act
  shoppingCart.addCartItem("Apfel", 5);

  //Assert
  expect(shoppingCart.cart.length).toBe(1);
});
