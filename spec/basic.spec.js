import request_module from "../app/ajax/index.js";
import { doesNotThrow, rejects } from "assert";

const main = () =>
{
    describe("request_module", () => {
        it("should throw get article when the article is in dq.yam.com", async () => {
            await doesNotThrow( () => request_module("12436") );
        });
    });
}
export default main;
