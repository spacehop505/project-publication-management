// SQL connection
const db = require('../connection.js');

exports.readGenres = () => {
    console.log('DATABASE QUERY - readGenres');
    return db.execute('SELECT * FROM genres;');
}

exports.readGenre = (id) => {
    console.log('DATABASE QUERY - readGenre ' + id);
    return db.execute('SELECT * FROM genres WHERE genre_id =' + id);
}

exports.readBooks = () => {
    console.log('DATABASE QUERY - readBooks');
    return db.execute('SELECT * FROM books;');
};

exports.readBook = (id) => {
    console.log('DATABASE QUERY - readBook ' + id);
    return db.execute('SELECT * FROM books WHERE book_id =' + id);
};

exports.readAuthors = () => {
    console.log('DATABASE QUERY - readAuthors');
    return db.execute('SELECT * FROM authors;');
};

exports.readAuthor = (id) => {
    console.log('DATABASE QUERY - readAuthor ' + id);
    return db.execute('SELECT * FROM authors WHERE author_id =' + id);
};

exports.readAuthorsBooks = () => {
    console.log('DATABASE QUERY - readAuthors');
    return db.execute('SELECT * FROM authors_books;');
};

exports.readAuthorsBooksid = (id) => {
    console.log('DATABASE QUERY - readAuthors ' + id);
    return db.execute('SELECT * FROM authors_books WHERE pk_auther_id =' + id);
};