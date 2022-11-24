const Customer = require("../models/Customer");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Customers", () => {
    beforeEach((done) => {
        Customer.deleteMany({}, (err) => {
            done();
        })
    });

    describe("/GET customer", () => {
        it("it should GET all the customers", (done) => {
            chai
                .request(app)
                .get("/api/customers")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("array");
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe("/POST customer", () => {
        it("it should new POST a customer", (done) => {
            let customer = {
                name: "Gerry P",
                phone: "081398589259",
                address: "Tangerang",
            };

            chai
                .request(app)
                .post("/api/customers")
                .send(customer)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a("object");
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });

    describe("/GET/:id customer", () => {
        it("it should GET a customer by the id", (done) => {
            let customer = new Customer({
                name: "Gerry P",
                phone: "081398589259",
                addres: "Tangerang",
            });

            customer.save((err, customer) => {
                chai
                    .request(app)
                    .get("/api/customers/" + customer.id)
                    .send(customer)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });

    describe("/PUT/:id customer", () => {
        it("it should UPDATE a customer given the id", (done) => {
            let customer = new Customer({
                name: "Gerry P",
                phone: "081398589259",
                address: "Tangerang",
            });

            customer.save((err, customer) => {
                console.log(customer.id);
                chai
                    .request(app)
                    .put("/api/customers/" + customer.id)
                    .send({
                        name: "Gerry P",
                        phone: "081398589259",
                        address: "Tangerang",
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });

    describe("/DELETE/:id customer", () => {
        it("it should DELETE a customer given the id", (done) => {
            let customer = new Customer({
                name: "Gerry P",
                phone: "081398589259",
                address: "Tangerang",
            });
            
            customer.save((err, customer) => {
                chai
                    .request(app)
                    .delete("/api/customers/" + customer.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.data.should.be.a("object");
                        res.body.status.should.be.eql("success");
                        done();
                    });
            });
        });
    });
});