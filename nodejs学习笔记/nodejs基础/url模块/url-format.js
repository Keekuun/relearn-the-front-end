// 在url模块中，将 URL 字符串解析成对象的函数名url.parse。将对象解析成字符串的函数名url.format。
/**
 * url.format() 方法返回一个从 urlObject 格式化后的 URL 字符串。
 * url.format(urlObject)
 * */

const url=require('url');
const obj1={
    protocol: 'http:',
    protocol1: 'https:',
    slashes: true,
    auth: null,
    host: 'www.w3cschool.cn',
    port: null,
    hostname: 'www.w3cschool.cn',
    hash: null,
    search: '?cp=9936&gid=0',
    query: 'cp=9936&gid=0',
    pathname: '/minicourse/play/orbls',
    path: '/minicourse/play/orbls?cp=9936&gid=0',
    href:
        'https://www.w3cschool.cn/minicourse/play/orbls?cp=9936&gid=0'
};
const url1=url.format(obj1);
console.log(url1);