const events = require('events');
const eventEmitter = new events.EventEmitter();

// 监听器1.
const listener1 = () => {
    console.log('监听器listener1执行。');
};

const listener2 = () => {
    console.log('监听器listener2');
};

eventEmitter.addListener('connection', listener1);
eventEmitter.addListener('connection',listener2);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听器监听连接事件。');

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log('listener1移除');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + '个监听器绑定了连接事件');

console.log('程序执行完毕。')