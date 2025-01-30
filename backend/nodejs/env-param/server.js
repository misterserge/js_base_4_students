var http = require('http');

// console.log('PORT: ' + process.argv);

http.createServer(function (req, res) {
    console.log(process.env.NODE_ENV)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);