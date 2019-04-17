var express = require('express');

var app = express();

let route = express.Router();
//route.set('view engine', 'html');
//route.engine('ejs');
route.get('/person', (req, res) => {

    res.send('we are here for person');
});
route.get('/person/:name/:user', (req, res) => {

        res.send('you have request a name :' + req.params.name + " user :" + req.params.user);
    })
    // route.get('/personne2', (req, res) => {
    //     console.log('send files here')
    //         //res.sendFile('/person.ejs', { root: __dirname + '' });
    //     res.render('person.ejs');
    // })

route.get('/personapi', function(req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    })
});
module.exports = route;