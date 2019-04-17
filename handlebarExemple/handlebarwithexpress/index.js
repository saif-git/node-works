var hbe = require('express-handlebars');

var http = require('http');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/body', function(res, req, next) {
    res.render('index', { title: 'huhuhu body cool', condtion: false });
    // event.preventDefault();
})

app.engine('hbs', hbe(extnanme = '', defaultlayout = 'layout', layoutDir = __dirname + '/index.html'));

app.listen(8000, () => {
    console.log('localhost:8000');
})