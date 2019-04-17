var express = require('express');
var MongoClient = require('mongodb');
var bodyParser = require('body-parser');
var io = require('socket.io');
var app = express();
app.use(bodyParser.json());
var url = "mongodb://localhost:27017/mongochat";
const client = io.listen(4000).sockets;
///var socket = reauire('socket.io');
MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {

    if (err) console.log(err);

    //connected our socket
    client.on('connection', () => {
        let chat = db.collection("chats");

        var sendStatus = function(s) {
            socket.emit('status', s);
        }

        chat.find().limit(100).sort({ _id: 1 }).toArray(function(err, res) {
            if (err) throw err;
            socket.emit('output', res);
        });

        socket.on('input', function(data) {
            let name = data.name;
            let message = data.message;

            if (name == '' || message == '') {

                sendStatus('please entre name and message');
            } else {
                chat.insert({ name: name, message: message }, function() {
                    client.emit('output', [data])

                    //send status oject
                    sendStatus({
                        message: 'message send it',
                        clear: true
                    });
                });
            }


        })

        socket.on('clear', (data) => {

            chat.remove({}, () => {
                socket.emit('cleared');
            })
        })
    })
    console.log("connected to data base ");
});
// app.listen(3000, () => {
//     console.log("https://localhost:3000");
// })