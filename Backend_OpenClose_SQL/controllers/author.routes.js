const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

// --------------------------------------------------------------- CREATE
router.post('/create', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-POST:', req.originalUrl, req.body, connection.stream.connecting);
    
    const name = req.body.name;
    const bio = req.body.bio;
    connection.promise().query('INSERT INTO authors(author_name, author_bio) VALUES(? ,?)', [name, bio])
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'POST',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        }).then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});
// --------------------------------------------------------------- READ
router.get('/read', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    connection.promise().query('SELECT * FROM authors;')
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'GET',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        }).then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});
// --------------------------------------------------------------- READ
router.get('/read/:id_author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);
   
    const id_author = req.params.id_author;
    connection.promise().query("SELECT * FROM authors WHERE author_id = ? ", [id_author])
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'GET',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        }).then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});
// --------------------------------------------------------------- UPDATE
router.put('/update/:id_author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-PUT:', req.originalUrl, req.body, connection.stream.connecting);

    const id_author = req.params.id_author;
    const name = req.body.name;
    const bio = req.body.bio;
    connection.promise().query('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?', [name, bio, id_author])
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'PUT',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        }).then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});
// --------------------------------------------------------------- DELETE
router.delete('/delete/:id_author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-DELETE:', req.originalUrl, req.body, connection.stream.connecting);

    const id_author = req.params.id_author;
    connection.promise().query('DELETE FROM authors WHERE author_id=? ', [id_author])
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'DELETE',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        }).then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});

// --------------------------------------------------------------- EXPORT 
module.exports = router;