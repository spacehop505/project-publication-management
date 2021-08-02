//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('book.test.js ', () => {

  // --------------------------------------------------------------- READ
  it('should read /books/read', (done) => {
    chai.request(server).get("/books/read").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /books/read/1', (done) => {
    const id_author = 1;
    chai.request(server).get(`/books/read/${id_author}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /books/update/1", (done) => {
    let data = {
      title: "TEST UPDATE",
      description: "TEST UPDATE",
      isbn: "TEST UPDATE",
      genre: 3
    }
    const id_author = 1;
    chai.request(server).put(`/books/update/${id_author}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /books/create", (done) => {
    let data = {
      title: "TEST CREATE",
      description: "TEST CREATE",
      isbn: "TEST CREATE",
      genre: 3
    }
    chai.request(server).post(`/books/create/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /books/delete", (done) => {
    const id_author = 2;
    chai.request(server).delete(`/books/delete/${id_author}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

});