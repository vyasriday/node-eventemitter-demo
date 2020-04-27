const EventEmitter = require('events');

class Logger extends EventEmitter {
  constructor() {
    super();
  }

  log(message) {
    console.log(message);
    this.emit('messageLogged', { message });
  }
}

module.exports = Logger;
