var http = require('http');
var fs = require('fs');
var chat = require('./chat');

http.createServer(function (req, res) {
    switch (req.url) {
        case "/": 
            sendFile('index.html', res);
            break;
        case "/subscribe":
            chat.subscribe(req, res);
            break;
        case "/publish":
            let body = '';
            req.on('data', chunk => {
                try {
                    // JSON.parse(chunk);
                    body += chunk.toString();
                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end('Your message is too big for my little chat');
                    }
                } catch (e) {   
                    res.statusCode = 400;
                    res.end('Bad request');
                    return;
                }
            });
            req.on('end', () => {
                chat.publish(body); // Pass the body as a string
                res.end('ok');
            });
            break;
        default:
            res.statusCode = 404;
            res.end("Not Found");
    }
}).listen(3000);

function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        }); 
}