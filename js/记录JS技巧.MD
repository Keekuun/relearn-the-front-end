### 1.判断数据类型
先看看typeof的返回值：
```
typeof 1           ---> 'number'
typeof 'hello'     ---> 'string'
typeof alert       ---> 'function'
typeof [1,2,3]     ---> 'object'
typeof {a:1,b:2}   ---> 'object'
typeof null        ---> 'object'
typeof NaN         ---> 'number'
typeof undefined   ---> 'undefined'
typeof Symbol()    ---> 'symbol'
```
疑惑：`typeof null`返回`'object'`，`typeof NaN`竟然返回`'number'`（`NaN`有专门的方法检测---`isNaN`,那么我们可不可以有专门的方式检测`null`呢？比如`isNull`来判断null类型），NaN本意为`Not A Number`,这就无法理解。查了一下，这是好多年的坑了。

利用`Object.prototype.toString`
```javascript
console.log(Object.prototype.toString.call("hello"));//[object String]
console.log(Object.prototype.toString.call(123));//[object Number]
console.log(Object.prototype.toString.call(true));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call({name: "jerry"}));//[object Object]
console.log(Object.prototype.toString.call(function(){}));//[object Function]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call(new Date));//[object Date]
console.log(Object.prototype.toString.call(/\d/));//[object RegExp]
function foo(){}
console.log(Object.prototype.toString.call(new foo()));//[object Object]
```
问题解决了，但是返回值带`[]`看着太难受了。
自定义方式：
```javascript
//es5方式，返回布尔值
const isType = function(type){
    return function(obj){
        return Object.prototype.toString.call(obj) === `[object ${type}]`;
    }
};

//es6方式，返回布尔值
const isType1 = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`; 

// 正则匹配，返回真正的类型值
const isType2 = type =>(/^\[object\s(.*)\]$/.exec(Object.prototype.toString.call(type)))[1];

// 使用，先定义要检测的类型,传入Object.prototype.toString.call返回的值，如：Array，Number...
const isArray = isType('Array');// 注意首字母大写
const isSymbol = isType1('Symbol');
isArray([1,2,3]) ;// true
isSymbol(Symbol()); // true
isType2(null); // 'Null'
```
还是喜欢带正则的方式，不用传入类型值。

### 2.ES5实现数组的`map`方法
```javascript
const selfMap = function(fn,context){
    let arr = Array.prototype.slice.call(this);
    let mappedArr = [];
    for(let i=0;i<arr.length;i++){
        if(!arr.hasOwnProperty(i)) {continue}else{
            mappedArr.push(fn.call(context,arr[i],i,this))
        }
    }
    return mappedArr;
}
```