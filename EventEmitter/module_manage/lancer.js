var http = require('http');


var server = http.createServer(function(req, res) {

    console.log("server is here");
    console.log("make it here");

});


server.listen(3000, function() {
    console.log("we r listening on port localhost://3000");


});