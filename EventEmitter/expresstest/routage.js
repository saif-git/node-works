var express = require('express');

var app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/style.css");

});

app.get("/name", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.get("/javescrip", (req, res) => {

    res.sendFile(__dirname + "/routage.js")


});

app.use(function(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable check out your link!');
});

app.listen(3000, () => {
    console.log("listening on port 3000");
});