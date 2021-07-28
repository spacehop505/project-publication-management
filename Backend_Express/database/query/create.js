// SQL connection
const db = require('../connection.js');

exports.createInsertGenres = (genre) => {
    console.log('DATABASE QUERY - createGenre ');
    return db.execute('INSERT INTO genres VALUES(default, ? ,?)',
        [genre.name, genre.description]);
};

exports.createInsertBooks = (book) => {
    console.log('DATABASE QUERY - createBook ');
    return db.execute('INSERT INTO books VALUES(default, ?, ?, ?, ?)',
        [book.title, book.description, book.isbn, book.genre]);
};

exports.createInsertAuthors = (author) => {
    console.log('DATABASE QUERY - createAuthor ');
    return db.execute('INSERT INTO authors VALUES(default, ?, ?)',
        [author.name, author.bio]);
};

exports.createInsertBooks_has_authors = (author_book) => {
    console.log('DATABASE QUERY - createAuthorsBooks ');
    return db.execute('INSERT INTO books_has_authors VALUES(?, ?)',
        [author_book.author_id, author_book.books_id]);
};