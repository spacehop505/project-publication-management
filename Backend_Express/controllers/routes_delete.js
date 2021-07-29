const express = require('express');
const router = express.Router();

// model queries
const Genre = require("../model_queries/Genre.js");
const Author = require("../model_queries/Author.js");
const BookHasAuthor = require("../model_queries/BookHasAuthor.js");
const Book = require("../model_queries/Book.js");

//-1--------------------Genres-----------------------------//
router.delete('/genres/:id_genre', deleteBooks = async (req, res, next) => {
    print_url_delete(req.originalUrl, req.body);
    try {
        const id_genre = req.params.id_genre;
        const [rows, fields] = await Genre.deleteById(id_genre);
        res.status(200).json({
            count: rows.length,
            message: `DELETE deleteById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-2--------------------Books-----------------------------//
router.delete('/books/:id_book', deleteBooks = async (req, res, next) => {
    print_url_delete(req.originalUrl, req.body);
    try {
        const id_book = req.params.id_book;
        const [rows, fields] = await Book.deleteById(id_book);
        res.status(200).json({
            count: rows.length,
            message: `DELETE deleteById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//-3--------------------Authors-----------------------------//
router.delete('/authors/:id_author', deleteAuthors = async (req, res, next) => {
    print_url_delete(req.originalUrl, req.body);
    try {
        const id_author = req.params.id_author;
        const [rows, fields] = await Author.deleteById(id_author);
        res.status(200).json({
            count: rows.length,
            message: `DELETE deleteById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//---------------------Books_has_Authors-----------------------------//
router.delete('/books_has_authors', deleteBooks_has_authors = async (req, res, next) => {
    print_url_delete(req.originalUrl, req.body);
    try {
        const id_book = req.body.id_book;
        const id_author = req.body.id_author;
        const [rows, fields] = await BookHasAuthor.deleteById(id_book, id_author);
        res.status(200).json({
            count: rows.length,
            message: `DELETE deleteById`,
            content: rows
        });
    } catch (error) {
        next(error);
    }
});

//---------------------OTHER-----------------------------//
print_url_delete = (url, body) => {
    console.log('\nDELETE:', url);
    console.log(body);
};
// EXPORT 
module.exports = router;