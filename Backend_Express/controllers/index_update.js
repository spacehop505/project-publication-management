const express = require('express');
const router = express.Router();

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const Books_has_Authors = require('../model/Books_has_Authors.js');

const QueryDatabaseUpdate = require('../database/query/update.js');

//---------------------GENRE-----------------------------//
router.put('/genres/:id', putGenres = (req, res) => {
    print_url4(req.url, req.body);
    const id_genre = req.params.id_genre;
    const name = req.body.name;
    const description = req.body.description;
    const class_genre = new Genre(id_genre, name, description); // CLASS

    QueryDatabaseUpdate.updateGenre(class_genre).then(([reply]) => {
        res.status(200).json({
            message: `PUT Update Genres id_genre:${id_book}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------BOOK-----------------------------//
router.put('/books/:id', putBooks = (req, res) => {
    print_url4(req.url, req.body);
    const id_book = req.params.id_book;
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const class_book = new Book(id_book, title, description, isbn, genre); // CLASS

    QueryDatabaseUpdate.updateBook(class_book).then(([reply]) => {
        res.status(200).json({
            message: `PUT Update Books id_book:${id_book}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-----------------------------//
router.put('/authors/:id', putAuthors = (req, res) => {
    print_url4(req.url, req.body);
    const id_author = req.params.id_author;
    const name = req.body.name;
    const bio = req.body.bio;
    const class_author = new Author(id_author, name, bio); // CLASS

    QueryDatabaseUpdate.updateAuthor(class_author).then(([reply]) => {
        res.status(200).json({
            message: `PUT Update Authors id_author:${id_author}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------Books_has_Authors-----------------------------//
router.put('/books_has_authors', putBooks_has_Authors = (req, res) => {
    print_url4(req.url, req.body);
    const id_book = req.body.id_book;
    const id_author = req.body.id_author;
    const class_books_has_authors = new Books_has_Authors(id_book, id_author); // CLASS

    QueryDatabaseUpdate.updateAuthorBook(class_books_has_authors).then(([reply]) => {
        res.status(200).json({
            message: `PUT Update Books_has_authors id_book:${id_book} id_author:${id_author}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------OTHER-----------------------------//
print_url4 = (url, body) => {
    console.log('\nPUT:', url);
    console.log(body);
}

// EXPORT 
module.exports = router;