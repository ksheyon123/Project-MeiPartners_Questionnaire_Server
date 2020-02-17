var express = require('express');
var dataRouter = express.Router();

var dataModel = require('../models/dataModel');

dataRouter.get('/api/question', async (req, res) => {
    try {
        var result = await dataModel.AllQuestions();
        console.log(result)
        res.status(200).send(result);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});

module.exports = dataRouter;