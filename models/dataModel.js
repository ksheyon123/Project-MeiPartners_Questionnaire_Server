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
}

module.exports = new Questions();