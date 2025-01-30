var fs = require('fs');

fs.stat(__filename, function(err, stats) {
    console.log(stats.isFile());
    console.log(stats);
});

fs.readFile(__filename, {encoding: 'utf-8'}, function(err, data) {
    if (err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
        }else{
            console.log(err);
        }
    }else {
        console.log(data.toString('utf8'));
    }
});