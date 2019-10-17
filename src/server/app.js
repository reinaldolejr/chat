const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose');

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");

app.get('/post', (req, res) => {

    Post.find(function (error, posts) {
        if (error) { console.error(error); }
        res.send(posts)
    });
});

app.post('/post', (req, res) => {
    var db = req.db;
    var nickname = req.body.nickname;
    var message = req.body.message;
    var new_post = new Post({
        nickname: nickname,
        message: message,
        date: Date()
    })

    new_post.save(function (error) {
        if (error) {
            console.log(error)
        }
        res.send({
            success: true,
            message: 'Post saved successfully!'
        })
    })
});

app.listen(process.env.PORT || 8081)