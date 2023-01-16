"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var log = console.log;
var url = 'https://jsonplaceholder.typicode.com/todos/1';
// Receive a promise (async)
axios_1["default"].get(url).then(function (response) {
    log(response.data);
});
