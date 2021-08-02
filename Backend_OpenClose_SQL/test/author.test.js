//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('author.test.js ', () => {
  // --------------------------------------------------------------- READ
  it('should read /authors/read', (done) => {
    chai.request(server).get("/authors/read").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      response.body.should.have.property('status').eql('success');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /authors/read/1', (done) => {
    const id_author = 1;
    chai.request(server).get(`/authors/read/${id_author}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      response.body.should.have.property('status').eql('success');
      done();
    });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /authors/create", (done) => {
    let data = {
      name: "TEST CREATE",
      bio: "TEST CREATE"
    }
    chai.request(server).post(`/authors/create/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /authors/update", (done) => {
    let data = {
      name: "TEST UPDATE",
      bio: "TEST UPDATE"
    }
    const id_author = 2;
    chai.request(server).put(`/authors/update/${id_author}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /authors/delete", (done) => {
    const id_author = 1;
    chai.request(server).delete(`/authors/delete/${id_author}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

});