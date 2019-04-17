var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
    response.writeHead(200);


    //La réponse dans la section Body
    response.write('Bonjour!');
    response.end();
});

server.on('close', function() {
    console.log('closed on');
});
server.listen(8080);