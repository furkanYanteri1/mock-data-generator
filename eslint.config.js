export default [
    {
      files: ['src/**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module'   // Use ES module syntax
      },
      rules: {
        semi: ['error', 'always'], // Example rule: enforce semicolons
        quotes: ['error', 'single'] // Example rule: enforce single quotes
      }
    }
  ];
  