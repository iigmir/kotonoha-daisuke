const KotonohaDaisuke = require("../../index.js");
const expected = require("./result.json");
const assert = require("assert");

const main = () =>
{
    describe("KotonohaDaisuke", () => {
        it("should get article", async () => {
            const result = await KotonohaDaisuke("https://dq.yam.com/post.php?id=12436");
            assert.equal( result.meta.title, expected.meta.title );
            assert.equal( result.contents[0], expected.contents[0] );
            assert.equal( result.references[0].name, expected.references[0].name );
        });
    });
}
module.exports = main;
