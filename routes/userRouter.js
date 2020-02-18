var express = require('express');
var userRouter = express.Router();

var userModel = require('../models/userModel');

userRouter.post('/api/register', async (req, res) => {
    try {
        await userModel.UserRegister(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

userRouter.post('/api/login', async (req, res) => {
    try {
        var result = await userModel.UserLogin(req.body);
        if (result == true) {
            res.status(200);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = userRouter;