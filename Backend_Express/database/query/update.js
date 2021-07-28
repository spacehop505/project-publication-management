// SQL connection
const db = require('../connection.js');

exports.updateGenre = (genre) => {
    console.log('DATABASE QUERY - updateGenre ');
    return db.execute('UPDATE genres SET genre_name=?, genre_description=? WHERE genre_id=?',
        [genre.name, genre.description, genre.id])
};

exports.updateBook = (book) => {
    console.log('DATABASE QUERY - updateBook ');
    return db.execute('UPDATE books SET book_title=?, book_description=?, book_isbn=?, book_genre_id=? WHERE book_id=?',
        [book.title, book.description, book.isbn, book.genre, book.id]);
};

exports.updateAuthor = (author) => {
    console.log('DATABASE QUERY - updateAuthor ');
    return db.execute('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?',
        [author.name, author.bio, author.id]);
};

exports.updateAuthorBook = (author_book) => {
    console.log('DATABASE QUERY - updateAuthorBook ');
    return db.execute('UPDATE authors_books SET authors_author_id=?, books_book_id=? WHERE authors_book_ID=?',
        [author_book.author_id, author_book.books_id, author_book.id]);
};