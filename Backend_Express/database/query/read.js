// SQL connection
const db = require('../connection.js');

//1
exports.readSelectGenres = () => {
    console.log('DATABASE QUERY - readSelectGenres');
    return db.execute('SELECT * FROM genres;');
};
exports.readSelectGenresId = (id) => {
    console.log('DATABASE QUERY - readSelectGenresId ' + id);
    return db.execute('SELECT * FROM genres WHERE genre_id =' + id);
};

//2
exports.readSelectBooks = () => {
    console.log('DATABASE QUERY - readSelectBooks');
    return db.execute('SELECT * FROM books;');
};

exports.readSelectBooksId = (id) => {
    console.log('DATABASE QUERY - readSelectBooksId ' + id);
    return db.execute('SELECT * FROM books WHERE book_id =' + id);
};

//3
exports.readSelectAuthors = () => {
    console.log('DATABASE QUERY - readSelectAuthors');
    return db.execute('SELECT * FROM authors;');
};
exports.readSelectAuthorsId = (id) => {
    console.log('DATABASE QUERY - readSelectAuthorsId ' + id);
    return db.execute('SELECT * FROM authors WHERE author_id =' + id);
};

//4
exports.readSelectBooks_has_authors = () => {
    console.log('DATABASE QUERY - readAuthorsBooks');
    return db.execute('SELECT * FROM books_has_authors;');
};
exports.readSelectBooks_has_authors_books_id = (id) => {
    console.log('DATABASE QUERY - readSelectBooks_has_authors_books_id ' + id);
    return db.execute(`call select_many_book_id(${id});`);
};
exports.readSelectBooks_has_authors_authors_id = (id) => {
    console.log('DATABASE QUERY - readSelectBooks_has_authors_authors_id ' + id);
    return db.execute(`call select_many_author_id(${id});`);
};