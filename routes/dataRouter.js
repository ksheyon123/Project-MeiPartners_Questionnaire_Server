var express = require('express');
var dataRouter = express.Router();

var dataModel = require('../models/dataModel');

dataRouter.get('/api/randquestions', async (req, res) => {
    try {
        // Get Random Questions
	console.log(req.body);
        var result = await dataModel.getRandomQuestion();
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
    }
})

dataRouter.post('/api/question', async (req, res) => {
    try {
        var rawArray = new Array();
        var aJson = new Object();
        var bJson = new Object();
        var cJson = new Object();
        var dJson = new Object();
        var eJson = new Object();

        aJson.code1 = req.body.code1;
        rawArray.push(aJson);
        bJson.code2 = req.body.code2;
        rawArray.push(bJson);
        cJson.code3 = req.body.code3;
        rawArray.push(cJson);
        dJson.code4 = req.body.code4;
        rawArray.push(dJson);
        eJson.code5 = req.body.code5;
        rawArray.push(eJson);
        data = [];
        data1 = [];
        data2 = [];
        data3 = [];
        data4 = [];
        data5 = [];

        data.push(rawArray[0].code1);
        data.push(rawArray[1].code2);
        data.push(rawArray[2].code3);
        data.push(rawArray[3].code4);
        data.push(rawArray[4].code5);
        for (i = 0; i < data.length; i++) {
            if (data[i] == 4) {
                var str = 'code' + `${i + 1}`;
                data1.push(str);
            } else if (data[i] == 3) {
                var str = 'code' + `${i + 1}`;
                data2.push(str);
            } else if (data[i] == 2) {
                var str = 'code' + `${i + 1}`;
                data3.push(str);
            } else if (data[i] == 1) {
                var str = 'code' + `${i + 1}`;
                data4.push(str);
            } else if (data[i] == 0) {
                var str = 'code' + `${i + 1}`;
                data5.push(str);
            }
        }

        if (data1[0]) {
            var result = await dataModel.getRecommendationList(data1);
        } else if (!data1[0] && data2[0]) {
            var result =await dataModel.getRecommendationList(data2);
        } else if (!data2[0] && data3[0]) {
            var result =await dataModel.getRecommendationList(data3);
        } else if (!data3[0] && data4[0]) {
            var result =await dataModel.getRecommendationList(data4);
        } else {
            var result =await dataModel.getRecommendationList(data5);
        }
        var array = [];
        for (var i = 0; i < result.length; i++) {
            array.push(result[i].index);
        }
        var sendData = await dataModel.getItemExplanation(array);
        res.status(200).send(sendData);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
});


module.exports = dataRouter;
