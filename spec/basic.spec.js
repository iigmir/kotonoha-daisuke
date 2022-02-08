import request_module from "../app/request-module.js";
import { doesNotThrow, rejects } from "assert";

const main = () =>
{
    describe("request_module", () => {
        it("should throw get article when the article is in dq.yam.com", async () => {
            await doesNotThrow( () => request_module("https://dq.yam.com/post.php?id=12436") );
        });
        it("should throw error when the article is invaild in dq.yam.com", async () => {
            const exp = request_module( "https://dq.yam.com/post.php?id=Invaild-number" );
            await rejects( exp , Error, "The article requesting failed!" );
        });
        it("should throw error when the article is not in dq.yam.com", async () => {
            const exp = request_module( "https://www.example.com" );
            await rejects( () => exp , Error, "The website is not from dq.yam.com!" );
        });
    });
}
export default main;
