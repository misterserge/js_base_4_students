var http = require('http');
var fs = require('fs');

function handler(req, res){
    if (req.url == '/') {
        fs.readFile('index.html', function(err, content){
            if (err) {
                console.log(err);
                res.statusCode = 500;
                return res.end('Error loading index.html');
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(content);
            res.end();
        });
    }else{
        res.statusCode = 404;
        res.end('Not Found');
    }
}

var server = http.createServer(function(req, res) {
    try {
        handler(req, res);
    } catch (error) {
        console.log(error);
    }
});
// server.listen(3000);

module.exports = server;