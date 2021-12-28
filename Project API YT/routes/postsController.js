const express = require('express');
const router = express.Router()

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err,docs) => {
        if (!err) res.send(docs);
        else console.log("Error to get date : " + err);
    })
});

router.post('/', (req, res) => {
    const newRecond = new PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newRecond.save((err,docs) =>{
        if (!err) res.send(docs);
        else console.log('Error creating new data : ' + err);
    })
})

module.exports = router