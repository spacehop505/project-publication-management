module.exports = class Genre {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }

    id() {
        return this.id;
    }

    name() {
        return this.id;
    }

    description() {
        return this.description;
    }
}