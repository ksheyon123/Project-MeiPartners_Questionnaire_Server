const mongoDB = require('../dbFunctions');
const userDB = require('../dbUser');
class Users {
    selectAll () {
        return new Promise (
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
        return new Promise (
            async (resolve, reject) => {
                var userList = await this.selectAll();
                try {
                    let flags = 0;
                    for(const content of userList[0]) {
                        if(content.user == req.body.user) {
                            flags = 1;
                            break;
                        }
                    }

                    switch (flags) {
                        case 0 :
                            const sql = 'INSERT INTO user (user, password, name) values (?, ?, ?)';
                            await userDB.query(sql, [req.body.user, req.body.name, req.body.password]);

                            req.session.user = {
                                user : req.body.user,
                                name : req.body.name,
                            }
                            resolve(req.session.user);

                        case 1 :
                            resolve('중복된 아이디입니다.');
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
        return new Promise (
            async (resolve, reject) => {
                try {
                    var sql = 'SELECT * FROM user WHERE user = ? AND password = ?';
                    var result = await userDB.query(sql, [InsertedUser, InsertedPassword]);
                    req.session.user = {
                        user : result[0][0].user,
                        name : result[0][0].name,
                    }
                    resolve(req.session.user)
                } catch (err) {
                    reject(err);
                }
            }
        )
    }
}

module.exports = new Users();