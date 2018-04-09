let events = require('events');

let eventEmitter = new events.EventEmitter();
eventEmitter.emit('error');