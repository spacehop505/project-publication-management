// SQL connection
const db = require('../connection.js');

exports.updateGenre = (genre) => {
    return db.execute('UPDATE genres SET genre_name=?, genre_description=? WHERE genre_id=?',
        [genre.name, genre.description, genre.id])
};

exports.updateBook = (book) => {
    console.log(book.title);
    return db.execute('UPDATE books SET book_title=?, book_description=?, book_isbn=?, genres_genre_id=? WHERE book_id=?',
        [book.title, book.description, book.isbn,book.genre, book.id]);
};

exports.updateAuthor = (author) => {
    return db.execute('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?',
        [author.name, author.bio, author.id]);
};