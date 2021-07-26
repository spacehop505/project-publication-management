module.exports = class AuthorBooks {
    constructor(id, author_id, books_id) {
        this.id = id;
        this.author_id = author_id;
        this.books_id = books_id;
    }

    id(){
        return this.id;
    }

    author_id() {
        return this.author_id;
    }

    books_id() {
        return this.books_id;
    }

}