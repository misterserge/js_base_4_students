// sync readfile with fs stream
var fs = require('fs');

var stream = fs.ReadStream(__filename, {encoding: 'utf-8'});

stream.on('readable', function() {
  var data = stream.read();
  console.log(data.length);
});

stream.on('end', function() {
    console.log('End of file');
});

stream.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log('File not found');
    } else {
        console.log('Error: ' + err.message);
    }
});