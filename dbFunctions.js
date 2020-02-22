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
            list1 = [1, 2, 3, 4, 5];
            tmp = [];
            var data = await db.collection('question').findOne({});
            for (let i = 0; i < data.package.length; i++) {
                var count = data.package[i].questions.length;
                var rNum1 = Math.floor((Math.random() * count));
                var rNum2 = Math.floor((Math.random() * count));
                do {
                    rNum2 = Math.floor((Math.random() * count));
                }
                while (rNum1 == rNum2);

                array.push(data.package[i].questions[rNum1]);
                array.push(data.package[i].questions[rNum2]);
            }

            for (var i = 0; i < 10; i++) {
                rNum1 = Math.floor((Math.random() * 10));
                rNum2 = Math.floor((Math.random() * 10));
                tmp = array[rNum1];
                array[rNum1] = array[rNum2];
                array[rNum2] = tmp;
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
            for (var i = 0; i < getData.length; i++) {
                for (var j = 0; j < data.items.length; j++) {
                    if (getData[i] == data.items[j].index) {
                        array.push(data.items[j]);
                    }
                }
            }
            return array;
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    },
    getItemExplanation: async (getData) => {
        const client = await MongoClient.connect(url);

        if (!client) {
            return;
        }
        try {
            const db = client.db("QuestionContent");
            //getData : code : [a, b]
            array = [];
            var data = await db.collection('itemExplanation').findOne({});
            console.log('getItemExplanation items', data.manuals[0].skinCode)
            console.log('getItemExplanation get Data : ', getData[0])

            for (var i = 0; i < getData.length; i++) {
                console.log('hi')
                for (var j = 0; j < data.manuals.length; j++) {
                    console.log('getData : ' + getData[i] + ': ' + data.manuals[j].skinCode);
                    if (getData[i] == data.manuals[j].skinCode) {
                        console.log(getData[i]);
                        array.push(data.manuals[j]);
                    }
                }
            }
            console.log('array', array)
            return array;
        } catch (err) {
            console.log(err);
        } finally {
            client.close();
        }
    }
}