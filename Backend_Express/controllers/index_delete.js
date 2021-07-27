const express = require('express');
const router = express.Router();

const QueryDatabaseDelete = require('../database/query/delete.js');

//---------------------GENRE-----------------------------//
router.get('/genre/:id', getBook = (req, res) => {
    print_url2(req.url);
    
    const id = req.params.id;
    QueryDatabaseDelete.deleteGenre(id).then(([reply]) => {
        res.status(200).json({
            message: 'DELETE genre ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------BOOK-----------------------------//
router.get('/books/:id', getBook = (req, res) => {
    print_url2(req.url);

    const id = req.params.id;
    QueryDatabaseDelete.deleteBook(id).then(([reply]) => {
        res.status(200).json({
            message: 'DELETE book ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-----------------------------//
router.get('/authors/:id', getAuthor = (req, res) => {
    print_url2(req.url);

    const id = req.params.id;
    QueryDatabaseDelete.deleteAuthor(id).then(([reply]) => {
        res.status(200).json({
            message: 'DELETE author ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-BOOK-----------------------------//
router.get('/authorsbooks/:id', getAuthorsBooks = (req, res) => {
    print_url2(req.url);

    const id = req.params.id;
    QueryDatabaseDelete.deleteAuthorsBooks(id).then(([reply]) => {
        res.status(200).json({
            message: 'DELETE authorsbooks ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});


//---------------------OTHER-----------------------------//
print_url2 = (req) => {
    console.log('\nGET: ', req);
};


// EXPORT 
module.exports = router;