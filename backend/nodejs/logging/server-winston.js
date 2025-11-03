var http = require('http');
var log = require('winston');
module.exports = function (req, res) {
    var server = http.createServer(function (req, res) {
        log.debug('Received request for URL: ' + req.url);
        res.writeHead(200);
        res.end('Hello World!');
        return;
    });

    server.on('request', require('./request'))

    server.listen(8080);
    log.info('Server running at http://127.0.0.1:8080/');
}