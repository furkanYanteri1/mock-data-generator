function validateSchema(schema) {
    if (typeof schema !== 'object') {
      throw new Error('Schema must be an object');
    }
    for (const field in schema) {
      if (!schema[field].category || !schema[field].method) {
        throw new Error(`Field "${field}" must have a category and method`);
      }
    }
  }
  
  module.exports = { validateSchema };
  