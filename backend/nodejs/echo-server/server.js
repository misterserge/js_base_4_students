var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
    console.log(req.method, req.url);
    // console.log(req.headers)
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    var urlParsed = url.parse(req.url, true);
    console.log(urlParsed);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        // res.setHeader(200, 'OK', {'Cache-control': 'no-cache'}); //removeHeader
        // res.setHeader(200, {'Content-Type': 'text/plain'});
        res.writeHead(200, 'OK', {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/plain'
        });
        res.end(urlParsed.query.message);
        return;
    }else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.statusCode = 404;
        res.end('Page not found');
    }
    // res.end('123123');
}); //EventEmitter

server.listen(3000, '127.0.0.1');