const express = require('express');
const router = express.Router();

const QueryDatabaseDelete = require('../database/query/delete.js');

//-1--------------------Genres-----------------------------//
router.delete('/genres/:id', deleteBooks = (req, res) => {
    print_url2(req.url);
    const id_genre = req.params.id_genre;
    
    QueryDatabaseDelete.deleteFromGenres(id_genre).then(([reply]) => {
        res.status(200).json({
            message: `DELETE Delete Genres id_genre:${id_genre}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//-2--------------------Books-----------------------------//
router.delete('/books/:id', deleteBooks = (req, res) => {
    print_url2(req.url);
    const id_book = req.params.id_book;

    QueryDatabaseDelete.deleteFromBooks(id_book).then(([reply]) => {
        res.status(200).json({
            message: `DELETE Delete Books id_book:${id_book}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//-3--------------------Authors-----------------------------//
router.delete('/authors/:id', deleteAuthors = (req, res) => {
    print_url2(req.url);
    const id_author = req.params.id_author;

    QueryDatabaseDelete.deleteFromAuthors(id_author).then(([reply]) => {
        res.status(200).json({
            message: `DELETE Delete Authors id_author:${id_author}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------Books_has_Authors-----------------------------//
router.delete('/books_has_authors', deleteBooks_has_authors = (req, res) => {
    print_url2(req.url);
    const id_book = req.body.id_book;
    const id_author = req.body.id_author;

    QueryDatabaseDelete.deleteFromBooks_has_authors(id_book, id_author).then(([reply]) => {
        res.status(200).json({
            message: `DELETE Delete Books_has_authors id_book:${id_book} id_author:${id_author}`,
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