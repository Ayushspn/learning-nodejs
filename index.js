const fs = require('fs');
const http = require('http');
const url = require('url');
// const text = fs.readFileSync('./text/input.txt', 'utf-8');
// console.log(text);
// const outText = `This is what we know about avacaodos: ${text}`;
// fs.writeFileSync('./text/output.txt', outText, 'utf-8');

// fs.readFileSync('./text/output.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('Output file content:', data);
// });

http.createServer((req, res) => {   
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (req.url === '/api') { 
    const products = fs.readFile('./data/data.json', 'utf-8' , (err, data) => {
       const products = JSON.parse(data);
       console.log(products);
       res.end(JSON.stringify(products));
    });
  }
}).listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});