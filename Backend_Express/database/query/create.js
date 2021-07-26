// SQL connection
const db = require('../connection.js');

exports.createGenre = (genre) => {
    return db.execute('INSERT INTO genres VALUES(default, ? ,?)',
        [genre.name, genre.description]);
};

exports.createBook = (book) => {
    return db.execute('INSERT INTO books VALUES(default, ?, ?, ?, ?)',
        [book.title, book.description, book.isbn, book.genre]);
};

exports.createAuthor = (author) => {
    return db.execute('INSERT INTO authors VALUES(default, ?, ?)',
        [author.name, author.bio]);
};

exports.createAuthorsBooks = (author_book) => {
    return db.execute('INSERT INTO authors_books VALUES(?, ?)',
        [author_book.author_id, author_book.books_id]);
};