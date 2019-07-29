const Event = require('events');
const event = new Event();

event.on('test1', function () {
    console.log('Welcome to w3cschool');
});

event.on('test1', testMethod);

event.prependOnceListener('test1', function () {
    console.log('You will be happy');
});

function testMethod() {
    console.log('You will learn Node. JS');
}
console.log(111);
event.emit('test1');
console.log(222);
// 移出事件
event.removeListener('test1',testMethod);
event.emit('test1');
