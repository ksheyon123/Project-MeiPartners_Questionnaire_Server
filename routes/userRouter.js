var express = require('express');
var userRouter = express.Router();

var userModel = require('../models/userModel');

userRouter.post('/api/register', async (req, res) => {
    try {
        console.log('register', req.body)
        var result = await userModel.UserRegister(req);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

userRouter.post('/api/login', async (req, res) => {
    try {
        var result = await userModel.UserLogin(req);
            res.status(200).send(result);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = userRouter;