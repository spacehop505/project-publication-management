const db = require("../database/connection.js");

class Author {
    static createAuthor(name, bio) {
        return db.execute('INSERT INTO authors(author_name, author_bio) VALUES(? ,?)', [name, bio]);
    }

    static updateById(id_author, name, bio) {
        return db.execute('UPDATE authors SET author_name=?, author_bio=? WHERE author_id=?', [name, bio, id_author]);
    }

    static deleteById(id_author) {
        return db.execute('DELETE FROM authors WHERE author_id=? ', [id_author]);
    }

    static findAll() {
        return db.execute("SELECT * FROM authors;");
    }

    static findById(id_author) {
        return db.execute("SELECT * FROM authors WHERE author_id = ? ", [id_author]);
    }
}

module.exports = Author;