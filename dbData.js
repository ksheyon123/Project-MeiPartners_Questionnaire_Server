const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

module.exports = {
    insertAllQuestions: function () {
        MongoClient.connect(url, (err, client) => {
            if (err) throw err;

            if (!client) {
                return;
            }

            const db = client.db("QuestionContent");


            // DataBase Collection List 호출
            db.listCollections().toArray().then((docs) => {
                console.log('Available Collections : ');
                docs.forEach((doc) => { console.log(doc.name) });
            });

            // DataBase Status 호출
            db.stats((err, stats) => {
                if (err) throw err;
                console.log(stats);
            });

            db.collection('question').insert(
                {
                    package: [
                        {
                            skinCode: 'code1',
                            skinType: '건성 타입',
                            questions:
                                [
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '1. 세안을 한 후 피부 당김의 강도는?', question1: '심하게 당긴다', question2: '약간 당긴다', question3: '안 당긴다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '2. 보습제를 바르고 2~3 시간 이후에 양 볼의 피부 결은?', question1: '매우 거칠다', question2: '매끄럽다', question3: '윤기가 흐른다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '3. 보습제는 몇 종류를 사용하는가?', question1: '1 가지', question2: '2 가지 이상', question3: '사용하지 않는다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '4. 오후의 피부 상태는 어떤가?', question1: '각질이 들떠있다', question2: '그대로다', question3: '번들거린다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '5. 화장을 했을 때 피부 상태는?', question1: '항상 각질이 들뜬다', question2: '그대로다', question3: '화장이 촉촉하게 잘 먹는다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '6. 얼굴에 주름이 있나?', question1: '주름이 있다', question2: '약간 있다', question3: '없다' },

                                ]
                        },
                        {
                            skinCode: 'code2',
                            skinType: '민감성 타입',
                            questions:
                                [
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '1. 얼굴이 쉽게 붉어지나요?', question1: '자주 붉어진다', question2: '약간 붉어진다', question3: '거의 안 붉어진다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '2. 금속이나 악세서리를 착용할 경우 피부 발진이 자주 발생하나요?', question1: '항상 나타난다', question2: '거의 안 나타난다', question3: '전혀 안 나타난다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '3. 조금만 자극이 있어도 트러블이 나나요?', question1: '항상 난다', question2: '거의 안 난다', question3: '전혀 안 난다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '4. 자외선을 받으면 가려운가요?', question1: '항상 가렵다', question2: '때때로 가려울 때도 있다', question3: '가렵지 않다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '5. 상처가 나면 흉터가 오래가나요?', question1: '재생이 느리다', question2: '보통이다', question3: '재생이 남들보다 빠르다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '6. 스크럽이나 딥 클렌징을 하고 나면 피부 상태는?', question1: '많이 따갑다', question2: '약간 따가울 때도 있다', question3: '피부가 좋아진다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '7. 자외선 차단제를 바르면 피부에 발진이나 눈 따가움이 있나요?', question1: '심하다', question2: '한번씩 있다', question3: '그렇지 않다' },

                                ]
                        },
                        {
                            skinCode: 'code3',
                            skinType: '트러블 지성 타입',
                            questions:
                                [
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '1. 아침에 일어나면 피부 상태는 어떠한가요?', question1: '번들거린다', question2: '보통이다', question3: '당긴다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '2. 아침에 세안 세정제는?', question1: '비누', question2: '폼 클렌징', question3: '물' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '3. 오후의 피부 상태는?', question1: '번들거린다', question2: '그대로다', question3: '당긴다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '4. 얼굴에 붉은 여드름이 발생한 경험이 있나요?', question1: '지금도 있다', question2: '지금도 한번씩 있다', question3: '없다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '5. 저녁에 세안은 어떻게 하시나요?', question1: '클렌징과 폼 클렌징(2중 세안)', question2: '폼 클렌징', question3: '기타' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '6. 모공의 크기는?', question1: '눈에띄게 크다', question2: '보통이다', question3: '작다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '7. 얼굴 피부 톤은?', question1: '칙칙하고 어둡다', question2: '붉다', question3: '당긴다' },

                                ]
                        },
                        {
                            skinCode: 'code4',
                            skinType: '색소 성 타입',
                            questions:
                                [
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '1. 얼굴에 기미(색소 침착)가 있나요?', question1: '대단히 많다', question2: '약간 생긴다', question3: '없다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '2. 원래 피부 색깔은?', question1: '검은 피부', question2: '갈색 피부', question3: '희고 핑크색 피부' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '3. 얼굴의 짙은 점은 햇빛에 의해 약화되나요?', question1: '많이 나빠진다', question2: '약간 나빠진다', question3: '짙은 점이 없다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '4. 자외선 차단제를 매일 사용하나요?', question1: '사용하지 않는다', question2: '가끔 사용한다', question3: '매일 사용한다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '5. 자외선에 노출이 많이 되었을 때 피부의 변화가 있나요?', question1: '피부색이 많이 짙어졌다', question2: '약간 짙어졌다', question3: '약간 붉어졌다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '6. 과거에 얼굴 기미로 진단 받은 적이 있나요?', question1: '있다', question2: '한번 있었지만 소실되었다', question3: '없다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '7. 상처(여드름 또는 염증)가 나면 없어지지 않고 색소침착이 되는 편인가요?', question1: '항상 생긴다', question2: '때때로 생긴다', question3: '전혀 생기지 않는다' },

                                ]
                        },
                        {
                            skinCode: 'code5',
                            skinType: '탄력 주름 타입',
                            questions:
                                [
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '1. 얼굴을 손가락으로 눌렀을 때 피부 상태는 어떠한가요?', question1: '말랑말랑하다', question2: '탱탱하다', question3: '모르겠다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '2. 자신은 얼마나 나이들어 보인다고 생각하나요?', question1: '1~5년 젊어 보인다', question2: '자신의 나이대로 보인다', question3: '5년 이상 더 늙어 보인다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '3. 하루의 자외선 노출 시간이 얼마나 되나요?', question1: '5시간 이상', question2: '3시간 이상', question3: '거의 안한다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '4. 눈가 혹은 팔자 주름의 깊이는 어떤가요?', question1: '둘가 깊다', question2: '눈가(팔자)만 깊다', question3: '주름은 거의 없다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '5. 예전ㄴ과 비교해서 얼굴 라인이 변한 것 같나요?', question1: '많이 변했다', question2: '조금 변한 것 같다', question3: '거의 그대로다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '6. 화장품을 바르면 흡수가 잘 되나요?', question1: '잘 안된다', question2: '되는 것 같다', question3: '잘 된다' },
                                    { subtxt: '해당하는 항목을 선택해주세요.', maintxt: '7. 예전과 비교해 피부가 얇아졌나요?', question1: '점점 더 얇아 지는 것 같다', question2: '원래 얇다', question3: '거의 그대로다' },

                                ]
                        }
                    ]
                });

            client.close();
        });

        return null;
    }
}


