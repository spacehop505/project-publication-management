module.exports = class Books {
    constructor(id, title, description, isbn, genre) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isbn = isbn;
        this.genre = genre;
    }

    
    id() {
        return this.id;
    }

    title() {
        return this.title;
    }

    description() {
        return this.description;
    }

    
    isbn() {
        return this.isbn;
    }

    genre() {
        return this.genre;
    }
}