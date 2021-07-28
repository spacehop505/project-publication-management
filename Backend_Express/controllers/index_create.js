const express = require('express');
const router = express.Router();

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const Books_has_Authors = require('../model/Books_has_Authors.js');

const QueryDatabaseCreate = require('../database/query/create.js');

//-1--------------------Genres-----------------------------//
router.post('/genres', postGenres = (req, res) => {
    print_url1(req.url, req.body);
    const name = req.body.name;
    const description = req.body.description;
    const class_genre = new Genre(null, name, description); // CLASS

    QueryDatabaseCreate.createInsertGenres(class_genre).then(([reply]) => {
        res.status(200).json({
            message: 'POST Insert Genres',
            content: reply
        })
    }).catch(err => console.log(err));

});

//-2--------------------Books-----------------------------//
router.post('/books', postBooks = (req, res) => {
    print_url1(req.url, req.body);
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const class_book = new Book(null, title, description, isbn, genre); // CLASS

    QueryDatabaseCreate.createInsertBooks(class_book).then(([reply]) => {
        res.status(200).json({
            message: 'POST Insert Books',
            content: reply
        });
    }).catch(err => console.log(err));
});

//-3--------------------Authors-----------------------------//
router.post('/authors', postAuthors = (req, res) => {
    print_url1(req.url, req.body);
    const name = req.body.name;
    const bio = req.body.bio;
    const class_author = new Author(null, name, bio); // CLASS

    QueryDatabaseCreate.createInsertAuthors(class_author).then(([reply]) => {
        res.status(200).json({
            message: 'POST Insert Authors',
            content: reply
        });
    }).catch(err => console.log(err));
});

//-4--------------------Books_has_Authors-----------------------------//
router.post('/books_has_authors', postBooks_has_Authors = (req, res) => {
    print_url1(req.url, req.body);
    const id_book = req.body.id_book;
    const id_auther = req.body.id_auther;
    const class_books_has_authors = new Books_has_Authors(id_book, id_auther); // CLASS

    QueryDatabaseCreate.createInsertBooks_has_authors(class_books_has_authors).then(([reply]) => {
        res.status(200).json({
            message: 'POST Insert Books_has_Authors',
            content: reply
        });
    }).catch(err => console.log(err));
});

//-5--------------------OTHER-----------------------------//
print_url1 = (url, body) => {
    console.log('\nPOST:', url);
    console.log(body);
};

// EXPORT 
module.exports = router;