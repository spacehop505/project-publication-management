//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('genre.test.js ', () => {

  // --------------------------------------------------------------- READ
  it('should read /genres/read', (done) => {
    chai.request(server).get("/genres/read").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /genres/read/1', (done) => {
    const id_genre = 1;
    chai.request(server).get(`/genres/read/${id_genre}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /genres/update", (done) => {
    let data = {
      name: "TEST UPDATE",
      description: "TEST UPDATE"
    }
    const id_genre = 2;
    chai.request(server).put(`/genres/update/${id_genre}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /genres/create", (done) => {
    let data = {
      name: "TEST CREATE",
      description: "TEST CREATE"
    }
    chai.request(server).post(`/genres/create/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /genres/delete", (done) => {
    const id_genre = 2;
    chai.request(server).delete(`/genres/delete/${id_genre}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });


});