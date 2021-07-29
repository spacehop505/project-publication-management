const db = require("../database/connection.js");

class Book {
    static createBook(title, description, isbn, genre) {
        return db.execute('INSERT INTO books(book_title, book_description, book_isbn, book_genre_id) VALUES(? ,?,?,?)', [title, description, isbn, genre]);
    }

    static updateById(id_book, title, description, isbn, genre) {
        return db.execute('UPDATE books SET book_title=?, book_description=?, book_isbn=?, book_genre_id=? WHERE book_id=?', [title, description, isbn, genre, id_book]);
    }

    static deleteById(id_book) {
        return db.execute('DELETE FROM books WHERE book_id=? ', [id_book]);
    }

    static findAll() {
        return db.execute("SELECT * FROM books;");
    }

    static findById(id_book) {
        return db.execute("SELECT * FROM books WHERE book_id =?", [id_book]);
    }
}

module.exports = Book;