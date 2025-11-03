var url = require('url');

module.exports = function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  console.log('Received request', req.method, req.url);

  if (req.method=='GET' && parsedUrl.pathname=='/echo') {
    var message = parsedUrl.query.message;
    console.log('Echo: ' + message);
    res.end(message);
    return;
  }
  console.log('Unknown URL:', req.url);
  res.statusCode = 404;
  res.end('Not found');
}