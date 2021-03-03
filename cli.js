import app from "./app/index.js";
import fs from "fs";

const export_to_json = (content = "") => fs.writeFile(
    "result.json", content, (e) => {
    if( e ) throw e;
});

const main = async(input = 1234) =>
{
    try {
        res = await app(`https://dq.yam.com/post.php?id=${String(counter)}`);
    } catch (error) {
        res = {};
    } finally {
        export_to_json( JSON.stringify( res ) );
        return res;
    }
};

main(parseInt(process.argv[2]));

