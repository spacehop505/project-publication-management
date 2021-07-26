module.exports = class Books {
    constructor(id, title, description, isbn) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.isbn = isbn;
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
}