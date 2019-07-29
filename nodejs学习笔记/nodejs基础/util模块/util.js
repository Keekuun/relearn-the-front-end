/**
 * util模块呢，是一个 Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript的一些功能过于精简的不足。并且还提供了一系列常用工具，用来对数据的输出和验证。
 *
 * util.inspect
 * util.inspect（object，[showHidden]，[depth]，[colors]）是一个将任意对象转换为字符串的方法，通常用于调试和错误输出。
 * showHidden是一个可选参数，如果值为true，将会输出更多隐藏信息。
 * 深度表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定深度，默认会递归2层，指定为null表示将不限递归层数完整遍历对象。如果color值为true，输出格式将会以ANSI颜色编码，通常用于在终端显示更漂亮的效果。
 特别要指出的是，util.inspect并不会简单地直接把对象转换为字符串，即使该对象定义了toString方法也不会调用。

 * util.isArray（对象）:如果给定的参数“对象”是一个数组返回true，否则返回false。
 * util.isRegExp（对象）:如果给定的参数“对象”是一个正则返回true，否则返回false。
 *
 * util.inherits(constructor, superConstructor)
 * 从一个构造函数constructor继承原型方法到另一个。构造函数的原型将被设置为一个新的从超类（superConstructor）创建的对象。inherits方法可以实现原型的继承,不会涉及传址问题
 **/

const util = require('util');

function Person(){
    this.name ='hcl';
    this.toString = function(){
        return this.name;
    };
}

const obj1 = new Person();
console.log(util.inspect(obj1));
console.log(util.inspect(obj1,true));
console.log(util.inspect(obj1,true,null));
console.log(util.inspect(obj1,true,null,true));

console.log(util.isArray(['1','2']));
console.log(util.isArray('1,2'));
// true
// false

console.log(util.isRegExp([]));
console.log(util.isRegExp(new RegExp('另一个regexp')));
console.log(util.isRegExp({}));
// false
// true
// false

function Boae(){
    this.name = "小明";
    this.age = 25;
    this.hobby = function(){
        console.log("足球");
    }
}
Boae.prototype.money = function(){
    console.log("我有很多钱");
};

function Sub(){
    Boae.call(this);
    this.height= "178cm";
}
Sub.prototype.sex = function(){
    console.log("男");
};
util.inherits(Sub,Boae);
const newSon = new Sub();
console.log(newSon.name,newSon.age,newSon.height);
newSon.money();
newSon.hobby();
newSon.sex();
//小明 25 178cm
// 我有很多钱
// 足球
// 男