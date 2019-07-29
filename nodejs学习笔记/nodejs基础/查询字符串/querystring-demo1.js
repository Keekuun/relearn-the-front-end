/**
 *querystring查询字符串
 * parse() 将 URL 查询字符串 str 解析为键值对的集合。与 querystring.stringfy() 相对
 *  querystring.parse(str,sep,eq,options)
 *
 * stringfy() 将一个对象序列化成一个字符串，与 querystring.parse() 相对。
 *  querystring.stringify(obj,sep,eq,options)
 *
 * escape() 对给定的str进行URL百分比编码
 *  querystring.escape(str)
 *
 * unescape() 对给定的URL百分比编码字符进行解码str
 *  querystring.unescape(str)
 */

// 引入模块
const querystring = require('querystring');

const str = '{"name": "querystring"}';
const obj1 = JSON.parse(str); // { name: 'querystring' }
console.log(obj1);

// querystring.parse() 方法将 URL 查询字符串 str 解析为键值对的集合。
const urlparams = 'foo=bar&abc=123&abc=xyz';
const params = 'foo/bar&abc=123&abc=xyz';
const obj2 = querystring.parse(params); //  { foo: 'bar', abc: [ '123', 'xyz' ] }
console.log(obj2);

// querystring.stringify() 方法通过迭代对象的自身属性从给定的 obj 生成 URL 查询字符串。
const obj3 = { foo: 'bar', baz: ['qux', 'quux'], corge: '' };
const str1 = querystring.stringify(obj3); // 'foo=bar&baz=qux&baz=quux&corge='
const str2 = querystring.stringify(obj3,';',':'); // 'foo:bar;baz:qux;baz:quux;corge:'
console.log(str1);
console.log(str2);

// querystring.escape()方法str以针对URL查询字符串的特定要求进行了优化的方式对给定执行URL百分比编码 。
const str3 = "name=小明";
const result = querystring.escape(str3); // name%3D%E5%B0%8F%E6%98%8E
console.log(result);

const str4 = querystring.unescape(result); // name=小明
console.log(str4);