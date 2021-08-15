//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('book.test.js ', () => {

  // --------------------------------------------------------------- READ
  it('should read /book-management/book', (done) => {
    chai.request(server).get("/book-management/book").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /book-management/book/1', (done) => {
    const id_author = 1;
    chai.request(server).get(`/book-management/book/${id_author}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /book-management/book/1", (done) => {
    let data = {
      title: "TEST UPDATE",
      description: "TEST UPDATE",
      isbn: "TEST UPDATE",
      genre: 3
    }
    const id_author = 1;
    chai.request(server).put(`/book-management/book/${id_author}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /book-management/book", (done) => {
    let data = {
      title: "TEST CREATE",
      description: "TEST CREATE",
      isbn: "TEST CREATE",
      genre: 3
    }
    chai.request(server).post(`/book-management/book`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /book-management/book", (done) => {
    const id_author = 2;
    chai.request(server).delete(`/book-management/book/${id_author}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

});