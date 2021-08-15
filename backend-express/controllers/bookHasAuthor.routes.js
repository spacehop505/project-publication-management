const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

// --------------------------------------------------------------- CREATE
router.post('/book-has-author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-POST:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.body.id_book;
    const id_author = req.body.id_author;
    connection.promise().query('INSERT INTO books_has_authors(many_book_id, many_author_id) VALUES(? ,?)', [id_book, id_author])
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
router.get('/book-has-author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    connection.promise().query("SELECT * FROM select_many_book_id;")
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
router.get('/book-has-author/book/:id_book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.params.id_book;
    connection.promise().query('call select_many_book_by_id( ? );', [id_book])
        .then(([rows, fields]) => {
            res.status(200).json({
                count: rows.length,
                status: 'success',
                message: 'GET',
                content: rows
            });
        }).catch((err) => {
            console.log('LOG-ERROR: catch', err);
        })
        .then(() => {
            connection.end();
            console.log('LOG-TEST: connection.end()', connection.stream.connecting);
        });
});
// --------------------------------------------------------------- READ
router.get('/book-has-author/author/:id_author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    const id_author = req.params.id_author;
    connection.promise().query('call select_many_author_by_id( ? );', [id_author])
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
router.put('/book-has-author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-DELETE:', req.originalUrl, req.body, connection.stream.connecting);

    const old_id_book = req.body.old_many_book_id;
    const old_id_author = req.body.old_many_author_id;
    const new_id_book = req.body.many_book_id;
    const new_id_author = req.body.many_author_id;
    connection.promise().query('UPDATE books_has_authors SET many_book_id=?, many_author_id=? WHERE many_book_id=? AND many_author_id=? ', [new_id_book, new_id_author, old_id_book, old_id_author])
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
router.delete('/book-has-author', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-DELETE:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.body.many_book_id;
    const id_author = req.body.many_author_id;
    connection.promise().query('DELETE FROM books_has_authors WHERE many_book_id=? AND many_author_id=? ', [id_book, id_author])
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