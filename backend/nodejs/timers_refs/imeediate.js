var http = require('http');
var server = http.createServer(function(req, res) {
    // setTimeout(function() {
    //     console.log('timeout');
    // }, 0);
    // setImmediate(function() {
    //     console.log('immediate');
    // });
    process.nextTick(function() {
        console.log('nextTick');
        req.on('readable', function() {
            console.log('data');
        });
    });
  res.writeHead(200);
  res.end('Hello Http');
}).listen(3000);
