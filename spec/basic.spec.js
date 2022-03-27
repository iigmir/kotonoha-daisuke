import request_module from "../app/ajax/index.js";
import { doesNotThrow, rejects } from "assert";

const main = () =>
{
    describe("request_module", () => {
        it("should throw get article when the article is in dq.yam.com", async () => {
            await doesNotThrow( () => request_module("12436") );
        });
        it("should throw error when the article is invaild in dq.yam.com", async () => {
            const exp = request_module( "Invaild-number" );
            await rejects( exp , Error, "The article requesting failed!" );
        });
    });
}
export default main;
