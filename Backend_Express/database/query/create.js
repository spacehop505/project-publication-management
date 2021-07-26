// SQL connection
const db = require('../connection.js');


exports.createBook = (book) => {
    return db.execute('INSERT INTO books VALUES(default, ?, ?, ?)',
        [book.title, book.description, book.isbn]);
};

exports.createAuthor = (author) => {
    return db.execute('INSERT INTO authors VALUES(default, ?, ?)',
        [author.name, author.bio]);
};

exports.createAuthorsBooks = (author_book) => {
    return db.execute('INSERT INTO authors_books VALUES(?, ?)',
        [author_book.author_id, author_book.books_id]);
};




