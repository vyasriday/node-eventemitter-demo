const http = require('http');
const Logger = require('./Logger');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World!!!');
    res.end();
  }

  if (req.url === '/log') {
    const logger = new Logger();
    logger.on('messageLogged', (arg) => console.log(arg));
    logger.log('Message Logged!!!');
    res.write('Message Logged to the Service!');
    res.end();
  }
});

server.on('connection', () => console.log('Incoming Request'));

server.listen(8000);
