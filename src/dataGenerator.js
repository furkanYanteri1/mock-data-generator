const faker = require('faker');

function generateData(schema, count = 1) {
  return Array.from({ length: count }).map(() => {
    const record = {};
    for (const field in schema) {
      record[field] = faker[schema[field].category][schema[field].method]();
    }
    return record;
  });
}

module.exports = { generateData };
