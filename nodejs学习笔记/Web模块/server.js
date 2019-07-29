// 创建 Web 服务器

const http = require('http');
const fs = require('fs');
const url = require('url');

// 创建服务器
http.createServer((req, res) => {
    // 解析请求，包括文件名
    const pathname = url.parse(req.url).pathname;
    // 输出请求的文件名
    console.log('Request for ' + pathname + ' received.')

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(404, {'content-type': 'text.md/html'});
        } else {
            res.writeHead(200, {'content-type': 'text.md/html'});
            // 响应文件内容
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8080);