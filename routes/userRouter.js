var express = require('express');
var userRouter = express.Router();

var userModel = require('../models/userModel');

userRouter.get('/api/question', async (req, res) => {
    try {
        var result = await userModel.AllQuestions();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = userRouter;