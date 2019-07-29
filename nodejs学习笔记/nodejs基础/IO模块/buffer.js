/**
 * Buffer(缓冲区)
 所谓缓冲区Buffer，就是 "临时存贮区" 的意思，是暂时存放输入输出数据的一段内存。JavaScript 语言没有用于读取或操作二进制数据流的机制，Buffer 类是作为 Node.js API 的一部分引入的，用于在 TCP 流、文件系统操作、以及其他上下文中与八位字节流进行交互，用来创建一个专门存放二进制数据的缓存区。
 在 Node.js 中，Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组。
 Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。

 Node.js 目前支持的字符编码包括：

 ascii      ： 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
 utf8      ： 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
 utf16le ： 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
 ucs2     ： utf16le 的别名。
 base64 ： Base64 编码。
 latin1    ：一种把 Buffer 编码成一字节编码的字符串的方式。
 binary   ： latin1 的别名。
 hex       ： 将每个字节编码为两个十六进制字符。


 创建 Buffer 类
 Buffer 提供了以下 API 来创建 Buffer 类：
 Buffer.from(array)

 返回一个新的 Buffer，其中包含提供的八位字节数组的副本。


 Buffer.from(arrayBuffer[, byteOffset [, length]])

 返回一个新的 Buffer，它与给定的 ArrayBuffer 共享相同的已分配内存。


 Buffer.from(buffer)

 返回一个新的 Buffer，其中包含给定 Buffer 的内容的副本。


 Buffer.from(string[, encoding])

 返回一个新的 Buffer，其中包含提供的字符串的副本。


 Buffer.alloc(size[, fill[, encoding]])

 返回一个指定大小的新建的的已初始化的 Buffer。 此方法比 Buffer.allocUnsafe(size) 慢，但能确保新创建的 Buffer 实例永远不会包含可能敏感的旧数据。


 Buffer.allocUnsafe(size) 和 Buffer.allocUnsafeSlow(size)

 分别返回一个指定大小的新建的未初始化的 Buffer。 由于 Buffer 是未初始化的，因此分配的内存片段可能包含敏感的旧数据。如果 size 小于或等于 Buffer.poolSize 的一半，则 Buffer.allocUnsafe() 返回的 Buffer 实例可能是从共享的内部内存池中分配。 Buffer.allocUnsafeSlow() 返回的实例则从不使用共享的内部内存池。

 写入缓冲区
 buffer.write(string[, offset[, length]][, encoding])

 string - 写入缓冲区的字符串。
 offset - 缓冲区开始写入的索引值，默认为 0 。
 length - 写入的字节数，默认为 buffer.length
 encoding - 使用的编码。默认为 'utf8' 。
 根据 encoding 的字符编码写入 string 到 buffer 中的 offset 位置。 length 参数是写入的字节数。 如果 buffer 没有足够的空间保存整个字符串，则只会写入 string 的一部分。 只部分解码的字符不会被写入。
 返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。


 从缓冲区读取数据
 buffer.toString([encoding[, start[, end]]])

 encoding - 使用的编码。默认为 'utf8' 。
 start - 指定开始读取的索引位置，默认为 0。
 end - 结束位置，默认为缓冲区的末尾。
 返回解码缓冲区数据并使用指定的编码返回字符串。
 * */

const buffer = Buffer.from('hello');

console.log(buffer.toString('ascii'));
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));
console.log(buffer.toString('utf8'));
console.log(buffer.toString('binary'));

const bf1 = Buffer.from([1, 2, 3, 4]);
console.log(bf1); // <Buffer 01 02 03 04>

const bf2 = Buffer.from('w3cschool');
console.log(bf2); // <Buffer 77 33 63 73 63 68 6f 6f 6c>

const bf3 = Buffer.alloc(10, 1); // <Buffer 01 01 01 01 01 01 01 01 01 01>
console.log(bf3);

// 最大128个字节
const bf4 = Buffer.alloc(128);
const len = bf4.write('hello world!');
console.log('写入字节数：' + len);


buffer1 = Buffer.alloc(26);//设置一个长度为26的buffer
for (let i = 0 ; i < 26 ; i++) {
    // buffer1[i] = i + 97 - 32; // 26大写字母
    buffer1[i] = i + 97 - 32; // 26小写字母
}

console.log( buffer1.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buffer1.toString('ascii',0,5));   // 输出: abcde
console.log( buffer1.toString('utf8',0,5));    // 输出: abcde
console.log( buffer1.toString(undefined,0,5)); // 默认使用 'utf8' 编码, 并输出: abcde