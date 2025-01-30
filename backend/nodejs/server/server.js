var http = require('http');

var server = new http.Server(); //EventEmitter

server.listen(3000, '127.0.0.1');

var emit = server.emit;
server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments);
}

var counter = 0;
server.on('request', function(req, res) {
    res.end('Hello, world!'+ ++counter);
});