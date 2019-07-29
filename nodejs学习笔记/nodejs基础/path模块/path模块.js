/**
 *path 模块：处理文件路径

 path.normalize(p)
 规范化路径，注意'..' 和 '.'。

 path.join([path1][, path2][, ...])
 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。

 path.resolve([from ...], to)
 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径。例如，给定  的路径片段的序列为：/foo、/bar、baz，则调用 path.resolve('/foo', '/bar', 'baz') 会返回 /bar/baz。

 path.isAbsolute(path)
 判断参数 path 是否是绝对路径。

 path.relative(from, to)
 用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）。

 path.dirname(p)
 返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。

 path.basename(p[, ext])
 返回路径中的最后一部分。同 Unix 命令 bashname 类似。

 path.extname(p)
 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分。如果一个路径中并不包含'.'或该路径只包含一个'.' 且这个'.'为路径的第一个字    符，则此命令返回空字符串。

 path.parse(pathString)
 返回路径字符串的对象。

 path.format(pathObject)
 从对象中返回路径字符串，和 path.parse 相反。
 * */

const path = require("path");
// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));
// 连接路径
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));
// 转换为绝对路径
console.log('resolve : ' + path.resolve('test.js'));

// 路径中文件的后缀名
console.log('ext name : ' + path.extname('test.js'));

console.log(path.isAbsolute('../abc/test'));
console.log(path.isAbsolute('/abc/test'));