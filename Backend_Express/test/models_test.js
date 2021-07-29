//npm i --save-dev chai
var expect = require('chai').expect;

const Genre = require('../model/Genre.js');
const Book = require('../model/Book.js');
const Author = require('../model/Author.js');
const Books_has_Authors = require('../model/Books_has_Authors.js');


describe('Genre', function () {
  it('Genre Model Test', function () {
    const class_genre = new Genre(1, "horror", "spooky");
    expect(class_genre.id).to.equal(1);
    expect(class_genre.name).to.equal("horror");
    expect(class_genre.description).to.equal("spooky");
  });
});

describe('Book', function () {
  it('Book Model Test', function () {
    const class_book = new Book(1, "Robin", "SSSS", "0EE2", 1);
    expect(class_book.id).to.equal(1);
    expect(class_book.title).to.equal("Robin");
    expect(class_book.description).to.equal("SSSS");
    expect(class_book.isbn).to.equal("0EE2");
    expect(class_book.genre).to.equal(1);
  });
});

describe('Author', function () {
  it('Author Model Test', function () {
    const class_author = new Author(1, "Tom", "best seller");
    expect(class_author.id).to.equal(1);
    expect(class_author.name).to.equal("Tom");
    expect(class_author.bio).to.equal("best seller");
  });
});

describe('Books_has_Authors', function () {
  it('Books_has_Authors Model Test', function () {
    const class_books_has_authors = new Books_has_Authors(1,1);
    expect(class_books_has_authors.id_books).to.equal(1);
    expect(class_books_has_authors.id_author).to.equal(1);
  });
});