const express = require('express');
const router = express.Router();
const pool = require("../database/connection-pool.js");

// --------------------------------------------------------------- CREATE
router.post('/create', async (req, res, next) => {
    console.log('\nLOG-POST:', req.originalUrl, req.body);
    try {
        const {
            title,
            description,
            isbn,
            genre
        } = req.body;

        await pool.query('INSERT INTO books(book_title, book_description, book_isbn, book_genre_id) VALUES(? ,?,?,?)', [title, description, isbn, genre])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'POST',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR-0: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- READ
router.get('/read', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        await pool.query("SELECT * FROM books;")
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'GET',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR-0: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- READ
router.get('/read/:id_book', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);

    try {
        const id_book = req.params.id_book;
        await pool.query("SELECT * FROM books WHERE book_id =?", [id_book])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'GET',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR-0: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- UPDATE
router.put('/update/:id_book', async (req, res, next) => {
    console.log('\nLOG-PUT:', req.originalUrl, req.body);
    try {
        const id_book = req.params.id_book;
        const {
            title,
            description,
            isbn,
            genre
        } = req.body;
        await pool.query('UPDATE books SET book_title=?, book_description=?, book_isbn=?, book_genre_id=? WHERE book_id=?', [title, description, isbn, genre, id_book])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'PUT',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR-0: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- DELETE
router.delete('/delete/:id_book', async (req, res, next) => {
    console.log('\nLOG-DELETE:', req.originalUrl, req.body);
    try {
        const id_book = req.params.id_book;
        await pool.query('DELETE FROM books WHERE book_id=? ', [id_book])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'DELETE',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR-0: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- EXPORT 
module.exports = router;