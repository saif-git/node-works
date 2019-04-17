var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
const app = express();
app.use(bodyParser.json());
const path = require('path');
const collection = "todo";
//app.use(db);


app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.put('/update/:id', (req, res) => {

    const todoID = req.params.todo;
    const userInput = req.body;
    String(todoID);
    //console.log(db.getPrimaryKey(todoID));
    var myquery = { todo: todoID };

    db.getDb().collection(collection).updateOne(myquery, { $set: { _id: db.ObjectID(req.params.id) } }, (err, document) => {
            if (err) console.log(err);
            else {
                res.json(document);
            }
        })
        // db.getDB().collection(collection).findOneAndUpdate({ _id: db.getPrimaryKey(todoID) }, { $set: { todo: userInput.todo } }, { returnOriginal: false }, (err, result) => {
        //     if (err)
        //         console.log(err);
        //     else {
        //         res.json(result);
        //     }
        // });

});

app.post("/post/:todo", function(req, res) {

    //const todo = todoID;
    const userprint = req.body;
    //var myquery = { todo: todoID }

    db.getDb().collection(collection).insertOne({ todo: userprint }, function(err, document) {
        if (err) { console.log(err); }
        console.log(document);
        res.json(document);
    })

    //   db.close();


});
app.get('/todos', (req, res) => {
    db.getDb().collection(collection).find({}).toArray((err, document) => {

        if (err)
            console.log(err)
        else console.log(document)
        res.json(document)
            //console.log(document);

        // res.sendFile(path.join(__dirname, 'index.html'), document);

        // res.render('index.html', document);

    });
});
app.delete('/delete/:todo', (req, res) => {
    //  var id = db.getPrimaryKey(id);
    var item = req.body;
    db.getDb().collection(collection).deleteOne({ todo: item }, (err, document) => {
        if (err) {
            console.log(err);
        }
        res.json(document);
    })
});

db.connect((err) => {
    if (err) {
        console.log("enable to connect");
        process.exit(1);
    } else {
        app.listen(3000, () => {
            console.log("connected to database and listening  on 3000");
        });
    }
})