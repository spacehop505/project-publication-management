module.exports = class AuthorBooks {
    constructor(id_books, id_author) {
        this.id_books = id_books;
        this.id_author = id_author;

    }
    id_books() {
        return this.id_books;
    }

    id_author() {
        return this.id_author;
    }



}