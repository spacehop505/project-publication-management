const express = require('express');
const router = express.Router();
const pool = require("../database/connection-pool.js");

// --------------------------------------------------------------- CREATE
router.post('/author', async (req, res, next) => {
    console.log('\nLOG-POST:', req.originalUrl, req.body);
    try {
        const name = req.body.name;
        const bio = req.body.bio;
        await pool.query('INSERT INTO authors(author_name, author_bio) VALUES(? ,?)', [name, bio])
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
router.get('/author', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        await pool.query('SELECT * FROM authors;')
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
router.get('/author/:id_author', async (req, res, next) => {
    console.log('\nLOG-GET:', req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        await pool.query("SELECT * FROM authors WHERE author_id = ? ", [id_author])
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
router.put('/author/:id_author', async (req, res, next) => {
    console.log('\nLOG-PUT:', req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        const name = req.body.name;
        const bio = req.body.bio;
        await pool.query('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?', [name, bio, id_author])
            .then(([rows, fields]) => {
                res.status(200).json({
                    count: rows.length,
                    status: 'success',
                    message: 'PUT',
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
// --------------------------------------------------------------- DELETE
router.delete('/author/:id_author', async (req, res, next) => {
    console.log('\nLOG-DELETE:', req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        await pool.query('DELETE FROM authors WHERE author_id=? ', [id_author])
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