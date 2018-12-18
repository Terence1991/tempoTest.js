const script = require("./script");


test('adds 1 + 2 to equal 3', () => {
  expect(script.sum(1, 2)).toBe(3);
});


test('Should add an item to cart when user click buy now', () => {
  expect(script.addToCart(1)).toBe(!script.cart[productIndex].qty++)
});



