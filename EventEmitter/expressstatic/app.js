var express = require('express');

var app = express();

app.use(express.static('public'));

app.param('name', function(req, res, next) {
    var quotes = {
        'name': 'saif welcom to test',
        'oussema': 'always eat'
    }
    var name = req.params.name;
    var my_quotes = quotes[name];
    req.quoteByName = my_quotes;

    next();
});

app.get('/quotes/:name', (req, res) => {

    res.json(req.quoteByName);
})

// app.get('/quotes', function(req, res) {
//     var quotes = [
//         { 'name': 'saif welcom to test' },
//         { 'oussema': 'always eat ' },
//         { 'einestein': 'e=mc' }
//     ]

//     //   var quotes = { 'name': 'saif welcom to test' }

//     //  res.render('index.html', { quotes: quotes.json() });
//     if (req.query.limit > 0) {
//         res.json(quotes.slice(0, req.query.limit));
//     }
//     res.json(quotes);

// });



app.listen(3000, () => {
    console.log('localhost:3000');
})