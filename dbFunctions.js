const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

module.exports = {
    findOne: async (result) => {
        const client = await MongoClient.connect(url)
            .catch(err => { console.log(err) });

        if (!client) {
            return;
        }

        try {
            const db = client.db("QuestionContent");

            // DataBase Collection List 호출
            let collectionList = await db.listCollections().toArray();
            if (!collectionList) {
                console.log('Collection List not exits');
            }
            collectionList.forEach(element => {
                console.log(element.name);
            });

            // DataBase Status 호출
            db.stats((err, stats) => {
                if (err) throw err;
            });
            array = [];
            var data = await db.collection('question').findOne({});
            for (let i = 0; i < data.package.length; i++) {
                if (data.package[i].skinCode == result) {
                    array.push(data.package[i].questions);
                }
            }
            return array;
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    },
    findNext: async (result) => {
        const client = await MongoClient.connect(url);

        if (!client) {
            return;
        }
        try {
            const db = client.db("QuestionContent");

            array = [];
            var data = await db.collection('question').findOne({});
            for (let i = 0; i < data.package.length; i++) {
                if (data.package[i].skinCode == result.code) {
                    array.push(data.package[i].questions);
                }
            }
            return array;
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    },
    getRandomQuestion: async () => {
        const client = await MongoClient.connect(url);

        if (!client) {
            return;
        }
        try {
            const db = client.db("QuestionContent");

            array = [];
            var data = await db.collection('question').findOne({});
            for (let i = 0; i < data.package.length; i++) {
                for (j = 0; j < 2; j++) {
                    var count = data.package[i].questions.length;
                    var rNum = Math.floor((Math.random() * count));
                    array.push(data.package[i].questions[rNum]);
                }
            }
            return array;
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    },
    getRecommendationList: async (getData) => {
        const client = await MongoClient.connect(url);

        if (!client) {
            return;
        }
        try {
            const db = client.db("QuestionContent");

            array = [];
            var data = await db.collection('itemList').findOne({});
            for (var j = 0; j < getData.length; j++) {
                for (var i = 0; data.items.length; i++) {

                    if (getData[j] == data.items[i].index) {
                        if (i * j == 10) {
                            array.push(data.items[i]);
                            return array;
                        }
                    }
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
}