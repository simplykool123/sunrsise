const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = process.env.PORT || 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
  console.log(`Request: ${req.method} ${req.url}`);
  
  let pathname = url.parse(req.url).pathname;
  
  // Default to index.html for root path
  if (pathname === '/') {
    pathname = '/index.html';
  }
  
  const filePath = path.join(__dirname, pathname);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';
  
  // Check if file exists first
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log(`File not found: ${filePath}`);
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1><p>The requested file was not found.</p>');
      return;
    }
    
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err}`);
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 Internal Server Error</h1>');
      } else {
        res.writeHead(200, { 
          'Content-Type': contentType,
          'Cache-Control': 'no-cache'
        });
        res.end(data);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Serving files from: ${__dirname}`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
});