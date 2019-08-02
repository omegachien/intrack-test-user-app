const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

require('dotenv').config();

chai.use(chaiHttp);

describe('/GET user segment', () => {
  it('it should return segment-1', (done) => {
    chai.request(server)
      .get('/user/user-1/segment')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('segment');
        res.body.segment.should.be.a('array');
        res.body.segment.should.to.eql(['segment-1']);
        done();
      });
  });
});

describe('/GET other user segment', () => {
  it('it should return segment-2', (done) => {
    chai.request(server)
      .get('/user/user-100x/segment')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('segment');
        res.body.segment.should.be.a('array');
        res.body.segment.should.to.eql(['segment-2']);
        done();
      });
  });
});
