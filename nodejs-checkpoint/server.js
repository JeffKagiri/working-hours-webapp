// Import the built-in HTTP module
const http = require('http');

// Create an HTTP server that handles incoming requests
const server = http.createServer((req, res) => {
  // Set the response header to tell the browser the content type is HTML
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Send a response message back to the client
  res.end('<h1>Hello Node!!!!</h1>\n');
});

// Tell the server to listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
