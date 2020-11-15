import app from "./app/index.js";
import fs from "fs";

const export_to_json = (content = "") => fs.writeFile(
    "result.json", content, (e) => {
    if( e ) throw e;
});

const main = async(input = 1234) =>
{
    const res = await app(`https://dq.yam.com/post.php?id=${String(input)}`);
    export_to_json( JSON.stringify( res ) );
};

main(parseInt(process.argv[2]));

