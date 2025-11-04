var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
}).listen(3000);

setTimeout(function() {
    server.close(
        function() {
            // process.exit();
            // clearInterval(timer);
        }
    );
}, 2500);

let timer = setInterval(function() {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();
timer.ref();