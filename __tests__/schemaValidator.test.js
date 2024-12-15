const { validateSchema } = require('../src/schemaValidator');

test('Valid schema passes validation', () => {
  const schema = { name: { category: 'name', method: 'firstName' } };
  expect(() => validateSchema(schema)).not.toThrow();
});

test('Invalid schema throws error', () => {
  const schema = { name: { category: 'invalid' } };
  expect(() => validateSchema(schema)).toThrow('Field "name" must have a category and method');
});
