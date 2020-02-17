// 1. mongoose 모듈 가져오기
var mongoose = require('mongoose');
// 2. testDB 세팅
var dbConnection = mongoose.connect('mongodb://localhost:27017/QuestionContent', { useNewUrlParser: true, useUnifiedTopology: true });
// 3. 연결된 testDB 사용
var db = mongoose.connection;
// 4. 연결 실패
db.on('error', function () {
    console.log('Connection Failed!');
});
// 5. 연결 성공
db.once('open', function () {
    console.log('Connected!');
});

// 6. Schema 생성. (혹시 스키마에 대한 개념이 없다면, 입력될 데이터의 타입이 정의된 DB 설계도 라고 생각하면 됩니다.)
var questions = mongoose.Schema({
    questions: [{
        subtxt : 'string',
        maintxt : 'string',
        question1: 'string',
        question2: 'string',
        question3: 'string',
        question4: 'string',
    }]
});

// 7. 정의된 스키마를 객체처럼 사용할 수 있도록 model() 함수로 컴파일
var Questions = mongoose.model('Schema', questions);

// 8. Student 객체를 new 로 생성해서 값을 입력
var newQuestions = new Questions({
    questions:
        [
            { question1: 'Anti-Aging', question2: 'Whitening', question3: 'TroubleCaring', question4: 'Facial-Lifting' },
            { question1: 'Oilly-Type', question2: 'Dry-Type', question3: 'Combination-Type' },
            { question1: '1 Hours', question2: '2 Hours', question3: '3 Hours', question4: '4 Hours' },
        ]
});
// var newQuestions = new Questions({ name: 'Hong Gil Dong', address: '서울시 강남구 논현동', age: '22' });
// 9. 데이터 저장
newQuestions.save(function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log('Saved!')
    }
});

// var dbDisconnect = mongoose.disconnect();

var findFunction = Questions.find((error, questions) => {
    return (questions)
})

module.exports = { findFunction, dbConnection };