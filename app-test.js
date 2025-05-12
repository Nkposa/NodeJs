let server = require("./app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion setup
chai.should();
chai.use(chaiHttp);

describe("Basic Test", () => {
  it("should return 200 on /live", (done) => {
    chai.request(server)
      .get("/live")
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
