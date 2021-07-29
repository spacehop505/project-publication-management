const express = require('express');
const router = express.Router();

// model queries
const Genre = require("../model_queries/Genre.js");
const Author = require("../model_queries/Author.js");
const BookHasAuthor = require("../model_queries/BookHasAuthor.js");
const Book = require("../model_queries/Book.js");

//-1--------------------Genres-----------------------------//
router.get('/genres', getGenres = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const [rows, fields] = await Genre.findAll();
        res.status(200).json({
            count: rows.length,
            message: `GET findAll`,
            content: rows
        });
    } catch (error) {
        next(error);
    };
});

router.get('/genres/:id_genre', getGenres = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const id_genre = req.params.id_genre;
        const [rows, fields] = await Genre.findById(id_genre);
        res.status(200).json({
            count: rows.length,
            message: `GET findById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-2--------------------Books-----------------------------//
router.get('/books', getBooks = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const [rows, fields] = await Book.findAll();
        res.status(200).json({
            count: rows.length,
            message: `GET findAll`,
            content: rows
        });
    } catch (error) {
        next(error);
    };
});

router.get('/books/:id_book', getBooks = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const id_book = req.params.id_book;
        const [rows, fields] = await Book.findById(id_book);
        res.status(200).json({
            count: rows.length,
            message: `GET findById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-3--------------------Authors-----------------------------//
router.get('/authors', getAuthors = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const [rows, fields] = await Author.findAll();
        res.status(200).json({
            count: rows.length,
            message: `GET findAll`,
            content: rows
        });
    } catch (error) {
        next(error);
    };
});

router.get('/authors/:id_author', getAuthors = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const id_author = req.params.id_author;
        const [rows, fields] = await Author.findById(id_author);
        res.status(200).json({
            count: rows.length,
            message: `GET findById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-4--------------------Books_has_authors-----------------------------//
router.get('/books_has_authors', getBooks_has_authors = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const [rows, fields] = await BookHasAuthor.findAll();
        res.status(200).json({
            count: rows.length,
            message: `GET findAll`,
            content: rows
        });
    } catch (error) {
        next(error);
    };
});

router.get('/books_has_authors/book/:id_book', getBooks_has_authors = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const id_book = req.params.id_book;
        const [rows, fields] = await BookHasAuthor.findByBookId(id_book);
        res.status(200).json({
            count: rows.length,
            message: `GET findByBookId`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

router.get('/books_has_authors/author/:id_author', getBooks_has_authors = async (req, res, next) => {
    print_url_get(req.originalUrl);
    try {
        const id_author = req.params.id_author;
        const [rows, fields] = await BookHasAuthor.findByAuthorId(id_author);
        res.status(200).json({
            count: rows.length,
            message: `GET findByAuthorId`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});



//---------------------OTHER-----------------------------//
print_url_get = (url) => {
    console.log('\nGET:', url);
};

// EXPORT 
module.exports = router;