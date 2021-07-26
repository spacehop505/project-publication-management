// SQL connection
const db = require('../connection.js');


exports.updateBook = (book) => {
    console.log(book.title); 
    return db.execute('UPDATE books SET book_title=?, book_description=?, book_isbn=? WHERE book_id=?',
        [book.title, book.description, book.isbn, book.id]);
};

exports.updateAuthor = (author) => {
    return db.execute('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?',
        [author.name, author.bio, author.id]);
};