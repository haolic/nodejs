let EventEmitter = require('events').EventEmitter;

let events = new EventEmitter();
events.on('handleEvent', () => {
    console.log('handleEvent触发');
});

setTimeout(() => {
    events.emit('handleEvent');
}, 1000);

console.log('程序执行结束！');