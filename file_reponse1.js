const http = require('http');
const fs = require('fs');
//var url = require('url');

http.createServer(function(request, response) {
    response.writeHead(200);
    if (request.url == '/create') {
        console.log('here we go');
        //response.render('product.html');
        fs.readFile('products.html', function(error, content) {
            response.write(content);
            //res.end();
            // response.render('product.html');
        })
    } else {
        console.log('start from the index');
        fs.readFile('index.html', function(error, contents) {
            response.write(contents);
            response.end();
        });
    }


}).listen(8080);