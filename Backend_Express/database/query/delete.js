// SQL connection
const db = require('../connection.js');

exports.deleteFromGenres = (id) => {
    console.log('DATABASE QUERY - deleteGenre ' + id);
    return db.execute('DELETE FROM genres WHERE genre_id=? ', [id]);
};

exports.deleteFromBooks = (id) => {
    console.log('DATABASE QUERY - deleteBook ' + id);
    return db.execute('DELETE FROM books WHERE book_id=? ', [id]);
};

exports.deleteFromAuthors = (id) => {
    console.log('DATABASE QUERY - deleteAuthor ' + id);
    return db.execute('DELETE FROM authors WHERE author_id=? ', [id]);
};

exports.deleteFromBooks_has_authors = (book_id, author_id) => {
    console.log('DATABASE QUERY - deleteBooks_has_Authors ' + book_id + ' ' + author_id);
    return db.execute('DELETE FROM books_has_authors WHERE many_book_id=? AND many_author_id=? ', [book_id, author_id]);
};