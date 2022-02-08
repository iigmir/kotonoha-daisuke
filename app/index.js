import request from "./ajax/index.js";
import parser from "./parser/index.js";

export default (input = "12436") =>
{
    return new Promise( async (resolve, reject) =>
    {
        const content = await request(input);
        if( content )
        {
            resolve( parser( content ) );
        }
        reject( "Something unusual thing happened!" );
    });
};
