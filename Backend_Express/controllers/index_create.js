const express = require('express');
const router = express.Router();

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const AuthorsBooks = require('../model/AuthorsBooks.js');

const QueryDatabaseCreate = require('../database/query/create.js');


//---------------------GENRE-----------------------------//
router.post('/genre', postGenre = (req, res) => {
    print_url1(req.url, req.body);

    const id = null;
    const name = req.body.name;
    const description = req.body.description;
    const genre_input = new Genre(id, name, description); // CLASS

    QueryDatabaseCreate.createGenre(genre_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST genre',
            content: reply
        })
    }).catch(err => console.log(err));

});

//---------------------BOOK-----------------------------//
router.post('/book', postBook = (req, res) => {
    print_url1(req.url, req.body);

    const id = null;
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const book_input = new Book(id, title, description, isbn, genre); // CLASS

    QueryDatabaseCreate.createBook(book_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST book',
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-----------------------------//
router.post('/author', postAuthor = (req, res) => {
    print_url1(req.url, req.body);

    const id = null;
    const name = req.body.name;
    const bio = req.body.bio;
    const author_input = new Author(id, name, bio); // CLASS

    QueryDatabaseCreate.createAuthor(author_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST author',
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-BOOKS-----------------------------//
router.post('/authorsbooks', postAuthorBoooks = (req, res) => {
    print_url1(req.url, req.body);

    const id = null;
    const pk_auther_id = req.body.pk_auther_id;
    const pk_book_id = req.body.pk_book_id;
    const authorbooks_input = new AuthorsBooks(id, pk_auther_id, pk_book_id); // CLASS

    QueryDatabaseCreate.createAuthorsBooks(authorbooks_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST authorsbooks',
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------OTHER-----------------------------//
print_url1 = (url, body) => {
    console.log('\nPOST:', url);
    console.log(body);
};


// EXPORT 
module.exports = router;