//use supervisor supervisor.js to restart the server when the file changes
var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
    console.log(req.method, req.url);
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    var urlParsed = url.parse(req.url, true);
    // debugger;
    console.log(urlParsed);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        // res.setHeader(200, 'OK', {'Cache-control': 'no-cache'});
        // res.setHeader(200, {'Content-Type': 'text/plain'});
        res.statusCode = 200;
        res.end(urlParsed.query.message);
        return;
    }
    res.writeHead(404, {'Content-Type': 'text/plain'});
    // res.statusCode = 404;
    res.end('Page not found');
}); 

server.listen(3000, '127.0.0.1');