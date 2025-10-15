"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (res) {
    console.log(res.data);
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
});
