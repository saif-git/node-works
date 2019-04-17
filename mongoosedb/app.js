var moongoose = require('mongoose');
const express = require('express');
const url = "mongodb://localhost:27017/tested"
var expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');

moongoose.connect(url, { useNewUrlParser: true }, function(err, settet) {
    if (err) console.log('can not connect');
    console.log('connected to data base');
});
var UrlPost = new moongoose.Schema({
    name: String,
    url: String,
    txt: String
})
var Post = moongoose.model('Post', UrlPost);

var UrlComment = new moongoose.Schema({
    text: String,
    post: [{ type: moongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

var Comment = moongoose.model('Comment', UrlComment);

var post = new Post({
    name: "hamed",
    url: "min win",
    txt: "takwir"
})

post.save(function(err) {
    if (err) console.log(err);
    else console.log('pulication ajoute : ', post.toJSON());


    let ca = [
        { text: 'j aime le cour' },
        { text: 'facile !' }
    ].forEach(function(comment, index, list) {
        comment.post = post._id
        const c = new Comment(comment)
        c.save((error, result) => {
            if (error) console.log(error)
            console.log(c.toJSON())
        })
    });
})

const queryCommentWithPost = () => {
    comment.findOne({ text: 'j aime' }).populate('post').exec(function(err, comment) {
        if (err) console.log(err)
        console.log('le pu est ', comment)
        moongoose.disconnect();
    })
}