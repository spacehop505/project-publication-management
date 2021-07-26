// SQL connection
const db = require('../connection.js');


exports.readBooks = () => {
    console.log('query readBooks');
    return db.execute('SELECT * FROM books;');
};

exports.readBook = (id) => {
    console.log('query readBook ' + id);
    return db.execute('SELECT * FROM books WHERE book_id =' + id);
};

exports.readAuthors = () => {
    console.log('query readAuthors');
    return db.execute('SELECT * FROM authors;');
};

exports.readAuthor = (id) => {
    console.log('query readAuthor ' + id);
    return db.execute('SELECT * FROM authors WHERE author_id =' + id);
};






