var EventEmitter = require('events').EventEmitter;

var db = new EventEmitter;
console.dir(db);
// db.setMaxListeners(0);

function Request(){
    var self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function(data){
        console.log(data);
    }
    // db.on('data', (info) => self.send(info));
    function onData(info){
        self.send(info);
    }
    this.end = function(){
        db.removeListener('data', onData);
    }
    db.on('data', onData);
}


setInterval(function(){
    //heapDump
    var request = new Request();
    request.end();
    request.send(process.memoryUsage().heapUsed);
    console.log(db)
}, 200);