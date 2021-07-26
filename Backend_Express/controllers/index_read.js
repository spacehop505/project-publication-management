const express = require('express');
const router = express.Router();

const QueryDatabaseRead = require('../database/query/read.js');




router.get('/books', getBooks = (req, res) => {
    console.log('\nGET: ', req.url);

    QueryDatabaseRead.readBooks().then(([reply]) => {
        console.log(reply[0].book_id);
        console.log(reply[0].book_title);
        console.log(reply[0].book_description);
        console.log(reply[0].book_isbn);
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/books/:id', getBook = (req, res) => {
    console.log('\nGET: ', req.url);
    const id = req.params.id;

    QueryDatabaseRead.readBook(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});


router.get('/authors', getAuthors = (req, res) => {
    console.log('\nGET: ', req.url);

    QueryDatabaseRead.readAuthors().then(([reply]) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/authors/:id', getAuthor = (req, res) => {
    console.log('\nGET: ', req.url);
    const id = req.params.id;

    QueryDatabaseRead.readAuthor(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET',
            content: reply
        });
    }).catch(err => console.log(err));
});



// EXPORT 
module.exports = router;