import app from "./app/index.js";
import fs from "fs";

const export_to_json = (id, content = "") => fs.writeFile(
    `./result/${id}.json`, content, (e) => {
    if( e ) throw e;
});

const action = async(counter = 0) =>
{
    let res = {};
    try {
        res = await app(`https://dq.yam.com/post.php?id=${String(counter)}`);
    } catch (error) {
        console.error( error );
        res = {};
    } finally {
        return res;
    }
};

const main = async(start = 0, end = -1) =>
{
    let res = "";
    if( end > start )
    {
        for( let counter = start; counter <= end; counter++ )
        {
            res = await action( counter );
            export_to_json( counter, JSON.stringify( res ) );
        }
    }
    else
    {
        res = await action( start );
        export_to_json( start, JSON.stringify( res ) );
    }
};

main(
    parseInt(process.argv[2], 10),
    parseInt(process.argv[3], 10),
);

