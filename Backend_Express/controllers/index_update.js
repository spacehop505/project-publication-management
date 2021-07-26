const express = require('express');
const router = express.Router();

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const AuthorsBooks = require('../model/AuthorsBooks.js');

const QueryDatabaseUpdate = require('../database/query/update.js');

router.put('/genres/:id', updateGenre = (req, res) => {
    console.log('\nPUT: ', req.url);
    console.log(req.body);
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const genre_input = new Genre(id, name, description);

    QueryDatabaseUpdate.updateGenre(genre_input).then(([reply]) => {
        res.status(200).json({
            message: 'PUT',
            content: reply
        });
    }).catch(err => console.log(err));

})


router.put('/books/:id', updateBook = (req, res) => {
    console.log('\nPUT: ', req.url);
    console.log(req.body);
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const book_input = new Book(id, title, description, isbn, genre);
    console.log(book_input);

    QueryDatabaseUpdate.updateBook(book_input).then(([reply]) => {
        res.status(200).json({
            message: 'PUT',
            content: reply
        });
    }).catch(err => console.log(err));
});


router.put('/authors/:id', updateAuthor = (req, res) => {
    console.log('\nPUT: ', req.url);
    console.log(req.body);
    const id = req.params.id;
    const name = req.body.name;
    const bio = req.body.bio;

    const author_input = new Author(id, name, bio);
    console.log(author_input);

    QueryDatabaseUpdate.updateAuthor(author_input).then(([reply]) => {
        res.status(200).json({
            message: 'PUT',
            content: reply
        });
    }).catch(err => console.log(err));
});


router.put('/authorsbooks', updateAuthorBoooks = (req, res) => {
    console.log('\nPUT: ', req.url);
    console.log(req.body);

    const id = null;
    const pk_auther_id = req.body.pk_auther_id;
    const pk_book_id = req.body.pk_book_id;

    const authorbooks_input = new AuthorsBooks(id, pk_auther_id, pk_book_id);
    console.log(author_input);

    QueryDatabaseCreate.updateAuthorBoooks(authorbooks_input).then(([reply]) => {
        res.status(200).json({
            message: 'PUT',
            content: reply
        });
    }).catch(err => console.log(err));

});


// EXPORT 
module.exports = router;