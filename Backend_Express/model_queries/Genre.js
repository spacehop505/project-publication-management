const db = require("../database/connection.js");

class Genre {
  static createGenre(name, description) {
    return db.execute('INSERT INTO genres(genre_name, genre_description) VALUES(? ,?)', [name, description]);
  }

  static updateById(id_genre, name, description) {
    return db.execute('UPDATE genres SET genre_name=?, genre_description=? WHERE genre_id=?', [name, description, id_genre]);
  }

  static deleteById(id_genre) {
    return db.execute('DELETE FROM genres WHERE genre_id=? ', [id_genre]);
  }

  static findAll() {
    return db.execute("SELECT * FROM genres;");
  }

  static findById(id_genre) {
    return db.execute("SELECT * FROM genres WHERE genre_id =?", [id_genre]);
  }
}

module.exports = Genre;