var http = require('http');
fs = require('fs');


fs.readFile('index.html', function(err, html) {
    if (err) {
        throw err;
    }

    http.createServer(function(request, response) {
        //L'état de la requête dans la section Header
        response.writeHead(200, { 'Content-Type': 'text/html' });
        //La réponse dans la section Body
        response.write('<h1>tout le monde</h1>Bonjour!');


        setTimeout(function() {
            console.log('here we go');
            response.write("Au revoir!");
            response.end();
        }, 3000);

        response.write('en ecoute ');
    }).listen(8080); //Rester à l'écoute sur le port 8080
});