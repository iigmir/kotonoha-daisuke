import request from "./ajax/index.js";
import parser from "./parser/index.js";

export default (input) =>
{
    return new Promise( async (resolve, reject) =>
    {
        const url = `https://dq.yam.com/post/${String(input)}`;
        const content = await request(url);
        if( content )
        {
            resolve( parser( content ) );
        }
        reject( "Something unusual thing happened!" );
    });
};
