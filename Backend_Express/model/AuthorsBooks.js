module.exports = class AuthorBooks {
    constructor(author_id, books_id) {
        this.author_id = author_id;
        this.books_id = books_id;
    }

    author_id() {
        return this.author_id;
    }

    books_id() {
        return this.books_id;
    }

}