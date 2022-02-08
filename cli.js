import app from "./app/index.js";
import fs from "fs";

const export_to_json = (content = "") => fs.writeFile(
    "result.json", content, (e) => {
    if( e ) throw e;
});

const main = async(input = 1234) =>
{
    let res = {};
    try {
        res = await app(`https://dq.yam.com/post/${String(input)}`);
    } catch (error) {
        res = error;
    } finally {
        export_to_json( JSON.stringify( res, null, 4 ) );
        return res;
    }
};

main(process.argv[2]);

