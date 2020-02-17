const mongoDB = require('../dbConfig');

class Questions {
    AllQuestions() {
        return new Promise (
            async (resolve, reject) => {
                try {
                    const result = await mongoDB.findFunction;
                    resolve(result);
                } catch (err) {
                    console.log(err)
                    reject(err);
                }
            }
        )
    }
}

module.exports = new Questions();