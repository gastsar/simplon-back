import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Testing server response\n');
});

server.listen(process.env.PORT || 3001, () => { 
  console.log('Server running at http://localhost:3001/');
});