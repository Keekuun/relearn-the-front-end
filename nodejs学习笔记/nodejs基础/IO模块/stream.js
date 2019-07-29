/**
 * Stream(流)
 Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对 http 服务器发起请求的 request 对象就是一个 Stream，还有stdout（标准输出）。

 Node.js，Stream 有四种流类型：

 Readable - 可读操作。
 Writable - 可写操作。
 Duplex - 可读可写操作.
 Transform - 操作被写入数据，然后读出结果。

 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：

 data - 当有数据可读时触发。
 end - 没有更多的数据可读时触发。
 error - 在接收和写入过程中发生错误时触发。
 finish - 所有数据已被写入到底层系统时触发。
 * */

const fs = require('fs');
let data = '1';

// 创建可读流
const readerStream = fs.createReadStream('input.txt',{encoding: 'utf-8'});

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log("程序执行完毕");

// 写入流
let data1 = '学编程，来w3cschool：www.w3cschool.cn';
// 创建一个可以写入的流，写入到文件 output.txt 中
let writerStream = fs.createWriteStream('output.txt');
// 使用 utf8 编码写入数据
writerStream.write(data1,'UTF8');
// 标记文件末尾
writerStream.end();
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});
writerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("程序执行完毕");


// 管道流: 文件复制到林一个文件中（会覆盖原文件）
// 创建一个可读流
let readerStream1 = fs.createReadStream('input.txt');
// 创建一个可写流
let writerStream1 = fs.createWriteStream('output.txt');
// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream1.pipe(writerStream1);
console.log("程序执行完毕");
