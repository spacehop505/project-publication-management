// SQL connection
const db = require('../connection.js');


exports.deleteBook = (id) => {
    return db.execute('DELETE FROM books WHERE book_id=? ', [id]);
};

exports.deleteAuthor = (id) => {
    return db.execute('DELETE FROM authors WHERE author_id=? ', [id]);
};





