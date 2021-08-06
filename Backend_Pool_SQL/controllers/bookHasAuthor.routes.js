const express = require('express');
const router = express.Router();
const pool = require("../database/connection-pool.js");

// --------------------------------------------------------------- CREATE
router.post('/book-has-author', async (req, res, next) => {
    console.log('\nLOG-POST:', req.originalUrl, req.body);
    try {
        const id_book = req.body.id_book;
        const id_author = req.body.id_author;
        await pool.query('INSERT INTO books_has_authors(many_book_id, many_author_id) VALUES(? ,?)', [id_book, id_author])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'POST',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- READ
router.get('/book-has-author', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        await pool.query("SELECT * FROM books_has_authors;")
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'GET',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});
// --------------------------------------------------------------- READ
router.get('/book-has-author/book/:id_book', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        const id_book = req.params.id_book;
        await pool.query('call select_many_book_by_id( ? );', [id_book])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'GET',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});
// --------------------------------------------------------------- READ
router.get('/book-has-author/author/:id_author', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        await pool.query('call select_many_author_by_id( ? );', [id_author])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'GET',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- UPDATE

// --------------------------------------------------------------- DELETE
router.delete('/book-has-author', async (req, res, next) => {
    console.log('\nLOG-DELETE:', req.originalUrl, req.body);
    try {
        const id_book = req.body.id_book;
        const id_author = req.body.id_author;
        await pool.query('DELETE FROM books_has_authors WHERE many_book_id=? AND many_author_id=? ', [id_book, id_author])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'DELETE',
                    content: rows
                });
            }).catch((err) => {
                console.log('LOG-ERROR: catch', err);
            });
    } catch (err) {
        console.log('LOG-ERROR-1: ', err);
        next();
    }
});

// --------------------------------------------------------------- EXPORT 
module.exports = router;