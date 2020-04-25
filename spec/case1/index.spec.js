const KotonohaDaisuke = require("../../index.js");
const expected = require("./result.json");
const assert = require("assert");

const main = () =>
{
    describe("KotonohaDaisuke", () => {
        it("should get article", () => {
            const result = KotonohaDaisuke("https://dq.yam.com/post.php?id=12432");
            assert.equal( result.meta.title, expected.meta.title );
        });
    });
}
module.exports = main;
