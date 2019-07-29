/**
 * url.parse(urlString[, parseQueryString[, slashesDenoteHost]])
 * urlString 要解析的 URL 字符串。
 * parseQueryString 如果为 true，则 query 属性总会通过 querystring 模块的 parse() 方法生成一个对象。 如果为 false，则返回的 URL 对象上的 query 属性会是一个未解析、未解码的字符串。 默认为 false。
 * slashesDenoteHost 如果为 true，则 // 之后至下一个 / 之前的字符串会被解析作为 host。 例如，//foo/bar 会被解析为 {host: 'foo', pathname: '/bar'} 而不是 {pathname: '//foo/bar'}。 默认为 false。 url.parse() 方法会解析一个 URL 字符串并返回一个 URL 对象。
 * */

const url = require("url");
const myurl="https://www.jianshu.com:8000/notifications?name=zkk#/others?name=zkk";
parsedUrl=url.parse(myurl);
console.log(parsedUrl);
// Url {
//     protocol: 'https:',
//         slashes: true,
//         auth: null,
//         host: 'www.jianshu.com',
//         port: '8000',
//         hostname: 'www.jianshu.com',
//         hash: '#/others?name=zkk',
//         search: '?name=zkk',
//         query: 'name=zkk',
//         pathname: '/notifications',
//         path: '/notifications?name=zkk',
//         href: 'https://www.jianshu.com/notifications?name=zkk#/others?name=zkk'
// }