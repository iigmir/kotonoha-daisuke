import KotonohaDaisuke from "../../app/index.js";
import { deepStrictEqual } from "assert";
import fs from "fs/promises";

const main = () =>
{
    describe("KotonohaDaisuke", () => {
        it("should get article", async () => {
            const result = await KotonohaDaisuke("12436");
            const json = await fs.readFile( "./spec/case1/result.json" );
            deepStrictEqual( result.data, json.data );
        });
    });
}
export default main;
