var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/big.html'){
    // fs.readFile('big.html', function(err, data){
    //     if (err) {
    //         res.statusCode = 500;
    //         res.end(`Error getting the file: ${err}.`);
    //     }else{ 
    //         res.setHeader('Content-Type', 'text/html; charset=utf-8');
    //         res.write(data);
    //         res.end();
    //     }
    // });
    var file = new fs.ReadStream('big.html');
    sendFile(file, res);
  }else{
    res.statusCode = 404;
    res.end('Not found');
  }
}).listen(3000);

function sendFile(file, res){
  file.pipe(res);
//   file.pipe(process.stdout);
  file.on('error', function(err){
    res.statusCode = 500;
    res.end('Server error');
    console.error(err);
  });

  file
    .on('open', function(){     
      console.log('open');
    })
    .on('close', function(){   
      console.log('close');
    })
    .on('end', function(){
      console.log('end');
    });
    
  res.on('close', function(){    
    file.destroy();
  });
}

// function sendFile(file, res){
//   file.on('readable', write);
//   function write(){
//     var fileContent = file.read();
//     if (fileContent && !res.write(fileContent)){
//       file.removeListener('readable', write);
//       res.once('drain', function(){
//         file.on('readable', write);
//         write();
//       });
//     }
//   }
//   file.on('end', function(){
//     res.end();
//   });
// }