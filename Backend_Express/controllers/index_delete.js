const express = require('express');
const router = express.Router();



const QueryDatabaseDelete = require('../database/query/delete.js');


router.get('/books/:id', getBook = (req, res) => {
    console.log('\nGET: ', req.url);
    const id = req.params.id;

    QueryDatabaseDelete.deleteBook(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/authors/:id', getAuthor = (req, res) => {
    console.log('\nGET: ', req.url);
    const id = req.params.id;

    QueryDatabaseDelete.deleteAuthor(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});



// EXPORT 
module.exports = router;