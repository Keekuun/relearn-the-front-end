const http = require('http');
const url = require('url');
const router = require('./url-router');
console.log(router);
http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text.md/html; charset=utf-8'
    });
    if (request.url !== "/favicon.ico") {
        let pathname = url.parse(request.url).pathname;//得到请求的路径
        console.log(pathname);
        pathname = pathname.replace(/\//, '');//替换掉前面的/
        console.log(pathname);
        router[pathname](request, response);
        response.end('');
    }
}).listen(8000);

// 浏览器访问http://127.0.0.1:8000/login
console.log('Server running at http://127.0.0.1:8000/');