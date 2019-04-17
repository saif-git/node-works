var http = require('http');

var url = require('url');
var fs = require('fs');
var server = http.createServer((request, response) => {

    console.log("we are inside the server");
    if (request.url == "/style") {

        console.log("styles here");
        var style = fs.createReadStream('style.css');

        // request.pipe(style);
        style.pipe(response);

    } else if (request.url == "/images") {
        var image = fs.createReadStream('image.jpg');

        image.pipe(response);

    } else if (request.url == "/") {
        console.log("///////");
        //var code = fs.createReadStream('index.html');
        //request.pipe(code);
        //code.pipe(response);
        fs.readFile("index.html", "UTF-8", function(err, html) {

            response.writeHead(200, { "content-type": "text/html" });
            // html.pipe(response);
            response.write(html);
            response.end(html);
        });
    } else {
        response.writeHead(404, { "content-type": "text/plain" });
        response.end();
    }

    request.on('end', function() {

        response.end();
    });

});
server.listen(3000, function() {
    console.log("we are listening on port 3000");
});