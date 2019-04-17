var express = require('express');

var app = express();

var quotes = {
    'einestein': "e=mc here i ",
    'ibrahamlincon': "here we start with bank"
}

// app.get("/quotes/:name", function(req, res) {
//     res.send(quotes[req.params.name]);
//});

// app.get("/quotes/:name", (req, res) => {

//     var quote = quotes[req.params.name];
//     res.render('indes.ejs', {
//         name: req.params.name,
//         quote: quote
//     });

// });
// app.get("*", function(req, res) {
//     res.render('404.ejs');
// })



app.get('/json', function(req, res) {

    res.send(quotes);
});

app.get('/quotes/:author', function(req, res) {
    var my_quotes = [
        { author: 'einestein', text: 'life is like riding' },
        { author: 'partner', text: 'life is like riding on the floor' },
        { author: 'macarena', text: 'life is like riding on the prison' },
        { author: 'fullham', text: 'life in the premier leage' }

    ];

    res.render('all_quotes.ejs', { quotes: my_quotes });

});

app.get('/', function(req, res) {
    res.redirect(301, '/quotes');
})


app.listen(8080, function() {
    console.log("listening on port 8080");
});