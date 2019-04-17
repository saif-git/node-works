const http = require('http');
//reading the data
/*var server = http.createServer();
server.on('request', function(request, response) {
    response.writeHead(200);

    request.on('readable', function() {
        var buffer = null;

        while ((buffer = request.read()) != null) {

            response.write(buffer.toString());
        }
    });

    request.on('end', function() {
        response.end();
        console.console.log("hello");

    });
}).listen(8080);*/

/*http.createServer(function(request, response) {

    response.writeHead(200);

    /*request.on('readable', function() {
        var buffer = null;

        while ((buffer = request.read()) != null) {

            response.write(buffer.toString() + "\n");
        }
    });
    //request.pipe(response);

    request.on('readable', function(req, res) {

        var buffer = null;

        while ((buffer = req.read()) != null) {
            if (res.write(buffer.toString == "hello")) {
                res.write(buffer.toString());
            }
            console.log('can t ');
        }
    });

    request.on('end', function() {
        response.end();
    });

}).listen(8080);*/


//writing data with data flux


const fs = require('fs');

/*http.createServer(function(request, response) {

    request.writeHead(200);

    var newFile = fs.createWriteStream('fichier.iso');

    request.pipe(newFile);

    request.on('end', function() {
        response.end("upload fait");
    })
}).listen(8080);*/

http.createServer(function(request, response) {

    var newFile = fs.createWriteStream('fichier2.iso');
    var fileTotalSize = request.headers['content-length'];
    var uploadSize = 0;

    request.on('readable', () => {

        let buffer = 0;

        while ((buffer = request.read()) != null) {

            uploadSize += buffer.length;
            var progress = ((uploadSize / fileTotalSize) * 100);

            response.write("progress :" + parseInt(progress, 10) + "\n");
        }
    });
    request.pipe(newFile);

    request.on('end', function() {
        response.end();

    })
}).listen(8080);