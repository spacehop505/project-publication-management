const express = require('express');
const router = express.Router();

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const AuthorsBooks = require('../model/AuthorsBooks.js');

const QueryDatabaseUpdate = require('../database/query/update.js');

//---------------------GENRE-----------------------------//
router.put('/genres/:id', putGenre = (req, res) => {
    print_url4(req.url, req.body);

    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const genre_class = new Genre(id, name, description); // CLASS

    QueryDatabaseUpdate.updateGenre(genre_class).then(([reply]) => {
        res.status(200).json({
            message: 'PUT genres '+ id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------BOOK-----------------------------//
router.put('/books/:id', putBook = (req, res) => {
    print_url4(req.url, req.body);
    
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    const isbn = req.body.isbn;
    const genre = req.body.genre;
    const book_class = new Book(id, title, description, isbn, genre); // CLASS

    QueryDatabaseUpdate.updateBook(book_class).then(([reply]) => {
        res.status(200).json({
            message: 'PUT books ' + id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHOR-----------------------------//
router.put('/authors/:id', putAuthor = (req, res) => {
    print_url4(req.url, req.body);

    const id = req.params.id;
    const name = req.body.name;
    const bio = req.body.bio;
    const author_class = new Author(id, name, bio); // CLASS

    QueryDatabaseUpdate.updateAuthor(author_class).then(([reply]) => {
        res.status(200).json({
            message: 'PUT authors '+ id,
            content: reply
        });
    }).catch(err => console.log(err));
});

//---------------------AUTHORS-BOOKS-----------------------------//
router.put('/authorsbooks', putAuthorBoooks = (req, res) => {
    print_url4(req.url, req.body);

    const id = null;
    const pk_auther_id = req.body.pk_auther_id;
    const pk_book_id = req.body.pk_book_id;
    const authorbooks_class = new AuthorsBooks(id, pk_auther_id, pk_book_id); // CLASS

    QueryDatabaseCreate.updateAuthorBoooks(authorbooks_class).then(([reply]) => {
        res.status(200).json({
            message: 'PUT authorsbooks',
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