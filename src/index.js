import faker from 'faker';

/**
 * Validates the schema provided by the user.
 * @param {Object} schema - The schema object to validate.
 * @throws {Error} If the schema is invalid.
 */
function validateSchema(schema) {
  if (typeof schema !== 'object' || schema === null) {
    throw new Error('Schema must be a non-null object.');
  }
  for (const key in schema) {
    const { category, method } = schema[key];
    if (!faker[category] || typeof faker[category][method] !== 'function') {
      throw new Error(`Invalid category or method for field "${key}".`);
    }
  }
}

/**
 * Generates mock data based on the provided schema and count.
 * @param {Object} schema - Schema defining the fields and their faker methods.
 * @param {number} count - Number of records to generate.
 * @returns {Array} Array of mock data objects.
 */
export function createMockData(schema, count = 1) {
  validateSchema(schema);

  return Array.from({ length: count }).map(() => {
    const record = {};
    for (const field in schema) {
      const { category, method } = schema[field];
      record[field] = faker[category][method]();
    }
    return record;
  });
}
