// $(function() {

//     var server = io.connect('http://localhost:8080');
//     server.on('messages', function(data) {

//         console.log(data);
//     })
// })

var server = io.connect('http://localhost:8080');
var messages = document.getElvementById('message');
var output = document.getElementById('output');
var btn = document.getElementById('send');
var hundle = document.getElementById('hundle');

btn.addEventListener('click', () => {

    server.emit('chat', {
        messages: messages.value,
        hundle: hundle.value

    })''
})

server.on('chat', function(data) {
    output.innerHTML += '<p><strong>hundle:' + data.hundle + '</strong></p>' +
        '<p><strong>message:' + data.messages + '</strong></p>';
})