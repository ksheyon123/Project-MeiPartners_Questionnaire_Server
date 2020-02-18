const mongoDB = require('../dbConfig');
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

    UserRegister(data) {
        return new Promise (
            async (resolve, reject) => {
                console.log(data)
                var userList = await this.selectAll();
                console.log('User List', userList);
                try {
                    var sql = 'INSERT INTO user (user, name, password) values (? ,? ,?)';
                    await userDB.query(sql, [data.user, data.name, data.password]);
                    resolve(true);
                } catch (err) {
                    console.log(err)
                    reject(err);
                }
            }
        )
    }

    UserLogin(data) {
        return new Promise (
            async (resolve, reject) => {
                try {
                    var sql = 'SELECT * FROM user WHERE user = ?';
                    var result = await userDB.query(sql, [data.user]);
                    console.log(result[0][0])
                    if (result[0][0].password != data.password) {
                        resolve(false);
                    }
                    resolve(true);
                } catch (err) {
                    console.log(err)
                    reject(err);
                }
            }
        )
    }
}

module.exports = new Users();