const mysql = require('mysql2');

// config
const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'books_2021',
    password: 'admin'
});

module.exports = pool.promise();