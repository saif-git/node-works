const express = require('express');

const jwt = require('jsonwebtoken');

const app = express();


app.get('/api', (req, res) => {
    res.json({
        message: 'welcom to the API'
    })
});

app.post('/api/post', verifytoken, function(req, res) {

    jwt.verify(req.token, 'secretkey', (err, authData) => {

        if (err) {
            console.log("error :" + err);
            res.sendStatus(403)
        } else {
            res.json({ message: 'post are created.....', authData });
        }

    });

})

app.post('/api/login', (req, res) => {
    const user = {
        id: '1',
        username: 'saif',
        email: 'saifjuini14@gmail.com'
    }

    jwt.sign({ user }, 'secretkey', (err, token) => {

        res.json({ token });
    })
})

function verifytoken(req, res, next) {
    const breadheader = req.headers['authorization'];
    if (typeof breadheader != 'undefined') {

        const bearer = breadheader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;

        console.log('undifined are passed here');

        next();
    } else {
        console.log('indifined for 403');
        res.sendStatus(403);
    }
}

app.listen(3000, () => { console.log('local:3000') });