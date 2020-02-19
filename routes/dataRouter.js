var express = require('express');
var dataRouter = express.Router();

var dataModel = require('../models/dataModel');

dataRouter.post('/api/getuserselectiondata', async (req, res) => {
    try {
        var  birth = req.body.year + '/' + req.body.month + '/' + req.body.day;
        req.session.user = {
            user : req.session.user.user,
            name : req.session.user.name,
            birth : birth,
            gender : req.body.gender,
            location : req.body.location,
            clientname : req.body.name,
            code : req.body.code,
        }
        res.status(200).send(req.session.user)
    } catch (err) {
        console.log(err);
    }
})

dataRouter.post('/api/question', async (req, res) => {
    try {
        console.log(req.session.user);
        var result = await dataModel.FindQuestion(req.session.user.code);
        res.status(200).send(result);
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