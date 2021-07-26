// SQL connection
const db = require('../connection.js');

exports.readGenres = () => {
    console.log('query readGenres');
    return db.execute('SELECT * FROM genres;');
}

exports.readGenre = (id) => {
    console.log('query readGenre' + id);
    return db.execute('SELECT * FROM genres WHERE genre_id =' + id);
}

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

exports.readAuthorsBooks = () => {
    console.log('query readAuthors');
    return db.execute('SELECT * FROM authors_books;');
};

exports.readAuthorsBooksid = (id) => {
    console.log('query readAuthors');
    return db.execute('SELECT * FROM authors_books WHERE pk_auther_id =' + id);
};