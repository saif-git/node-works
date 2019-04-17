const express = require('express');

const app = express();
app.use(express.static('public'));

//create Http Server Which dispateches request to express
const server = require('http').createServer(app);
//Socket allowed to listen for requests: socket and expresss are sharing the same http server
const io = require('socket.io')(server);

var messages = []; //Sauvegarder les messages dans un tableau
const redis = require('redis');
const redisClient = redis.createClient();

var storeMessage = function(name, data) {
    var message = JSON.stringify({ name: name, data: data })

    //redisClient.lpush("messages");
    messages.push({ name: name, data: data }); //Ajout du messages
    if (messages.length > 10) {
        messages.shift(); //Garder uniquement les 10 derniers messsages
    }
}


io.on('connection', function(client) {
    console.log('Client Connected' + client.id);
    //Emitting the messages event on our client (browser)
    client.on('messages', function(data) {
        //broadcast the message to all the Connected clients
        client.broadcast.emit('messages', client.username + ":" + data);
        //the chatter sees what he has written
        client.emit('message', client.username + ":" + data);
        storeMessage(client.username, data);

    });

    //Added event to get the chatter username
    client.on('join', function(name) {
        client.username = name;
        //Parcourir nos messages et notifier le nouveau client connecté
        //A propos des messages
        messages.forEach(function(message) {
            client.emit("messages", message.name + ": " + message.data);
        });
    });
});

io.on('disconnect', function(client) {

    console.log('client disconnected');
    client.broadcast.emit("remove chatter", client.name);
    // redisClient.srem("chatters", client.name);
})

// client.on('join', function(name) {
//     redisClient.lrang("messages", 0, -1, function(err, reply) {

//     })
// })
server.listen(8080);