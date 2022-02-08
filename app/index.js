import request from "./ajax/index.js";
import parser from "./parser/index.js";

export default (url = "https://dq.yam.com/post.php?id=12432") =>
{
    return new Promise( async (resolve, reject) =>
    {
        const content = await request(url);
        if( content )
        {
            resolve( parser( content ) );
        }
        reject( "Something unusual thing happened!" );
    });
};
