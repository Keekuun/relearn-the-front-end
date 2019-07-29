// 创建客户端
const net = require('net');
const client = net.connect({port: 8000}, function() {
    console.log('客户端：连接到服务器！');
});
client.on('data', function(data) {
    console.log(data.toString());
    client.end();
});
client.on('end', function() {
    console.log('客户端：断开与服务器的连接');
});