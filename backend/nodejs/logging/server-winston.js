var http = require('http');
// var debug = require('debug')('server');
var log = require('winston');
var server = http.createServer(function (req, res) {
    log.info('Received request for URL: ' + req.url);
    res.writeHead(200);
    res.end('Hello World!');
});

server.on('request', require('./request'))

server.listen(8080);
//debug('Server running at http://127.0.0.1:8080/');