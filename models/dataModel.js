const mongoDB = require('../dbFunctions');

class Questions {
    FindQuestion(data) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    const result = await mongoDB.findOne(data);
                    resolve(result[0]);
                } catch (err) {
                    console.log(err)
                    reject(err);
                }
            }
        )
    }

    FindQuestionNext(data) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    const result = await mongoDB.findNext(data);
                    resolve(result[0]);
                } catch (err) {
                    console.log(err);
                    reject(err);
                }
            }
        )
    }

    getRandomQuestion() {
        return new Promise (
            async (resolve, reject) => {
                try {
                    const result = await mongoDB.getRandomQuestion();
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }
        )
    }

    getRecommendationList(ordered) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    const result = await mongoDB.getRecommendationList(ordered);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }
        )
    }
    getItemExplanation(data) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    console.log('getItemExplanation data', data)
                    const result = await mongoDB.getItemExplanation(data);
                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            }
        )
    }
}

module.exports = new Questions();