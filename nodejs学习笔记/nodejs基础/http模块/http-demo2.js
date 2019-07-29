// http.request 和http.get 则是一个http客户端工具，用于向http服务器发起请求。
/**
 *HTTP客户端，发送HTTP请求
 *控制台输出返回的响应内容
 *
 * http.request
 *
 * http.get http.request 方法的简化版，唯一的区别是http.get自动将请求方法设为了GET请求，同时不需要手动调用req.end()
 */
console.log('请求服务器数据。。。');
const http = require('http');
const options = {
    host:'localhost',
    port: 3000
};

const req = http.request(options, res => {
    res.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
    });
    res.on('end', () =>{
        console.log("----client request！----");
    });
});

req.on('error', err => {
    console.error(err.message);
});
// 结束请求
// 使用http.request方法时没有调用end方法，服务器将不会收到信息
req.end();

http.get(options,res => {
    res.on('data', chunk => {
        console.log(chunk.toString('utf-8'));
    });
    res.on('end', () =>{
        console.log("----client get！----");
    });
});

