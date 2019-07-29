const net = require('net');
//模块引入
const listenPort = 8080;//监听端口
const server = net.createServer(function(socket){
    // 创建socket服务端
    console.log('链接地址: ' +socket.remoteAddress + ':' + socket.remotePort);
    socket.setEncoding('binary');//将编码设置成二字节
    //接收到数据
    socket.on('data',function(data){
        console.log('接受到的数据:' + data);
    });
    //数据错误事件
    socket.on('error',function(exception){
        console.log('socket error:' + exception);
        socket.end();
    });
    //客户端关闭事件
    socket.on('close',function(data){
        console.log('服务器关闭');
    });
}).listen(listenPort);
//服务器监听事件
server.on('listening',function(){
    console.log("监听端口:" + server.address().port);
});
//服务器错误事件
server.on("error",function(exception){
    console.log("服务器错误:" + exception);
});