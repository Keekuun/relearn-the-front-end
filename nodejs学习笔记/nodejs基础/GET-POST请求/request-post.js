// POST 请求
// post请求，这些参数不是通过url传递的，是包含在request请求体中。请求体里的流需要以事件形式进行接收
//
// req.on('data',  function(chunk){//通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
//
//     post  +=  chunk;
//
// });

const http = require('http');
const querystring = require('querystring');

const postHTML =
    '<html><head><meta charset="utf-8"><title> Node.js实例</title></head>' +
    '<body>' +
    '<form method="post">' +
    '姓名：<input.txt name="name"><br>' +
    '住址： <input.txt name="address"><br>' +
    '<input.txt type="submit">' +
    '</form>' +
    '</body></html>';

http.createServer(function (req, res) {
    let post_1 = "";
    req.on('data', function (chunk) {
        post_1 += chunk;
    });
    req.on('end', function () {
        const result = querystring.parse(post_1);
        res.writeHead(200, {'Content-Type': 'text.md/html; charset=utf8'});
        if (result.name && result.address) {
            res.write("名字:" + result.name);
            res.write("<br>");
            res.write("住址:" + result.address);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(5000);

console.log('Server is running on http://127.0.0.1:5000');
