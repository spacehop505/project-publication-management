const mysql = require('mysql2');

// config
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'books_2021',
    password: 'admin'
});

// promise() use .then().catch()
module.exports = pool.promise();