const express = require('express');
const router = express.Router();

const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const AuthorsBooks = require('../model/AuthorsBooks.js');

const QueryDatabaseCreate = require('../database/query/create.js');

router.post('/book', createBook = (req, res) => {
    console.log('\nPOST: ', req.url);

    console.log(req.body);
    const id = null;
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;

    const book_input = new Book(id, title, description, isbn);
    console.log(book_input);

    QueryDatabaseCreate.createBook(book_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST',
            content: reply
        });
    }).catch(err => console.log(err));
});


router.post('/author', createAuthor = (req, res) => {
    console.log('\nPOST: ', req.url);

    console.log(req.body);
    const id = null;
    const name = req.body.name;
    const bio = req.body.bio;

    const author_input = new Author(id, name, bio);
    console.log(author_input);

    QueryDatabaseCreate.createAuthor(author_input).then(([reply]) => {
        res.status(200).json({
            message: 'POST',
            content: reply
        });
    }).catch(err => console.log(err));
});





// EXPORT 
module.exports = router;