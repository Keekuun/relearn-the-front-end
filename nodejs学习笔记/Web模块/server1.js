// Node.js 实现web的登录
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

http.createServer(function (req, res) {
//解析数据
    let str = ''; //模拟
    req.on("data", function (data) {
        str += data;
    });
    req.on("end", function (err) {
        let obj = urlLib.parse(req.url, true);
        const url = obj.pathname;
        const GET = obj.query;
        const POST = querystring.parse(str);
        //用户信息
        let users = {
            'name': 'w3cschool',
            'pass': 'w3cschool'
        };
        //区分 接口 文件
        if (url === '/user') {//接口
            switch (GET.act) {
                case  'login'://登录
                    if (GET.user === users.name && GET.pass === users.pass) {
                        res.write('{"ok": true, "msg": "success"}');
                    } else {
                        res.write('{"ok": false, "msg": "error"}');
                    }
                    break;
            }
            res.end();
        } else { //文件
            //读取文件
            let file_name = url;
            console.log(file_name);
            fs.readFile(file_name, function (err, data) {
                if (err) {
                    res.write('404qqq');
                } else {
                    res.write(data)
                }
                res.end();
            });
        }
    });

}).listen(8888);