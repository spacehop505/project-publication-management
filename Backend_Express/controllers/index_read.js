const express = require('express');
const router = express.Router();

const QueryDatabaseRead = require('../database/query/read.js');

//---------------------GENRES-----------------------------//
router.get('/genres', getGenres = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readGenres().then(([reply]) => {
        res.status(200).json({
            message: 'GET genres',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/genres/:id', getGenres = (req, res) => {
    print_url3(req.url);

    const id = req.params.id;
    QueryDatabaseRead.readGenre(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET genres ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------BOOKS-----------------------------//
router.get('/books', getBooks = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readBooks().then(([reply]) => {
        //reply[0].book_id, reply[0].book_title, reply[0].book_description, reply[0].book_isbn
        res.status(200).json({
            message: 'GET books',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/books/:id', getBooks = (req, res) => {
    print_url3(req.url);

    const id = req.params.id;
    QueryDatabaseRead.readBook(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET books ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-----------------------------//
router.get('/authors', getAuthors = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readAuthors().then(([reply]) => {
        res.status(200).json({
            message: 'GET authors',
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/authors/:id', getAuthors = (req, res) => {
    print_url3(req.url);

    const id = req.params.id;
    QueryDatabaseRead.readAuthor(id).then(([reply]) => {
        res.status(200).json({
            message: 'GET authors ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------OTHER-----------------------------//
print_url3 = (req1) => {
    console.log('\nGET: ', req1);
};

// EXPORT 
module.exports = router;