// Import the built-in file system (fs) module
const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  // If an error occurs during file creation, throw an error
  if (err) throw err;

  // Log a confirmation message once the file is created
  console.log('File created successfully.');

  // Read the contents of "welcome.txt"
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    // Handle any read error
    if (err) throw err;

    // Log the content of the file to the console
    console.log(data);
  });
});
