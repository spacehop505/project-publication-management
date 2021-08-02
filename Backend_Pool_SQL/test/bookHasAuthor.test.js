//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('bookHasAuthor.test.js ', () => {

// --------------------------------------------------------------- READ
  it('should read /bookshasauthors/read', (done) => {
    chai.request(server).get("/bookshasauthors/read").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

// --------------------------------------------------------------- DELETE
  it("should delete /bookshasauthors/delete", (done) => {
    let data = {
      id_book: 3,
      id_author: 3
    }
    chai.request(server).delete(`/bookshasauthors/delete/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

// --------------------------------------------------------------- CREATE
  it("should create /bookshasauthors/create", (done) => {
    let data = {
      id_book: 3,
      id_author: 3
    }
    chai.request(server).post(`/bookshasauthors/create/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });



});