let mongoose = require("mongoose");
let server = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion setup
chai.should();
chai.use(chaiHttp);

describe('Planets API Suite', () => {
    describe('Fetching Planet Details', () => {
        const testCases = [
            { id: 1, name: 'Mercury' },
            { id: 2, name: 'Venus' },
            { id: 3, name: 'Earth' },
            { id: 4, name: 'Mars' },
            { id: 5, name: 'Jupiter' },
            { id: 6, name: 'Saturn' },
            { id: 7, name: 'Uranus' },
            { id: 8, name: 'Neptune' }
        ];

        testCases.forEach(({ id, name }) => {
            it(`should fetch a planet named ${name}`, (done) => {
                chai.request(server)
                                       .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('id').eql(id);
                        res.body.should.have.property('name').eql(name);
                        done();
                    });
            });
        });
    });
});

describe('Testing Other Endpoints', () => {
    it('should fetch OS details', (done) => {
        chai.request(server)
            .get('/os')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it('should check Liveness endpoint', (done) => {
        chai.request(server)
            .get('/live')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql('live');
                done();
            });
    });

    it('should check Readiness endpoint', (done) => {
        chai.request(server)
            .get('/ready')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql('ready');
                done();
            });
    });
});
