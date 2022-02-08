import app from "./app/index.js";
import fs from "fs";

const export_to_json = (content = "", filename = "result") => fs.writeFile(
    `./result/${filename}.json`, content, (e) => {
    if( e ) throw e;
});

const export_to_js = (content = "") => fs.writeFile(
    "./result/result.js", content, (e) => {
    if( e ) throw e;
});

const main = async(input = 1234) =>
{
    let res = {};
    try {
        res = await app(input);
    } catch (error) {
        res = error;
    } finally {
        // export_to_js( res.source );
        export_to_json( JSON.stringify(res.result, null, 4), String(input) );
        return res;
    }
};

main(process.argv[2]);

