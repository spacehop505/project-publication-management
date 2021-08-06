//npm i --save-dev chai
const chai = require('chai');
const chaiHttp = require("chai-http");

const server = require('../index.js');

chai.use(chaiHttp);
chai.should();


describe('genre.test.js ', () => {

  // --------------------------------------------------------------- READ
  it('should read /genre-management/genre', (done) => {
    chai.request(server).get("/genre-management/genre").end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- READ
  it('should read /genre-management/genre/1', (done) => {
    const id_genre = 1;
    chai.request(server).get(`/genre-management/genre/${id_genre}`).end((err, response) => {
      response.should.have.status(200);
      response.body.should.be.a('object');
      done();
    });
  });

  // --------------------------------------------------------------- UPDATE
  it("should update /genre-management/genre", (done) => {
    let data = {
      name: "TEST UPDATE",
      description: "TEST UPDATE"
    }
    const id_genre = 2;
    chai.request(server).put(`/genre-management/genre/${id_genre}`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- CREATE
  it("should create /genre-management/genre", (done) => {
    let data = {
      name: "TEST CREATE",
      description: "TEST CREATE"
    }
    chai.request(server).post(`/genre-management/genre/`)
      .send(data)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });

  // --------------------------------------------------------------- DELETE
  it("should delete /genre-management/genre", (done) => {
    const id_genre = 2;
    chai.request(server).delete(`/genre-management/genre/${id_genre}`)
      .end((err, response) => {
        response.should.have.status(200);
        response.body.should.be.a('object');
        response.body.should.have.property('status').eql('success');
        done();
      });
  });


});