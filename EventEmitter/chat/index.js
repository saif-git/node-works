// var redis = require('redis');
// var client = redis.createClient();

// client.set('message1', 'bounjour', 'c ahmed');
// client.set('message2', 'comment ca va ?');


// client.get('message1', (err, reply) => { console.log(reply) });
var redis = require('redis');
var client = redis.createClient();
var name, data;
var http = require('http');


var message = JSON.stringify({ "name": name, "data": data });

client.on('error', function(err) {
    console.log('Something went wrong ', err)
});
client.set('my test key', 'my test value');
client.set('my test kkey2', 'hey your')
client.get('my test kkey2', function(error, result) {
    if (error) throw error;
    console.log('GET result ->', result)
});
message = function(name, data) {
    messages.push({ name: name, data: data });
    if (messages.length > 10) {
        messages.shift();
    }
}

client.on('join', function(name) {
    client.lrange("messages", 0, -1, function(err, messages) {
        messages = messages.reverse();
        messages.forEach(function(message) {
            message = JSON.parse(message);
            client.emit("messages " + message.name + " : ", message.data);
        })
    })
})