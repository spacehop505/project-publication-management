//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('book-has-author.test.js ', () => {

// --------------------------------------------------------------- READ
  it('should read /book-has-author-management/book-has-author', (done) => {
    chai.request(server).get("/book-has-author-management/book-has-author").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

// --------------------------------------------------------------- DELETE
  it("should delete /book-has-author-management/book-has-author", (done) => {
    let data = {
      id_book: 3,
      id_author: 3
    }
    chai.request(server).delete(`/book-has-author-management/book-has-author`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

// --------------------------------------------------------------- CREATE
  it("should create /book-has-author-management/book-has-author", (done) => {
    let data = {
      id_book: 3,
      id_author: 3
    }
    chai.request(server).post(`/book-has-author-management/book-has-author`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });



});