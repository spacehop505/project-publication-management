const mysql = require('mysql2');

// config
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database: 'books_2021',
    password: 'admin'
});

module.exports = pool.promise();