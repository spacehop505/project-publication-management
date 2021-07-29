const express = require('express');
const router = express.Router();

// model queries
const Genre = require("../model_queries/Genre.js");
const Author = require("../model_queries/Author.js");
const BookHasAuthor = require("../model_queries/BookHasAuthor.js");
const Book = require("../model_queries/Book.js");

//---------------------GENRE-----------------------------//
router.put('/genres/:id_genre', putGenres = async (req, res, next) => {
    print_url_put(req.originalUrl, req.body);
    try {
        const id_genre = req.params.id_genre;
        const name = req.body.name;
        const description = req.body.description;

        const [rows, fields] = await Genre.updateById(id_genre, name, description);
        res.status(200).json({
            count: rows.length,
            message: `PUT updateById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//---------------------BOOK-----------------------------//
router.put('/books/:id_book', putBooks = async (req, res, next) => {
    print_url_put(req.originalUrl, req.body);
    try {
        const id_book = req.params.id_book;
        const title = req.body.title;
        const description = req.body.description;
        const isbn = req.body.isbn;
        const genre = req.body.genre;

        const [rows, fields] = await Book.updateById(id_book, title, description,isbn,genre);
        res.status(200).json({
            count: rows.length,
            message: `PUT updateById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//---------------------AUTHOR-----------------------------//
router.put('/authors/:id_author', putAuthors = async (req, res, next) => {
    print_url_put(req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        const name = req.body.name;
        const bio = req.body.bio;

        const [rows, fields] = await Author.updateById(id_author, name, bio);
        res.status(200).json({
            count: rows.length,
            message: `PUT updateById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//---------------------OTHER-----------------------------//
print_url_put = (url, body) => {
    console.log('\nPUT:', url);
    console.log(body);
}

// EXPORT 
module.exports = router;