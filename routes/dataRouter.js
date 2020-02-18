var express = require('express');
var dataRouter = express.Router();

var dataModel = require('../models/dataModel');

dataRouter.get('/api/question', async (req, res) => {
    try {
        var result = await dataModel.AllQuestions();
        res.status(200).send(result[0]);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});

dataRouter.post('/api/question/:id', async (req, res) => {
    try {
        var dataNumber = req.params.id;
        var result = await dataModel.AllQuestions();
        res.status(200).send(result[0].questions[parseInt(dataNumber) - 1]);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});

module.exports = dataRouter;