const request_module = require("../app/request-module.js");
const assert = require("assert");

const main = () =>
{
    describe("request_module", () => {
        it("should throw get article when the article is in dq.yam.com", async () => {
            assert.doesNotThrow( () => request_module("https://dq.yam.com/post.php?id=12436") );
        });
        it("should throw error when the article is invaild in dq.yam.com", async () => {
            assert.throws( () => request_module("https://dq.yam.com/post.php?id=Invaild-number"), "The article requesting failed!" );
        });
        it("should throw error when the article is not in dq.yam.com", async () => {
            assert.throws( () => request_module("https://www.example.com"), "The website is not from dq.yam.com!" );
        });
    });
}
module.exports = main;
