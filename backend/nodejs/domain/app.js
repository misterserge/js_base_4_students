//cover server.js with domain for handling errors
var domain = require('domain');
var serverDomain = domain.create();


serverDomain.on('error', function(err){
    console.error('Server error %s', err);
});

serverDomain.run(function(){
    var server = require('./server');
    server.listen(3000);
});