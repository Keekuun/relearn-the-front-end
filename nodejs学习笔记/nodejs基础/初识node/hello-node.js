var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text.md/plain'});
    response.end('Hello World!\n');
}).listen(8888);
console.log('Server is running at http://127.0.0.1:8888');