var url = require('url');
// var debug = require('debug')('server:request');
// var log = require('winston');
var log = require('./log')(module)

module.exports = function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  //   debug('Received request', req.method, req.url);
  log.info('Received request', req.method, req.url);

  if (req.method=='GET' && parsedUrl.pathname=='/echo') {
    var message = parsedUrl.query.message;
    // debug('Echo: ' + message);
    log.debug('Echo: ' + message);
    // res.end(message);
    return;
  }
//   debug('Unknown URL:', req.url);
  log.error('Unknown URL:' + req.url);
  res.statusCode = 404;
//   res.end('Not found');
}