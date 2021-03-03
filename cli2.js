import app from "./app/index.js";
import fs from "fs";

const export_to_json = (id, content = "") => fs.writeFile(
    `./result/${id}.json`, content, (e) => {
    if( e ) throw e;
});

const main = async(start = 0, end = -1) =>
{
    let res = "";
    if( end > start )
    {
        for( let counter = start; counter <= end; counter++ )
        {
            res = await app(`https://dq.yam.com/post.php?id=${String(counter)}`);
            export_to_json( JSON.stringify( counter, res ) );
        }
    }
    else
    {
        res = await app(`https://dq.yam.com/post.php?id=${String(start)}`);
        export_to_json( JSON.stringify( start, res ) );
    }
};

main(
    parseInt(process.argv[2], 10),
    parseInt(process.argv[3], 10),
);

