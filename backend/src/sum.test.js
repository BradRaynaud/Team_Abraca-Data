const {sum, testHash, testLogin} = require('./sum');



test('Framework Test', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test the runtime of the hash rounds
test("Hash Test", () => {
  expect(testHash('password123',10)).toBeDefined();
  expect(testHash('password123',11)).toBeDefined();
  expect(testHash('password123',12)).toBeDefined();
  expect(testHash('password123',13)).toBeDefined();
  expect(testHash('password123',14)).toBeDefined();
});


test("Login Test", () => {
  expect(testLogin('$2b$10$x5bYRmsuUArEI7NQuBbQSuDYk7qshNyDTsIYCBpPUENdYCOgTRHae','password123')).toBe(true);
  expect(testLogin('$2b$10$x5bYRmsuUArEI7NQuBbQSuDYk7qshNyDTsIYCBpPUENdYCOgTRHae','password1234')).toBe(false);
});