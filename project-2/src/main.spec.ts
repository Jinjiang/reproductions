it('should be a test', () => {
  console.log('no assertion');
});

test('should assert something', () => {});

test('should not pass', () => {
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
  expect(true).toBeDefined();
});
