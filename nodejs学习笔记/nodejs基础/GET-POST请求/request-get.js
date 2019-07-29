
// 获取GET请求
// 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
// Node.js 中 url 模块中的 parse 函数提供了这个功能。

const http = require('http');
const url = require('url');
const util = require('util');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text.md/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write(req.url);
    res.write("<br />");
    
    // url 模块中的 parse
    const params = url.parse(req.url, true).query;
    res.write(`<h2>name: ${params.name}</h2>`);
    res.write("<br />");
    res.write("url:" + params.url);
    res.end();
}).listen(3000);
console.log('Server is running on http://127.0.0.1:3000');

// 访问：http://127.0.0.1:3000/s/z?name=zkk&url=xxxx

// /s/z?name=zkk&url=xxxx
// name:zkk
// url:xxxx