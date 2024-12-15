# Mock Data Generator

A simple and customizable tool for generating mock data for your projects.

## Features
- Define schemas for mock data generation.
- Supports various data types using `faker.js`.
- Generate multiple records with ease.
- Validates schemas to prevent errors.

## Installation
Install the package via npm:
```bash
npm install mock-quick
```

## Example Usage
> In the js file:
```
const { createMockData } = require('mock-quick');

const schema = {
  name: { category: 'name', method: 'firstName' },
  email: { category: 'internet', method: 'email' },
};

const data = createMockData(schema, 3);
console.log(data);
```
> Output:

```
[
  { "name": "John", "email": "john.doe@example.com" },
  { "name": "Jane", "email": "jane.doe@example.com" },
  { "name": "Alice", "email": "alice.doe@example.com" }
]

```
