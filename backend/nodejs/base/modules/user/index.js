var db = require("../db/index");
// db.connect();
var log = require("../logger")(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function(who) {
    log(db.getPhrase('Hello'), "," , who.name);
}

console.log("user.js is required!");

// global.User = User;
module.exports = User;

// console.log(module)

