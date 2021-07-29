const express = require('express');
const router = express.Router();

// model queries
const Genre = require("../model_queries/Genre.js");
const Author = require("../model_queries/Author.js");
const BookHasAuthor = require("../model_queries/BookHasAuthor.js");
const Book = require("../model_queries/Book.js");

//-1--------------------Genres-----------------------------//
router.post('/genres', postGenres = async (req, res,next) => {
    print_url_post(req.originalUrl, req.body);
    try {
        const name = req.body.name;
        const description = req.body.description;

        const [rows, fields] = await Genre.createGenre(name, description);
        res.status(200).json({
            count: rows.length,
            message: `POST createGenre`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-2--------------------Books-----------------------------//
router.post('/books', postBooks = async (req, res,next) => {
    print_url_post(req.originalUrl, req.body);
    try {
        const title = req.body.title;
        const description = req.body.description;
        const isbn = req.body.isbn;
        const genre = req.body.genre;

        const [rows, fields] = await Book.createBook(title, description, isbn, genre);
        res.status(200).json({
            count: rows.length,
            message: `POST createBook`,
            content: rows
        });
    } catch (error) {
        res.status(500).json({
            message: `failed`,
        });
        next(error);
    }
});

//-3--------------------Authors-----------------------------//
router.post('/authors', postAuthors = async (req, res, next) => {
    print_url_post(req.originalUrl, req.body);
    try {
        const name = req.body.name;
        const bio = req.body.bio;

        const [rows, fields] = await Author.createAuthor(name, bio);
        res.status(200).json({
            count: rows.length,
            message: `POST createAuthor`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-4--------------------Books_has_Authors-----------------------------//
router.post('/books_has_authors', postBooks_has_Authors = async (req, res,next) => {
    print_url_post(req.originalUrl, req.body);
    try {
        const id_book = req.body.id_book;
        const id_auther = req.body.id_auther;

        const [rows, fields] = await BookHasAuthor.createBookHasAuthor(id_book, id_auther);
        res.status(200).json({
            count: rows.length,
            message: `POST createBookHasAuthor`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-5--------------------OTHER-----------------------------//
print_url_post = (url, body) => {
    console.log('\nPOST:', url);
    console.log(body);
};

// EXPORT 
module.exports = router;