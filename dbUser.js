const mysql = require('mysql2/promise');

var dbConfig = {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'lovu',
};

const pool = mysql.createPool(dbConfig);
module.exports = pool;