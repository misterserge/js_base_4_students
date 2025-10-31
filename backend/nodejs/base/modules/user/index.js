var db = require("../db");
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
// module.exports.User = User;
// exports.User = User;
// this.User = User;
module.exports = User;

// console.log(module)

