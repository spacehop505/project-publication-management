//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('author.test.js ', () => {
  // --------------------------------------------------------------- READ
  it('should read /author-management/author', (done) => {
    chai.request(server).get("/author-management/author").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      response.body.should.have.property('status').eql('success');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /author-management/author/1', (done) => {
    const id_author = 1;
    chai.request(server).get(`/author-management/author/${id_author}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      response.body.should.have.property('status').eql('success');
      done();
    });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /author-management/author", (done) => {
    let data = {
      name: "TEST CREATE",
      bio: "TEST CREATE"
    }
    chai.request(server).post(`/author-management/author`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /author-management/author", (done) => {
    let data = {
      name: "TEST UPDATE",
      bio: "TEST UPDATE"
    }
    const id_author = 2;
    chai.request(server).put(`/author-management/author/${id_author}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /author-management/author", (done) => {
    const id_author = 1;
    chai.request(server).delete(`/author-management/author/${id_author}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

});