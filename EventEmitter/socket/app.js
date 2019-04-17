var socket = require('socket.io');
var express = require('express');
var app = express();
var http= require('http');
// const server = require('http').createServer(app);
// io.on('connection', function(client) {
//     console.log('connecting here');
//     client.emit('messages', { bonjour: 'tous le monde va faire foudre' })
// });



// app.get('/', function(req, res) {

//     console.log('we r inside / function');
// });

var server = app.listen(8080, () => { console.log('connecting here')
console.log('http:localhost:8080') });
app.use(express.static('public'));

app.get('/',(req,res)=>{

res.redirect('/client.html');
})

var io = socket(server);
io.on('connect', (socket) => {
    console.log('our socket connected', socket.id);
    socket.on('chat', (data) => {
        console.log("id here",data);
        io.sockets.emit('chat', data);
    })
});''