const Meta = require("../../app/parser/Meta.js");
const fs = require("fs");
const case1_expected = require("./case1.json");
const assert = require("assert");

const main = () =>
{
    describe("Meta", () => {
        it("should get all meta data", () => {
            fs.readFile( __dirname + "/case1-source.html", "utf8", ( err, case1_source ) =>
            {
                let result = new Meta( case1_source );
                assert.deepStrictEqual( result.result(), case1_expected );
            });
        });
    });
}
module.exports = main;
