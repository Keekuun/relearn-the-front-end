/**
 * 用于标准输出流输出的方法
 * console.log()
 * 与console.log方法类似，console.log也是用于输出字符串。区别在于console.error的输出是来自标准错误输出流。
 *  console.error()
 *
 *  console.dir方法用于查看一个对象中的内容（属性、方法）并输出。下面我定义一个对象，并用console.log和console.dir两种不同的方法来输出这个对象。console.log方法把对象转换成了字符串输出了，而console.dir方法则是直接把对象输出了。
 *  console.dir()
 *
 *   如果我们需要统计某个算法的运行时间，那么console.time和console.timeEnd就是一个不二选择。
 *   这两个方法都要接受一个字符串作为参数，两个方法的参数要相同，这样才能正确计算出开始与结束之间经过的时间。
 *  console.time和console.timeEnd方法
 * */

console.log("Hello world");	//Hello world
console.error("Having a error here.");	//Having a error here.

let person = {age: 22, name: "Tom"};
console.log(person);	//{ name: 'Tom', age: 22 }
console.dir(person);	//{ name: 'Tom', age: 22 }

console.time('testtime');
sum = 0;
for (var i = 0; i < 1000000; i++) {
    sum += i;
}
console.log('sum:' + sum);
console.timeEnd('testtime');