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
                                    { type: "code1", subtxt: '항목을 선택하세요.', maintxt: '세안 후 피부 당김 정도는?', question1: '심하게 당긴다', question2: '약간 당긴다', question3: '안 당긴다' },
                                    { type: "code1", subtxt: '항목을 선택하세요.', maintxt: '보습제를 바르고 2~3시간 이후 양 볼의 피부결은?', question1: '매우 거칠다', question2: '매끄럽다', question3: '윤기가 흐른다' },
                                    { type: "code1", subtxt: '항목을 선택하세요.', maintxt: '오후의 피부 상태는 어떤가요?', question1: '각질이 들떠있다', question2: '그대로다', question3: '번들거린다' },
                                    { type: "code1", subtxt: '항목을 선택하세요.', maintxt: '화장을 했을 때 피부 상태는?', question1: '항상 각질이 들뜬다', question2: '그대로다', question3: '화장이 촉촉하게 잘 먹는다' },
                                    { type: "code1", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 주름이 있나요?', question1: '주름이 있다', question2: '약간 있다', question3: '없다' },

                                ]
                        },
                        {
                            skinCode: 'code2',
                            skinType: '민감성 타입',
                            questions:
                                [
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '얼굴이 쉽게 붉어지나요?', question1: '자주 붉어진다', question2: '약간 붉어진다', question3: '거의 안 붉어진다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '금속이나 악세서리를 착용할 경우 피부 발진이 자주 발생하나요?', question1: '항상 나타난다', question2: '거의 안 나타난다', question3: '전혀 안 나타난다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '조금만 자극이 있어도 트러블이 나나요?', question1: '항상 난다', question2: '거의 안 난다', question3: '전혀 안 난다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '자외선을 받으면 가려운가요?', question1: '항상 가렵다', question2: '때때로 가려울 때도 있다', question3: '가렵지 않다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '상처가 나면 흉터가 오래 가나요?', question1: '재생이 느리다', question2: '보통이다', question3: '재생이 남들보다 빠르다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '스크럽이나 딥 클렌징을 하고 나면 피부 상태는?', question1: '많이 따갑다', question2: '약간 따가울 때도 있다', question3: '피부가 좋아진다' },
                                    { type: "code2", subtxt: '항목을 선택하세요.', maintxt: '자외선 차단제를 바르면 피부에 발진이나 눈 따가움이 있나요?', question1: '심하다', question2: '한번씩 있다', question3: '없다' },

                                ]
                        },
                        {
                            skinCode: 'code3',
                            skinType: '트러블 지성 타입',
                            questions:
                                [
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '아침에 일어나면 피부 상태는 어떠한가요?', question1: '번들거린다', question2: '보통이다', question3: '당긴다' },
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '오후의 피부 상태는?', question1: '번들거린다', question2: '그대로다', question3: '당긴다' },
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 붉은 여드름이 발생한 경험이 있나요?', question1: '지금도 있다', question2: '지금도 한번씩 생긴다', question3: '없다' },
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '저녁에 세안은 어떻게 하시나요?', question1: '클렌징과 폼 클렌징', question2: '폼 클렌징', question3: '기타' },
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '모공의 크기는?', question1: '큰 편이다', question2: '보통이다', question3: '작다' },
                                    { type: "code3", subtxt: '항목을 선택하세요.', maintxt: '얼굴 피부톤은?', question1: '어두운 편이다', question2: '붉은 편이다', question3: '밝은 편이다' },

                                ]
                        },
                        {
                            skinCode: 'code4',
                            skinType: '색소 성 타입',
                            questions:
                                [
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '얼굴에 색소 침착이 있나요?', question1: '많다', question2: '약간 생긴다', question3: '없다' },
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '원래 피부 색깔은?', question1: '태닝된 피부', question2: ' 약간 태닝된 피부', question3: '희고 핑크색 피부' },
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '얼굴의 점이 햇빛에 의해 짙어지나요?', question1: '많이 짙어진다', question2: '약간 짙어진다', question3: '짙은 점이 없다' },
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '자외선에 노출이 많이 되었을 때 피부의 변화가 있나요?', question1: '피부색이 짙어졌다', question2: '약간 짙어졌다', question3: '약간 붉어졌다' },
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '과거에 얼굴 기미로 진단 받은 적이 있나요?', question1: '있다', question2: '한번 있었지만 소멸되었다', question3: '없다' },
                                    { type: "code4", subtxt: '항목을 선택하세요.', maintxt: '상처나 여드름이 없어지지 않고 색소침착이 되는 편인가요?', question1: '항상 그렇다', question2: '때때로 그렇다', question3: '전혀 아니다' },

                                ]
                        },
                        {
                            skinCode: 'code5',
                            skinType: '탄력 주름 타입',
                            questions:
                                [
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '얼굴을 손가락으로 눌렀을 때 피부 상태는 어떠한가요?', question1: '말랑말랑하다', question2: '탱탱하다', question3: '모르겠다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '나이에 비해 어떻게 보이는 편인가요?', question1: '나이가 많아 보인다', question2: '나이대로 보인다', question3: '젊어 보인다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '하루의 자외선 노출 시간이 얼마나 되나요?', question1: '5시간 이상', question2: '3시간 이상', question3: '거의 안 한다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '눈가 혹은 팔자 주름의 깊이는 어떤가요?', question1: '둘 다 깊다', question2: '하나만 깊다', question3: '주름이 거의 없다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '예전과 비교해서 얼굴 라인이 변한 것 같나요?', question1: '많이 변했다', question2: '조금 변한 것 같다', question3: '거의 그대로다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '화장품을 바르면 흡수가 잘 되나요?', question1: '잘 안 된다', question2: '되는 것 같다', question3: '잘 된다' },
                                    { type: "code5", subtxt: '항목을 선택하세요.', maintxt: '예전과 비교해 피부가 얇아졌나요?', question1: '점점 더 얇아지는 것 같다', question2: '원래 얇다', question3: '거의 그대로다' },

                                ]
                        }
                    ]
                }
            );

            db.collection('itemList').insert(
                {
                    items: [
                        { index: 'code1', skinType: '건성 타입', cleansing: '5.8마일드 클렌저', toner: '쥬얼리 토너', ample: 'R앰플', serum: '쥬얼리 에센스', eyecream: '네오 아이 블러썸', cream: '쥬얼리 크림', mask: '377 나노셀 마스크', sunblock: '인텐시브 선블럭', blemishbam: '닥터힐럭스 블래미쉬 밤', special: '화산재 크림', opt1: '워터 탱크 모이스춰 마스크', opt2: '미라클 펩타 볼륨' },
                        { index: 'code2', skinType: '민감성 타입', cleansing: '5.8마일드 클렌저', toner: '하이드라 리차지 스킨', ample: '콘센트레이트 앰플', serum: '리바이탈 라이즈 세럼', eyecream: '아이 블러썸', cream: '콤플렉스 크림', mask: '377 나노셀 마스크', sunblock: '인텐시브 선블럭', blemishbam: '닥터힐럭스 블래미쉬 밤', special: '화산재 크림', opt1: '라벤더 수딩 마스크', opt2: 'DX 마스크' },
                        { index: 'code3', skinType: '트러블 지성 타입', cleansing: '화이트 폼 클렌징', deepcleansing: '리페어 필링겔', toner: 'A.C 스킨', ample: 'A.C 앰플', serum: 'A.C 에센스', eyecream: '아이 블러썸', cream: 'A.C 크림', mask: '377 나노셀 마스크', sunblock: '인텐시브 선블럭', blemishbam: '닥터힐럭스 블래미쉬 밤', special: '화산재 크림', opt1: '라벤더 수딩 마스크', opt2: 'DX 마스크' },
                        { index: 'code4', skinType: '색소 성 타입', cleansing: '화이트 폼 클렌징', toner: '337 토너', ample: '337 앰플', serum: '337 에센스', eyecream: '아이 블러썸', cream: '337 크림', mask: '377 나노셀 마스크', sunblock: '인텐시브 선블럭', blemishbam: '닥터힐럭스 블래미쉬 밤', special: '화산재 크림', opt1: '미라클 펩타 볼륨', opt2: '화이트 라이어' },
                        { index: 'code5', skinType: '탄력 주름 타입', cleansing: '화이트 폼 클렌징', deepcleansing: '리페어 필링겔', toner: '미라클 펩타 볼륨', ample: '더 리프팅 R 프리미엄 앰플', serum: 'R 앰플', eyecream: '아이 블러썸', cream: 'R 크림', mask: '377 나노셀 마스크', sunblock: '인텐시브 선블럭', blemishbam: '닥터힐럭스 블래미쉬 밤', special: '화산재 크림', opt1: '펩타이드 EGF 마스크', opt2: '화이트 라이어' }
                    ]
                }
            );
            client.close();
        });

        return null;
    }
}


