//npm i --save-dev chai
let chai = require('chai');
let chaiHttp = require("chai-http");
let server = require('../index.js');


chai.should();

chai.use(chaiHttp);



describe('GET /genres', () => {
  it('GET all genres', () => {
    chai.request(server).get("/read/genres").end((err, response) => {
      response.should.have.status(200);
     // response.body.should.be.a('array');
      //response.body.length.should.be.eq(3);

    });
  });
});


