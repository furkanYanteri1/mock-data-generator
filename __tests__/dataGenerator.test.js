const { generateData } = require('../src/dataGenerator');

test('Generates mock data from schema', () => {
  const schema = { name: { category: 'name', method: 'firstName' } };
  const data = generateData(schema, 2);
  expect(data).toHaveLength(2);
  expect(data[0]).toHaveProperty('name');
});
