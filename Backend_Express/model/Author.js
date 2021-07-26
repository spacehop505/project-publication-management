module.exports = class Author {
    constructor(id, name, bio) {
        this.id = id;
        this.name = name;
        this.bio = bio;
    }

    id() {
        return this.id;
    }

    name() {
        return this.id;
    }

    bio() {
        return this.bio;
    }
}