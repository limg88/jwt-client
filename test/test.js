const mocha = require("mocha");
const expect = require("chai").expect;
const jwtToken = require("../jwt-token");

describe("getToken()", () => {
    it("simple test", async () => {
        let token = await jwtToken.getToken();
        expect(token).to.not.be.null;
    });
});