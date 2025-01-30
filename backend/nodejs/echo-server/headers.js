var http = require('http');
var url = require('url');

var server = new http.Server(function(req, res) {
    console.log(req.headers)
    var urlParsed = url.parse(req.url, true);
    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.writeHead(200, 'OK', {
            'Cache-Control': 'no-cache',
            'Content-Type': 'text/plain'
        });
        // res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); //removeHeader
        // res.setHeader('Content-Type', 'text/plain');
        // res.statusCode = 200; //OK
        res.end(urlParsed.query.message);
        return;
    }else{
        res.statusCode = 404; //Not Found
        res.end('Page not found');
    }
});

server.listen(3000, '127.0.0.1');