const express = require('express');
const router = express.Router();

const QueryDatabaseRead = require('../database/query/read.js');

//-1--------------------Genres-----------------------------//
router.get('/genres', getGenres = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readSelectGenres().then(([reply]) => {
        res.status(200).json({
            message: `GET Select Genre`,
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/genres/:id', getGenres = (req, res) => {
    print_url3(req.url);

    const id_genre = req.params.id_genre;
    QueryDatabaseRead.readSelectGenresId(id_genre).then(([reply]) => {
        res.status(200).json({
            message: `GET Select Genre id_genre:${id_genre}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//-2--------------------Books-----------------------------//
router.get('/books', getBooks = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readSelectBooks().then(([reply]) => {
        //reply[0].book_id, reply[0].book_title, reply[0].book_description, reply[0].book_isbn
        res.status(200).json({
            message: `GET Select Books`,
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/books/:id', getBooks = (req, res) => {
    print_url3(req.url);

    const id_book = req.params.id_book;
    QueryDatabaseRead.readSelectBooksId(id_book).then(([reply]) => {
        res.status(200).json({
            message: `GET Select Books id_book:${id_book}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//-3--------------------Authors-----------------------------//
router.get('/authors', getAuthors = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readSelectAuthors().then(([reply]) => {
        res.status(200).json({
            message: `GET Select Authors`,
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/authors/:id', getAuthors = (req, res) => {
    print_url3(req.url);

    const id_author = req.params.id;
    QueryDatabaseRead.readSelectAuthorsId(id_author).then(([reply]) => {
        res.status(200).json({
            message: `GET Select Authors id_author:${id_author}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

//-4--------------------Books_has_authors-----------------------------//
router.get('/books_has_authors', getBooks_has_authors = (req, res) => {
    print_url3(req.url);

    QueryDatabaseRead.readSelectBooks_has_authors().then(([reply]) => {
        res.status(200).json({
            message: `GET Select Books_has_Authors`,
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/books_has_authors/book/:id', getBooks_has_authors = (req, res) => {
    print_url3(req.url);

    const id_book = req.params.id_book;
    QueryDatabaseRead.readSelectBooks_has_authors_books_id(id_book).then(([reply]) => {
        res.status(200).json({
            message: `GET Select Books_has_Authors id_book:${id_book}`,
            content: reply
        });
    }).catch(err => console.log(err));
});

router.get('/books_has_authors/author/:id', getBooks_has_authors = (req, res) => {
    print_url3(req.url);

    const id_author = req.params.id_author;
    QueryDatabaseRead.readSelectBooks_has_authors_authors_id(id_author).then(([reply]) => {
        res.status(200).json({
            message: `GET Select Books_has_Authors id_author:${id_author}`,
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