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

    const {
        name,
        description
    } = req.body;
    connection.promise().query('INSERT INTO genres(genre_name, genre_description) VALUES(? ,?)', [name, description])
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

    connection.promise().query("SELECT * FROM genres;")
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
router.get('/read/:id_genre', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-GET:', req.originalUrl, req.body, connection.stream.connecting);

    const id_genre = req.params.id_genre;
    connection.promise().query("SELECT * FROM genres WHERE genre_id =?", [id_genre])
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
router.put('/update/:id_genre', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-PUT:', req.originalUrl, req.body, connection.stream.connecting);

    const id_genre = req.params.id_genre;
    const name = req.body.name;
    const description = req.body.description;
    connection.promise().query('UPDATE genres SET genre_name=?, genre_description=? WHERE genre_id=?', [name, description, id_genre])
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
router.delete('/delete/:id_genre', (req, res, next) => {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'books_2021',
        password: 'admin'
    });
    console.log('\nLOG-DELETE:', req.originalUrl, req.body, connection.stream.connecting);
    
    const id_genre = req.params.id_genre;
    connection.promise().query('DELETE FROM genres WHERE genre_id=? ', [id_genre])
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