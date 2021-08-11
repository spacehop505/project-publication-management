const express = require('express');
const router = express.Router();

const mysql = require('mysql2');

// --------------------------------------------------------------- CREATE
router.post('/book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-POST:', req.originalUrl, req.body, connection.stream.connecting);

    const {
        title,
        description,
        isbn,
        genre
    } = req.body;

    connection.promise().query('INSERT INTO books(book_title, book_description, book_isbn, book_genre_id) VALUES(? ,?,?,?)', [title, description, isbn, genre])
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
router.get('/book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    connection.promise().query("SELECT * FROM select_book_genre;")
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
router.get('/book/:id_book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.params.id_book;
    connection.promise().query("SELECT * FROM books WHERE book_id =?", [id_book])
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
router.put('/book/:id_book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-PUT:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.params.id_book;
    const {
        title,
        description,
        isbn,
        genre
    } = req.body;
    connection.promise().query('UPDATE books SET book_title=?, book_description=?, book_isbn=?, book_genre_id=? WHERE book_id=?', [title, description, isbn, genre, id_book])
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
router.delete('/book/:id_book', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-DELETE:', req.originalUrl, req.body, connection.stream.connecting);

    const id_book = req.params.id_book;
    connection.promise().query('DELETE FROM books WHERE book_id=? ', [id_book])
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