// Import the generate-password package
const generator = require('generate-password');

// Generate a random password using specified options
const password = generator.generate({
  length: 12,      // Password length
  numbers: true,   // Include numbers
  uppercase: true, // Include uppercase letters
  lowercase: true, // Include lowercase letters
  symbols: true    // Include symbols
});

// Output the generated password to the console
console.log('Generated Password:', password);
