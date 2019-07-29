/**
 * http 服务器:
 * 我们知道传统的HTPP服务器会由Aphche、Nginx、IIS之类的软件来担任，但是 Node.js 并不需要，Node.js 提供了http模块，自身就可以用来构建服务器，而且http模块是由C++实现的，性能可靠。
 * http模块中封装了一个http服务器和一个简易的http客户端
 * http.Server是一个基于事件的http服务器，http.request 和http.get 则是一个http客户端工具，用于向http服务器发起请求。
 */
//获取http模块
const http = require('http');

//获取http.Server对象
const server = new http.Server();

//创建服务器，并监听3000端口
server.on('request', (rep, res) => {
    res.writeHead(200, {
        'content-type': 'text.md/plain'
    });
    res.write('hello nodejs!');
    res.end();
}).listen(3000);

console.log('Server is running at http://127.0.0.1:3000');
