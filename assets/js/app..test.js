const cartFunction = require("./addToCart');


test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('Should add an item to cart when user click buy now', () => {
  expect(cartFunction(1)).toBe(!cart[productIndex].qty++)
});