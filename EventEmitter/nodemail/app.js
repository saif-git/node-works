const express = require('express');
const bodyParser = require('body-parser');
const expresshandle = require('express-handlebars');

const nodemailer = require('nodemailer');

const app = express();
var path = require('path');
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
app.engine('handlebars', expresshandle());

//app.createServer().listen(3000, () => { console.log('localhost:3000') });
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
//app.createServer().listen(3000, () => { console.log('localhost:3000') });
app.set('view engine', 'handlebars');
app.use('/public', express.static(path.join(__dirname, 'public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.render('contact');
});
app.post('/send', (req, res) => {
    console.log(req.body);
    const output = `<div>you have a new contact here</div>
                         <p>you contact details</p>
                         <ul>
                         <li>name :${req.body.name}</li>
                         <li>company :${req.body.company}</li>
                         <li>email :${req.body.email}</li>
                         <li>phone :${req.body.phone}</li>
                         </ul>`;

    let transporter = nodemailer.createTransport({
        host: "saifjuini1444@gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'saifjuini1444@gmail.com', // generated ethereal user
            pass: 'codewvuxk789A' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    let mailOptions = {
        from: '"me 👻" <saifjuini144@gmail.com>', // sender address
        to: "saifjuini1444@gmail.com", // list of receivers
        subject: "node mail test ✔", // Subject line
        text: "Hello world?", // plain text body
        html: output // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {

        if (error) return console.log(error);

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.render('/contact', { msg: 'has sendet to you' })
    });

})
app.listen(8080, function() { console.log('localhost:8080') });