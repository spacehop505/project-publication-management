// SQL connection
const db = require('../connection.js');

exports.deleteGenre = (id) => {
    console.log('DATABASE QUERY - deleteGenre ' + id);
    return db.execute('DELETE FROM genres WHERE genre_id=? ', [id]);
};

exports.deleteBook = (id) => {
    console.log('DATABASE QUERY - deleteBook ' + id);
    return db.execute('DELETE FROM books WHERE book_id=? ', [id]);
};

exports.deleteAuthor = (id) => {
    console.log('DATABASE QUERY - deleteAuthor ' + id);
    return db.execute('DELETE FROM authors WHERE author_id=? ', [id]);
};

exports.deleteAuthorsBooks = (id) => {
    console.log('DATABASE QUERY - deleteAuthorsBooks ' + id);
    return db.execute('DELETE FROM authors_books WHERE authors_book_ID=? ', [id]);
};