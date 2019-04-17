//console.log('we r inside index');

const http = require('http');
var url = require('url');
var fs = require('fs');
const hb = require('handlebars');

var context = { title: "My New Post", body: "This is my first post!" };
//var html    = template(context);
var source = document.getElementById("entry-template");
var template = Handlebars.compile(source);

var server = http.createServer((req, res) => {



    console.log('we r inside the server');
});

server.listen(3000, function() {
    console.log("we are listening on port 3000");
});