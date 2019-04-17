var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res) {

    res.render('response.html');

    if (req.url == '/create') {
        fs.readFile("index.html", function(err, response) {
            if (err) {
                res.writeHead(404);
                res.write('can t fing out');

            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.write(response);
                res.render('product.html');
            }
            res.end();
        });
    } else {

        // res.writeHead(200, { 'Content-Type': 'text/html' });
        //res.render('response.html');
        // res.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        res.end();

    }

}).listen(8080);