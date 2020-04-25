const Meta = require("../../app/parser/Meta.js");
const fs = require("fs");
const case1_expected = require("./case1.json");
const assert = require("assert");

const main = () =>
{
    describe("Meta", () => {
        it("should get title", () => {
            fs.readFile( __dirname + "/case1-source.html", "utf8", ( err, case1_source ) =>
            {
                let result = new Meta( case1_source );
                assert.equal( result.get_title("#mainContent article header h1"), case1_expected.title );
            });
        });
        it("should get date", () => {
            fs.readFile( __dirname + "/case1-source.html", "utf8", ( err, case1_source ) =>
            {
                let result = new Meta( case1_source );
                assert.equal( result.get_title("#mainContent article header .headerBar time"), case1_expected.date );
            });
        });
        it("should get author", () => {
            fs.readFile( __dirname + "/case1-source.html", "utf8", ( err, case1_source ) =>
            {
                let result = new Meta( case1_source );
                assert.equal( result.get_author("#mainContent article header .headerBar .author"), case1_expected.author );
            });
        });
        it("should get repost", () => {
            fs.readFile( __dirname + "/case1-source.html", "utf8", ( err, case1_source ) =>
            {
                let result = new Meta( case1_source );
                assert.equal( result.get_repost("#mainContent article .repost .box"), case1_expected.repost );
            });
        });
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
