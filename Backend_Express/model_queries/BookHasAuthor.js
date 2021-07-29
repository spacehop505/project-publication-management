const db = require("../database/connection.js");

class BookHasAuthor {
    static createBookHasAuthor(book_id, author_id) {
        return db.execute('INSERT INTO books_has_authors(many_book_id, many_author_id) VALUES(? ,?)', [book_id, author_id]);
    }

    // static updateById(books_id, author_id) { }

    static deleteById(book_id, author_id) {
        return db.execute('DELETE FROM books_has_authors WHERE many_book_id=? AND many_author_id=? ', [book_id, author_id]);
    }

    static findAll() {
        return db.execute("SELECT * FROM books_has_authors;");
    }

    static findByBookId(book_id) {
        return db.execute('call select_many_book_by_id( ? );', [book_id]);
    }


    static findByAuthorId(author_id) {
        return db.execute('call select_many_author_by_id( ? );', [author_id]);
    }
}

module.exports = BookHasAuthor;