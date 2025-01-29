var db = require("db");
db.connect();
const User = require("./user")
var log = require("logger")(module);

function run() {
    var vasya = new User("Vasya");
    var petya = new User("Petya");
    
    vasya.hello(petya);
    log(db.getPhrase("Run successful"));
}

if (module.parrent) {
    exports.run = run;
}else{
    run();
}