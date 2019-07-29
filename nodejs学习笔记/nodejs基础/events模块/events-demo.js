//  event 模块是 Node.js 系统中十分重要的一个模块，我们可以使用该模块实现事件的绑定和触发，为什么我们需要这个模块呢，因为 Node.js 是单线程异步的。
/**
 * events模块 主要方法
 *
 * on()：添加事件（事件队列尾部添加）
 *  on（eventName, listener[, arg1][, arg2]...）
 *
 * once()：添加只能触发一次便失效的事件（事件队列尾部添加）
 *
 * prependListener()：添加事件（添加到事件队列头部）
 *
 * prependOnceListener()：添加只能触发一次便失效的事件（添加到事件队列头部）
 *
 * emit()：触发事件
 *
 * removeListener()：删除某个事件
 * */

const Events = require('events');
const event = new Events();

event.on('test', () => {
    console.log('111');
});

// 添加到尾部
event.on('test', () => {
    console.log('222');
});

// 添加到头部
event.prependListener('test', () => {//只执行一次，优先执行
    console.log('000');
});

// 添加到头部，只执行一次
event.prependOnceListener('test', () => {//只执行一次，优先执行
    console.log('-111');
});

// 添加到尾部，只执行一次
event.once('test', () => {//只执行一次，最后执行
    console.log('333');
});

console.log('执行第一次');
event.emit('test'); //触发事件

console.log('执行第二次');
event.emit('test'); //触发事件