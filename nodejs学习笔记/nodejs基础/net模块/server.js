// 创建客户端
const net = require('net');
const server = net.createServer((connection) => {
    console.log('client connected!');
    connection.on('end', () => {
        console.log('服务端：客户端关闭连接！')
    });
    connection.write('服务端：Hello World!\r\n');
    connection.pipe(connection);
});

server.listen(8000, () => {
    console.log('服务端：服务端已创建并监听 8000 端口！')
});