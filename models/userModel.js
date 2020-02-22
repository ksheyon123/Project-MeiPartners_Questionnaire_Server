const mongoDB = require('../dbFunctions');
const userDB = require('../dbUser');
class Users {
    selectAll() {
        return new Promise(
            async (resolve, reject) => {
                try {
                    var sql = 'SELECT * FROM user';
                    var result = await userDB.query(sql);
                    resolve(result[0]);
                } catch (err) {
                    console.log(err);
                    reject(err)
                }
            }
        )
    }

    UserRegister(req) {
        return new Promise(
            async (resolve, reject) => {

                //회원가입된 전체 User 리스트 조회
                var userList = await this.selectAll();
                try {
                    //default flags = 0;, 데이터 문제 없음 
                    let flags = 0;

                    //password / passwordConfirm;, 패스워드 비교
                    if (req.body.password != req.body.passwordConfirm) {
                        flags = 1
                    }

                    //Database 내의 ID 중복 확인
                    for (const content of userList) {
                        if (content.user == req.body.user) {
                            flags = 2;
                        }
                    }
                    console.log(flags);
                    switch (flags) {
                        case 0:
                            //MySQL 유저 등록 프로세스
                            const sql = 'INSERT INTO user (user, password, name) values (?, ?, ?)';
                            await userDB.query(sql, [req.body.user, req.body.password, req.body.name]);

                            req.session.user = {
                                user: req.body.user,
                                name: req.body.name,
                            }
                            resolve(req.session.user);
                        case 1:
                            //패스워드 재확인 리턴
                            resolve({ success: false, msg: '패스워드를 확인해주세요' });
                            break;

                        //아이디 중복 리턴
                        case 2:
                            resolve({ success: false, msg: '이미 등록된 아이디입니다.' });
                            break;
                    }
                } catch (err) {
                    console.log(err)
                    reject(err);
                }
            }
        )
    }

    UserLogin(req) {
        var InsertedUser = req.body.user;
        var InsertedPassword = req.body.password;
        return new Promise(
            async (resolve, reject) => {
                try {
                    var getSQL = 'SELECT user, name, password FROM user WHERE user = ?';
                    var result = await userDB.query(getSQL, [InsertedUser]);
                    if (result[0].length == 0) {
                        resolve({success : false, msg : '해당 유저가 존재하지 않습니다.'});
                    } else {
                        if(InsertedPassword != result[0][0].password) {
                            resolve({success : false, msg : '비밀번호가 일치하지 않습니다'});
                        } else {
                            req.session.user = {
                                user : result[0][0].user,
                                name : result[0][0].name,
                            }
                            resolve(req.session.user);
                        }
                    }
                } catch (err) {
                    reject(err);
                }
            }
        )
    }
}

module.exports = new Users();