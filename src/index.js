const { generateData } = require('./dataGenerator');
const { validateSchema } = require('./schemaValidator');

function createMockData(schema, count) {
  validateSchema(schema);
  return generateData(schema, count);
}

module.exports = { createMockData };
