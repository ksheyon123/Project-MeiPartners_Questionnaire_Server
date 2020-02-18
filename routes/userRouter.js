var express = require('express');
var userRouter = express.Router();

var userModel = require('../models/userModel');

userRouter.post('/api/auth', async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).send('hi');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = userRouter;